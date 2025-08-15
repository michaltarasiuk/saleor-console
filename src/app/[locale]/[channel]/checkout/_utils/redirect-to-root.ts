import {redirect} from "next/navigation";

import {Routes} from "@/consts/routes";

export function redirectToRoot(): never {
  redirect(Routes.home);
}
