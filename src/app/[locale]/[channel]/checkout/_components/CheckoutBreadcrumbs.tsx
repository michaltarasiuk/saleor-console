"use client";

import {BreadcrumbLink, Breadcrumbs} from "@/components/Breadcrumbs";
import {Routes} from "@/consts/routes";
import {useAppPathname} from "@/hooks/use-app-pathname";
import {FormattedMessage} from "@/i18n/react-intl";

type BreadcrumbLinkProps = React.ComponentProps<typeof BreadcrumbLink>;

export function CheckoutBreadcrumbs() {
  const pathname = useAppPathname();
  function getBreadcrumbLinkProps(href: string): BreadcrumbLinkProps {
    return {
      href,
      isDisabled: getBreadcrumbIndex(href) > getBreadcrumbIndex(pathname),
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
