import {Suspense} from "react";

import type {Locale} from "@/i18n/consts";
import {cn} from "@/utils/cn";

import {OrderHeader} from "./_components/OrderHeader";
import {
  OrderSummaryDisclosure,
  SkeletonOrderSummaryDisclosure,
} from "./_components/OrderSummaryDisclosure";

interface OrderPageProps {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
}

export default async function OrderPage({params}: OrderPageProps) {
  const {locale} = await params;
  return (
    <Suspense fallback={<SkeletonOrder />}>
      <Order locale={locale} />
    </Suspense>
  );
}

function Order({locale}: {locale: Locale}) {
  return (
    <>
      <div className={cn("mb-small-200 md:hidden")}>
        <OrderSummaryDisclosure />
      </div>
      <OrderHeader locale={locale} />
    </>
  );
}

function SkeletonOrder() {
  return (
    <>
      <div className={cn("mb-small-200 md:hidden")}>
        <SkeletonOrderSummaryDisclosure />
      </div>
    </>
  );
}
