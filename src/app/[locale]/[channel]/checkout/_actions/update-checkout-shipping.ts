"use server";

import {redirect} from "next/navigation";
import * as z from "zod";

import {Routes} from "@/consts/routes";
import {getClient} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {getCheckoutId} from "@/utils/checkout";
import {isDefined} from "@/utils/is-defined";

import {redirectToRoot} from "../_utils/redirect-to-root";
import {toValidationErrors} from "../_utils/validation-errors";

const CheckoutShippingMethodUpdateMutation = graphql(`
  mutation CheckoutShippingMethodUpdate($id: ID!, $shippingMethodId: ID!) {
    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $shippingMethodId) {
      errors {
        ...CheckoutValidationError
      }
    }
  }
`);

export async function updateCheckoutShipping(
  _state: unknown,
  formData: FormData,
) {
  const checkoutId = await getCheckoutId();
  if (!isDefined(checkoutId)) {
    redirectToRoot();
  }
  const {shippingMethodId} = parseFormData(formData);
  const {data} = await getClient().mutate({
    mutation: CheckoutShippingMethodUpdateMutation,
    variables: {
      id: checkoutId.value,
      shippingMethodId,
    },
  });
  const errors = data?.checkoutDeliveryMethodUpdate?.errors ?? [];
  if (!errors.length) {
    redirect(Routes.checkout.payment);
  }
  return {
    errors: toValidationErrors(errors),
  };
}

const FormSchema = z.object({
  shippingMethodId: z.string(),
});

function parseFormData(formData: FormData) {
  return FormSchema.parse(Object.fromEntries(formData));
}
