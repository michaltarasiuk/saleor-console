"use server";

import {notFound} from "next/navigation";
import * as z from "zod";

import {getClient} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {getCheckoutId} from "@/modules/checkout/utils/cookies";
import {toValidationErrors} from "@/modules/checkout/utils/validation-errors";
import {isDefined} from "@/utils/is-defined";

const FormSchema = z.object({
  promoCode: z.string(),
});

const CheckoutAddPromoCodeMutation = graphql(`
  mutation CheckoutAddPromoCode($id: ID!, $promoCode: String!) {
    checkoutAddPromoCode(id: $id, promoCode: $promoCode) {
      errors {
        ...CheckoutValidationError @unmask
      }
    }
  }
`);

export async function addCheckoutPromoCode(
  _state: unknown,
  formData: FormData,
) {
  const checkoutId = await getCheckoutId();
  if (!isDefined(checkoutId)) {
    notFound();
  }
  const {promoCode} = FormSchema.parse(Object.fromEntries(formData));
  const {data} = await getClient().mutate({
    mutation: CheckoutAddPromoCodeMutation,
    variables: {
      id: checkoutId.value,
      promoCode,
    },
  });
  return {
    errors: toValidationErrors(data?.checkoutAddPromoCode?.errors ?? []),
  };
}
