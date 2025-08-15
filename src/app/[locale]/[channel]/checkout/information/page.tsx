"use client";

import dynamic from "next/dynamic";
import {Suspense} from "react";

import {SkeletonCheckoutInformation} from "./_components/CheckoutInformation";

const CheckoutInformation = dynamic(
  () =>
    import("./_components/CheckoutInformation").then(
      (module) => module.CheckoutInformation,
    ),
  {
    ssr: false,
    loading() {
      return <SkeletonCheckoutInformation />;
    },
  },
);

export default function CheckoutInformationPage() {
  return (
    <Suspense fallback={<SkeletonCheckoutInformation />}>
      <CheckoutInformation />
    </Suspense>
  );
}
