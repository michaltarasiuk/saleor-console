"use server";

import {notFound, redirect} from "next/navigation";
import * as z from "zod";

import {Routes} from "@/consts/routes";
import {getClient} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {getCheckoutId} from "@/modules/checkout/utils/cookies";
import {toValidationErrors} from "@/modules/checkout/utils/validation-errors";
import {BasePathSchema} from "@/utils/base-path";
import {isDefined} from "@/utils/is-defined";
import {joinPathSegments} from "@/utils/pathname";

const FormSchema = z.object({
  shippingMethodId: z.string(),
  ...BasePathSchema.shape,
});

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
    notFound();
  }
  const {shippingMethodId, locale, channel} = FormSchema.parse(
    Object.fromEntries(formData),
  );
  const {data} = await getClient().mutate({
    mutation: CheckoutShippingMethodUpdateMutation,
    variables: {
      id: checkoutId.value,
      shippingMethodId,
    },
  });
  const errors = data?.checkoutDeliveryMethodUpdate?.errors ?? [];
  if (!errors.length) {
    redirect(joinPathSegments(locale, channel, Routes.checkout.payment));
  }
  return {
    errors: toValidationErrors(errors),
  };
}
