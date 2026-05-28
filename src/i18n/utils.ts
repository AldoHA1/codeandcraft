import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedHref(lang: Lang, hash: string = ''): string {
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return hash ? `${base}${hash}` : base;
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getOgLocale(lang: Lang): string {
  return lang === 'es' ? 'es_ES' : 'en_US';
}
