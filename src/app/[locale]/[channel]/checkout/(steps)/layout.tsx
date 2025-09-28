import {HeadingGroup} from "@/components/Heading";

import {CheckoutLayout} from "../_components/CheckoutLayout";
import {CheckoutBreadcrumbs} from "./_components/CheckoutBreadcrumbs";
import {CheckoutSummary} from "./_components/CheckoutSummary";

export default function CheckoutStepsLayout({
  children,
}: LayoutProps<"/[locale]/[channel]/checkout">) {
  return (
    <CheckoutLayout summary={<CheckoutSummary />}>
      <CheckoutBreadcrumbs />
      <HeadingGroup>{children}</HeadingGroup>
    </CheckoutLayout>
  );
}
