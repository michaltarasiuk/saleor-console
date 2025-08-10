export type Locale = (typeof Locales)[number];

export const NextLocaleCookieName = "NEXT_LOCALE";

export const DefaultLocale = "en-US";
export const Locales = [
  DefaultLocale,
  "de-DE",
  "fr-FR",
  "es-ES",
  "pl-PL",
] as const;
