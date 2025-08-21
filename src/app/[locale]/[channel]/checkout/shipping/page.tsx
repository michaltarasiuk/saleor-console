import {Suspense} from "react";

import {PreloadQuery} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {getCheckoutId} from "@/utils/checkout";
import {isDefined} from "@/utils/is-defined";

import {
  CheckoutShippingForm,
  SkeletonCheckoutShippingForm,
} from "../_components/CheckoutShippingForm";
import {redirectToRoot} from "../_utils/redirect-to-root";

const CheckoutShipping_CheckoutQuery = graphql(`
  query CheckoutShipping_Checkout($id: ID!) {
    checkout(id: $id) {
      ...CheckoutShippingMethods_Checkout
    }
  }
`);

export default async function CheckoutShippingPage() {
  const checkoutId = await getCheckoutId();
  if (!isDefined(checkoutId)) {
    redirectToRoot();
  }
  return (
    <PreloadQuery
      query={CheckoutShipping_CheckoutQuery}
      variables={{
        id: checkoutId.value,
      }}>
      {(queryRef) => (
        <Suspense fallback={<SkeletonCheckoutShippingForm />}>
          <CheckoutShippingForm queryRef={queryRef} />
        </Suspense>
      )}
    </PreloadQuery>
  );
}
