import {useChannel} from "@/i18n/hooks/use-channel";
import {useLocale} from "@/i18n/hooks/use-locale";

export function useBasePath() {
  return [useLocale(), useChannel()] as const;
}
