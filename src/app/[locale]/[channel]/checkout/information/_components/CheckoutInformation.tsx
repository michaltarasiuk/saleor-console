"use client";

import {useSuspenseQuery} from "@apollo/client";

import {Button} from "@/components/Button";
import {Form} from "@/components/Form";
import {Skeleton} from "@/components/Skeleton";
import {gql} from "@/graphql/codegen";
import {FormattedMessage} from "@/i18n/react-intl";
import {ChevronLeftIcon} from "@/icons/ChevronLeftIcon";
import {getCheckoutId} from "@/utils/checkout";
import {cn} from "@/utils/cn";
import {isDefined} from "@/utils/is-defined";

import {redirectToRoot} from "../../_utils/redirect-to-root";
import {ContactSection, SkeletonContactSection} from "./ContactSection";
import {ShippingAddress, SkeletonShippingAddress} from "./ShippingAddress";

const CheckoutInformation_Checkout = gql(`
  query CheckoutInformation_Checkout($id: ID!) { 
    checkout(id: $id) {
      ...ContactSection_Checkout
    }
  }
`);

export function CheckoutInformation() {
  const id = getCheckoutId();
  if (!isDefined(id)) {
    redirectToRoot();
  }
  const {data} = useSuspenseQuery(CheckoutInformation_Checkout, {
    variables: {
      id,
    },
  });
  if (!isDefined(data.checkout)) {
    redirectToRoot();
  }
  return (
    <Form className={cn("space-y-large-300")}>
      <ContactSection checkout={data.checkout} />
      <ShippingAddress />
      <div className={cn("gap-base flex flex-col")}>
        <Button size="large">
          <FormattedMessage defaultMessage="Continue to shipping" id="DgnS8R" />
        </Button>
        <Button kind="plain">
          <ChevronLeftIcon aria-hidden />
          <FormattedMessage defaultMessage="Return to cart" id="MRNNXA" />
        </Button>
      </div>
    </Form>
  );
}

export function SkeletonCheckoutInformation() {
  return (
    <div className={cn("space-y-large-300")}>
      <SkeletonContactSection />
      <SkeletonShippingAddress />
      <div className={cn("gap-base flex flex-col")}>
        <Skeleton className={cn("h-16")} />
        <Skeleton className={cn("h-12")} />
      </div>
    </div>
  );
}
