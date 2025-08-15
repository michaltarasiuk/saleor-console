import {BreadcrumbLink, Breadcrumbs} from "@/components/Breadcrumbs";
import {Routes} from "@/consts/routes";
import {FormattedMessage} from "@/i18n/react-intl";

export function CheckoutBreadcrumbs() {
  return (
    <Breadcrumbs>
      <BreadcrumbLink href={Routes.cart}>
        <FormattedMessage id="2tqQFl" defaultMessage="Cart" />
      </BreadcrumbLink>
      <BreadcrumbLink href={Routes.checkout.information}>
        <FormattedMessage id="E80WrK" defaultMessage="Information" />
      </BreadcrumbLink>
      <BreadcrumbLink href={Routes.checkout.shipping}>
        <FormattedMessage id="PRlD0A" defaultMessage="Shipping" />
      </BreadcrumbLink>
      <BreadcrumbLink href={Routes.checkout.payment}>
        <FormattedMessage id="NmK6zy" defaultMessage="Payment" />
      </BreadcrumbLink>
    </Breadcrumbs>
  );
}
