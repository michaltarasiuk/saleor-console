import {Suspense} from "react";

import {
  SkeletonSummaryDisclosure,
  SummaryDisclosure,
} from "@/components/SummaryDisclosure";
import {cn} from "@/utils/cn";

export default async function OrderPage() {
  return (
    <Suspense fallback={<SkeletonOrder />}>
      <Order />
    </Suspense>
  );
}

function Order() {
  return (
    <>
      <div className={cn("mb-small-200 md:hidden")}>
        <SummaryDisclosure
          taxedMoney={{
            net: {amount: 0, currency: "USD"},
            gross: {amount: 0, currency: "USD"},
          }}
          className={cn("-mx-large-200")}>
          {null}
        </SummaryDisclosure>
      </div>
    </>
  );
}

function SkeletonOrder() {
  return (
    <>
      <div className={cn("mb-small-200 md:hidden")}>
        <SkeletonSummaryDisclosure className={cn("-mx-large-200")} />
      </div>
    </>
  );
}
