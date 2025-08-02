import type {LanguageCodeEnum} from "@/graphql/codegen/graphql";

import type {Locale} from "../consts";

export function localeToLanguageCode(locale: Locale) {
  return locale.replaceAll("-", "_").toUpperCase() as LanguageCodeEnum;
}
