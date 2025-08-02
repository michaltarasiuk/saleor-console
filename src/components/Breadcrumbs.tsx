"use client";

import {
  Breadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps,
} from "react-aria-components";

import {IntlLink} from "@/i18n/components/IntlLink";
import {ChevronRightIcon} from "@/icons/ChevronRightIcon";
import {cn} from "@/utils/cn";

interface BreadcrumbItem {
  href: string;
  label: string;
  isDisabled?: boolean;
}

export function Breadcrumbs({
  items = [],
  ...props
}: BreadcrumbsProps<BreadcrumbItem>) {
  return (
    <AriaBreadcrumbs
      {...props}
      items={Array.from(items, (item) => ({key: item.href, ...item}))}
      className={cn("gap-small-200 flex", props.className)}>
      {({href, label, isDisabled}) => (
        <Breadcrumb className={cn("group")}>
          <IntlLink
            href={href}
            isDisabled={isDisabled}
            className={cn("hover:no-underline")}
            {...props}>
            {label}
            <ChevronRightIcon
              aria-hidden
              className={cn("size-3 group-last:hidden")}
            />
          </IntlLink>
        </Breadcrumb>
      )}
    </AriaBreadcrumbs>
  );
}
