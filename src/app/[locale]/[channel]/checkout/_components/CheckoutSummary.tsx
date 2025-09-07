import {ProductList} from "@/components/ProductList";
import {SummaryDisclosure} from "@/components/SummaryDisclosure";
import {cn} from "@/utils/cn";

import {AddPromoCodeForm} from "./AddPromoCodeForm";

export function CheckoutSummaryDisclosure() {
  return (
    <SummaryDisclosure
      taxedMoney={{
        gross: {amount: 0, currency: "USD"},
        net: {amount: 0, currency: "USD"},
      }}
      className={cn("md:hidden")}>
      <CheckoutSummary />
    </SummaryDisclosure>
  );
}

export function CheckoutSummary() {
  return (
    <>
      <ProductList />
      <AddPromoCodeForm />
    </>
  );
}

export function SkeletonCheckoutSummary() {
  return null;
}
