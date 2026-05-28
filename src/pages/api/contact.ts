import type { APIRoute } from "astro";
import emailTemplate from "../../emails/contact-notification.html?raw";

export const prerender = false;

const TO_EMAIL = "info@codeandcraftcr.com";
const FROM_EMAIL = "info@codeandcraftcr.com";
const FROM_NAME = "Code & Craft";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const render = (data: { name: string; email: string; message: string }) =>
  emailTemplate
    .replaceAll("{{name}}", escapeHtml(data.name))
    .replaceAll("{{email}}", escapeHtml(data.email))
    .replaceAll("{{message}}", escapeHtml(data.message));

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: { name?: unknown; email?: unknown; message?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 200) return json({ error: "invalid_name" }, 400);
  if (!email || !EMAIL_RE.test(email) || email.length > 320)
    return json({ error: "invalid_email" }, 400);
  if (!message || message.length > 5000)
    return json({ error: "invalid_message" }, 400);

  let apiKey: string | undefined;
  try {
    const mod = await import(/* @vite-ignore */ "cloudflare:workers");
    apiKey = (mod.env as Record<string, string | undefined>)?.SENDGRID_API_KEY;
  } catch {
    // Not running on workerd (e.g., vite dev without platform proxy). Fall through.
  }
  apiKey ??= import.meta.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error("SENDGRID_API_KEY missing");
    return json({ error: "server_misconfigured" }, 500);
  }

  const html = render({ name, email, message });
  const text = `Nuevo mensaje de contacto\n\nNombre: ${name}\nCorreo: ${email}\n\nMotivo:\n${message}`;

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL, name: FROM_NAME },
      reply_to: { email, name },
      subject: `Nuevo contacto: ${name}`,
      content: [
        { type: "text/plain", value: text },
        { type: "text/html", value: html },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("SendGrid error", res.status, body);
    return json({ error: "send_failed" }, 502);
  }

  return json({ ok: true });
};
