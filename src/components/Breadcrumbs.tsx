"use client";

import {
  Breadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps,
} from "react-aria-components";

import {IntlLink} from "@/i18n/components/IntlLink";
import {ChevronRightIcon} from "@/icons/ChevronRightIcon";
import {cn} from "@/utils/cn";

interface BreadcrumbItem extends BreadcrumbLinkProps {
  id: string;
  label: string;
}

export function Breadcrumbs({
  children,
  ...props
}: BreadcrumbsProps<BreadcrumbItem>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={cn("gap-small-200 flex flex-wrap", props.className)}>
      {children ??
        (({label, ...props}) => (
          <BreadcrumbLink {...props}>{label}</BreadcrumbLink>
        ))}
    </AriaBreadcrumbs>
  );
}

type BreadcrumbLinkProps = React.ComponentProps<typeof IntlLink>;

export function BreadcrumbLink({
  children,
  isDisabled = false,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <Breadcrumb className={cn("group")}>
      <IntlLink
        isDisabled={isDisabled}
        {...props}
        className={cn(
          "hover:no-underline",
          "data-route-match:text-base-text",
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
