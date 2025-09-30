"use client";

import {type FragmentType, useFragment} from "@apollo/client";

import {Heading, SkeletonHeading} from "@/components/Heading";
import {SkeletonInput} from "@/components/Input";
import {TextField} from "@/components/TextField";
import {graphql} from "@/graphql/codegen";
import type {ContactSection_CheckoutFragment} from "@/graphql/codegen/graphql";
import {FormattedMessage, useIntl} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

const ContactSection_CheckoutFragment = graphql(`
  fragment ContactSection_Checkout on Checkout {
    id
    email
  }
`);

interface ContactSectionProps {
  checkout: FragmentType<ContactSection_CheckoutFragment>;
}

export function ContactSection({checkout}: ContactSectionProps) {
  const {data, complete} = useFragment({
    fragment: ContactSection_CheckoutFragment,
    from: checkout,
  });
  const intl = useIntl();
  if (!complete) {
    return <SkeletonContactSection />;
  }
  return (
    <section className={cn("space-y-base")}>
      <Heading>
        <FormattedMessage id="zFegDD" defaultMessage="Contact" />
      </Heading>
      <TextField
        name="email"
        type="email"
        defaultValue={data.email ?? undefined}
        label={intl.formatMessage({
          id: "N/nrM1",
          defaultMessage: "Email or phone number",
        })}
        isRequired
      />
    </section>
  );
}

export function SkeletonContactSection() {
  return (
    <div className={cn("space-y-base")}>
      <SkeletonHeading />
      <SkeletonInput />
    </div>
  );
}
