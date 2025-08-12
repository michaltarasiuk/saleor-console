import {Suspense} from "react";

import {
  OrderSummaryDisclosure,
  SkeletonOrderSummaryDisclosure,
} from "@/components/OrderSummaryDisclosure";
import type {Locale} from "@/i18n/consts";
import {cn} from "@/utils/cn";

import {OrderHeader} from "./_components/OrderHeader";

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
        <OrderSummaryDisclosure className={cn("-mx-large-200")} />
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
