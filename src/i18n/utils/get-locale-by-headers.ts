import {match} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {headers} from "next/headers";

import {DefaultLocale, Locales} from "../consts";

export async function getLocaleByHeaders() {
  const languages = new Negotiator({
    headers: Object.fromEntries([...(await headers())]),
  }).languages();
  let matchedLocale: string | undefined;
  try {
    const orderedLocales = Locales.toSorted((a, b) => b.length - a.length);
    matchedLocale = match(languages, orderedLocales, DefaultLocale);
  } catch {}
  return matchedLocale;
}
