"use client";

import {type QueryRef, useReadQuery} from "@apollo/client";
import {notFound} from "next/navigation";
import {useActionState, useTransition} from "react";
import invariant from "tiny-invariant";

import {Button} from "@/components/Button";
import {Form} from "@/components/Form";
import {Routes} from "@/consts/routes";
import type {CheckoutPayment_CheckoutQuery} from "@/graphql/codegen/graphql";
import {IntlLink} from "@/i18n/components/IntlLink";
import {FormattedMessage} from "@/i18n/react-intl";
import {ChevronLeftIcon} from "@/icons/ChevronLeftIcon";
import {cn} from "@/utils/cn";
import {isDefined} from "@/utils/is-defined";

import {updatePayment} from "../../_actions/update-payment";
import {BillingAddress, SkeletonBillingAddress} from "./BillingAddress";

export function CheckoutPaymentForm({
  queryRef,
}: {
  queryRef: QueryRef<CheckoutPayment_CheckoutQuery>;
}) {
  const {data} = useReadQuery(queryRef);
  if (!isDefined(data.checkout)) {
    notFound();
  }
  const [{errors}, formAction] = useActionState(updatePayment, {
    errors: {},
  });
  const [isPending, startTransition] = useTransition();
  return (
    <Form
      validationErrors={errors}
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(() => {
          invariant(event.target instanceof HTMLFormElement);
          const formData = new FormData(event.target);
          formAction(formData);
        });
      }}
      className={cn("space-y-large-300")}>
      <BillingAddress checkout={data.checkout} />
      <CheckoutPaymentActions>
        <Button
          type="submit"
          size="large"
          isPending={isPending}
          isDisabled={isPending}>
          <FormattedMessage id="lD3+8a" defaultMessage="Pay" />
        </Button>
      </CheckoutPaymentActions>
    </Form>
  );
}

export function SkeletonCheckoutPaymentForm() {
  return (
    <div className={cn("space-y-large-300")}>
      <SkeletonBillingAddress />
      <CheckoutPaymentActions>
        <Button type="submit" size="large" isDisabled>
          <FormattedMessage id="lD3+8a" defaultMessage="Pay" />
        </Button>
      </CheckoutPaymentActions>
    </div>
  );
}

function CheckoutPaymentActions({children}: {children: React.ReactNode}) {
  return (
    <div className={cn("gap-base flex flex-col")}>
      {children}
      <IntlLink href={Routes.checkout.delivery}>
        <ChevronLeftIcon aria-hidden />
        <FormattedMessage id="Akc1Gk" defaultMessage="Return to shipping" />
      </IntlLink>
    </div>
  );
}
