import {notFound} from "next/navigation";

import {getCheckoutId} from "@/modules/checkout/utils/cookies";
import {isDefined} from "@/utils/is-defined";

import {CompleteOrderButton} from "./_components/CompleteOrderButton";

export default async function CheckoutInformationPage() {
  const checkoutId = await getCheckoutId();
  if (!isDefined(checkoutId)) {
    notFound();
  }
  return <CompleteOrderButton />;
}
