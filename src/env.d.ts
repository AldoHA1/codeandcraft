/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SENDGRID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "cloudflare:workers" {
  export const env: {
    SENDGRID_API_KEY: string;
  };
}
