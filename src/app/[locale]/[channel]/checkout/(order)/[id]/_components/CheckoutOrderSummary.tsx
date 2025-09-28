import {ProductList} from "@/components/ProductList";
import {SummaryDisclosure} from "@/components/SummaryDisclosure";
import {cn} from "@/utils/cn";

import {CheckoutOrderMoneyLines} from "./CheckoutOrderMoneyLines";

export function CheckoutOrderSummary() {
  const checkoutOrderSummary = (
    <>
      <ProductList />
      <CheckoutOrderMoneyLines />
    </>
  );
  return (
    <>
      <div className={cn("space-y-large-200 hidden", "md:block")}>
        {checkoutOrderSummary}
      </div>
      <SummaryDisclosure
        taxedMoney={{
          gross: {amount: 0, currency: "USD"},
          net: {amount: 0, currency: "USD"},
        }}
        className={cn("md:hidden")}>
        {checkoutOrderSummary}
      </SummaryDisclosure>
    </>
  );
}
