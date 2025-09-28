import {ProductList} from "@/components/ProductList";
import {SummaryDisclosure} from "@/components/SummaryDisclosure";
import {cn} from "@/utils/cn";

import {AddPromoCodeForm} from "./AddPromoCodeForm";
import {CheckoutMoneyLines} from "./CheckoutMoneyLines";

export function CheckoutSummary() {
  const checkoutSummary = (
    <>
      <ProductList />
      <AddPromoCodeForm />
      <CheckoutMoneyLines />
    </>
  );
  return (
    <>
      <div className={cn("space-y-large-200 hidden", "md:block")}>
        {checkoutSummary}
      </div>
      <SummaryDisclosure
        taxedMoney={{
          gross: {amount: 0, currency: "USD"},
          net: {amount: 0, currency: "USD"},
        }}
        className={cn("md:hidden")}>
        {checkoutSummary}
      </SummaryDisclosure>
    </>
  );
}
