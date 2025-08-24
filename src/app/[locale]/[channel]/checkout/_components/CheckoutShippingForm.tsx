"use client";

import {type QueryRef, useReadQuery} from "@apollo/client/react";
import {useActionState, useTransition} from "react";

import {Button} from "@/components/Button";
import {Form} from "@/components/Form";
import {Routes} from "@/consts/routes";
import type {CheckoutShipping_CheckoutQuery} from "@/graphql/codegen/graphql";
import {IntlLink} from "@/i18n/components/IntlLink";
import {FormattedMessage} from "@/i18n/react-intl";
import {ChevronLeftIcon} from "@/icons/ChevronLeftIcon";
import {cn} from "@/utils/cn";
import {isDefined} from "@/utils/is-defined";

import {updateCheckoutShipping} from "../_actions/update-checkout-shipping";
import {redirectToRoot} from "../_utils/redirect-to-root";
import {
  CheckoutShippingMethods,
  SkeletonCheckoutShippingMethods,
} from "./CheckoutShippingMethods";

interface CheckoutShippingFormProps {
  queryRef: QueryRef<CheckoutShipping_CheckoutQuery>;
}

export function CheckoutShippingForm({queryRef}: CheckoutShippingFormProps) {
  const {data} = useReadQuery(queryRef);
  const [{errors}, formAction] = useActionState(updateCheckoutShipping, {
    errors: {},
  });
  const [isPending, startTransition] = useTransition();
  if (!isDefined(data.checkout)) {
    redirectToRoot();
  }
  return (
    <Form
      validationErrors={errors}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        startTransition(() => formAction(formData));
      }}
      className={cn("space-y-large-300")}>
      <CheckoutShippingMethods checkout={data.checkout} />
      <div className={cn("gap-base flex flex-col")}>
        <Button
          type="submit"
          size="large"
          isPending={isPending}
          isDisabled={isPending}>
          <FormattedMessage id="DgnS8R" defaultMessage="Continue to shipping" />
        </Button>
        <ReturnToInformationLink />
      </div>
    </Form>
  );
}

export function SkeletonCheckoutShippingForm() {
  return (
    <div className={cn("space-y-large-300")}>
      <SkeletonCheckoutShippingMethods />
      <div className={cn("gap-base flex flex-col")}>
        <Button type="submit" size="large" isDisabled>
          <FormattedMessage id="DgnS8R" defaultMessage="Continue to shipping" />
        </Button>
        <ReturnToInformationLink />
      </div>
    </div>
  );
}

function ReturnToInformationLink() {
  return (
    <IntlLink href={Routes.checkout.information}>
      <ChevronLeftIcon aria-hidden />
      <FormattedMessage id="k2CDuD" defaultMessage="Return to information" />
    </IntlLink>
  );
}
