"use client";

import {type FragmentType, useFragment} from "@apollo/client";
import {useId} from "react";

import {Heading, SkeletonHeading} from "@/components/Heading";
import {Radio} from "@/components/Radio";
import {RadioGroup} from "@/components/RadioGroup";
import {graphql} from "@/graphql/codegen";
import type {ShippingMethods_CheckoutFragment} from "@/graphql/codegen/graphql";
import {FormattedMessage} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

const ShippingMethods_CheckoutFragment = graphql(`
  fragment ShippingMethods_Checkout on Checkout {
    id
    shippingMethods {
      id
      name
    }
  }
`);

interface ShippingMethodsProps {
  checkout: FragmentType<ShippingMethods_CheckoutFragment>;
}

export function ShippingMethods({checkout}: ShippingMethodsProps) {
  const {data, complete} = useFragment({
    fragment: ShippingMethods_CheckoutFragment,
    from: checkout,
  });
  const headingId = useId();
  if (!complete) {
    return <SkeletonShippingMethods />;
  }
  return (
    <section className={cn("space-y-base")}>
      <Heading id={headingId}>
        <FormattedMessage id="4RD+CZ" defaultMessage="Shipping method" />
      </Heading>
      <RadioGroup
        name="deliveryMethodId"
        variant="group"
        aria-labelledby={headingId}
        isRequired>
        {data.shippingMethods.map(({id, name}) => (
          <Radio key={id} value={id}>
            {name}
          </Radio>
        ))}
      </RadioGroup>
    </section>
  );
}

export function SkeletonShippingMethods() {
  return (
    <section className={cn("space-y-base")}>
      <SkeletonHeading />
    </section>
  );
}
