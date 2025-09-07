import {useLocale} from "@/i18n/hooks/use-locale";
import {useChannel} from "@/modules/channels/hooks/use-channel";

export function usePathnameContext() {
  return [useLocale(), useChannel()] as const;
}
