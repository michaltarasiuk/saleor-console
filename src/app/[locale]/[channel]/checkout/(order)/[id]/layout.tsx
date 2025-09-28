import {CheckoutLayout} from "../../_components/CheckoutLayout";
import {CheckoutOrderSummary} from "./_components/CheckoutOrderSummary";

export default function CheckoutOrderLayout({
  children,
}: LayoutProps<"/[locale]/[channel]/checkout">) {
  return (
    <CheckoutLayout summary={<CheckoutOrderSummary />}>
      {children}
    </CheckoutLayout>
  );
}
