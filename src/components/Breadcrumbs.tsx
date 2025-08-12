"use client";

import {cva} from "class-variance-authority";
import {usePathname} from "next/navigation";
import {
  Breadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps,
} from "react-aria-components";

import {IntlLink} from "@/i18n/components/IntlLink";
import {useChannel} from "@/i18n/hooks/use-channel";
import {useLocale} from "@/i18n/hooks/use-locale";
import {ChevronRightIcon} from "@/icons/ChevronRightIcon";
import {cn} from "@/utils/cn";
import {isDefined} from "@/utils/is-defined";
import {joinPathSegments} from "@/utils/pathname";

interface BreadcrumbItem extends React.ComponentProps<typeof BreadcrumbLink> {
  id: string;
  label: string;
}

export function Breadcrumbs({
  children = ({label, ...props}) => (
    <BreadcrumbLink {...props}>{label}</BreadcrumbLink>
  ),
  ...props
}: BreadcrumbsProps<BreadcrumbItem>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={cn("gap-small-200 flex flex-wrap", props.className)}>
      {children}
    </AriaBreadcrumbs>
  );
}

const breadcrumbLink = cva("hover:no-underline", {
  variants: {
    current: {
      true: "text-base-text",
    },
  },
});

export function BreadcrumbLink({
  href,
  children,
  ...props
}: React.ComponentProps<typeof IntlLink>) {
  const pathname = usePathname();
  const locale = useLocale();
  const channel = useChannel();
  const hrefWithLocaleAndChannel = isDefined(href)
    ? joinPathSegments(locale, channel, href)
    : href;
  return (
    <Breadcrumb className={cn("group")}>
      <IntlLink
        href={href}
        {...props}
        className={cn(
          breadcrumbLink({
            current: pathname === hrefWithLocaleAndChannel,
          }),
          props.className,
        )}>
        {(renderProps) => (
          <>
            {typeof children === "function" ? children(renderProps) : children}
            <ChevronRightIcon
              aria-hidden
              className={cn("size-3 group-last:hidden")}
            />
          </>
        )}
      </IntlLink>
    </Breadcrumb>
  );
}
