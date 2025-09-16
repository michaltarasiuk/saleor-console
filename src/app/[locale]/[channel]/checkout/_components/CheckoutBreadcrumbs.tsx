"use client";

import {usePathname} from "next/navigation";

import {BreadcrumbLink, Breadcrumbs} from "@/components/Breadcrumbs";
import {Routes} from "@/consts/routes";
import {usePathnameContext} from "@/hooks/use-pathname-context";
import {FormattedMessage} from "@/i18n/react-intl";
import {joinPathSegments} from "@/utils/pathname";

type BreadcrumbLinkProps = React.ComponentProps<typeof BreadcrumbLink>;

export function CheckoutBreadcrumbs() {
  const pathname = usePathname();
  const [locale, channel] = usePathnameContext();
  const pathWithoutLocaleAndChannel = pathname
    .replace(joinPathSegments(locale), "")
    .replace(joinPathSegments(channel), "");
  function getBreadcrumbLinkProps(href: string): BreadcrumbLinkProps {
    return {
      href,
      isDisabled:
        getBreadcrumbIndex(href) >
        getBreadcrumbIndex(pathWithoutLocaleAndChannel),
    };
  }
  return (
    <Breadcrumbs>
      <BreadcrumbLink {...getBreadcrumbLinkProps(Routes.cart)}>
        <FormattedMessage id="2tqQFl" defaultMessage="Cart" />
      </BreadcrumbLink>
      <BreadcrumbLink {...getBreadcrumbLinkProps(Routes.checkout.information)}>
        <FormattedMessage id="E80WrK" defaultMessage="Information" />
      </BreadcrumbLink>
      <BreadcrumbLink {...getBreadcrumbLinkProps(Routes.checkout.delivery)}>
        <FormattedMessage id="drqP2L" defaultMessage="Delivery" />
      </BreadcrumbLink>
      <BreadcrumbLink {...getBreadcrumbLinkProps(Routes.checkout.billing)}>
        <FormattedMessage id="Tbo377" defaultMessage="Billing" />
      </BreadcrumbLink>
    </Breadcrumbs>
  );
}

function getBreadcrumbIndex(href: string): number {
  switch (href) {
    case Routes.cart:
      return 0;
    case Routes.checkout.information:
      return 1;
    case Routes.checkout.delivery:
      return 2;
    case Routes.checkout.billing:
      return 3;
    default:
      return -1;
  }
}
