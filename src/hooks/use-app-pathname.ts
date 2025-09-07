import {usePathname} from "next/navigation";

import {joinPathSegments} from "@/utils/pathname";

import {usePathnameContext} from "./use-pathname-context";

export function useAppPathname() {
  const pathname = usePathname();
  const [locale, channel] = usePathnameContext();
  return pathname
    .replace(joinPathSegments(locale), "")
    .replace(joinPathSegments(channel), "");
}
