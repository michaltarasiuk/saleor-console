import {useLocale} from "@/i18n/hooks/use-locale";
import {useChannel} from "@/modules/channels/hooks/use-channel";

export function useBasePath() {
  return [useLocale(), useChannel()] as const;
}
