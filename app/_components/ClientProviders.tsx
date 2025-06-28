"use client";

import {useRouter} from "next/navigation";
import {RouterProvider} from "react-aria-components";

declare module "react-aria-components" {
  type AppRouterInstance = ReturnType<typeof useRouter>;
  type RouterOptions =
    AppRouterInstance["push"] extends (
      (href: string, options?: infer NavigateOptions) => void
    ) ?
      NavigateOptions
    : never;
  interface RouterConfig {
    routerOptions: RouterOptions;
  }
}

export function ClientProviders({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
}
