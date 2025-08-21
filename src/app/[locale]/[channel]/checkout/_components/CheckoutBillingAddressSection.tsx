"use client";

import {useId, useState} from "react";

import {AddressFieldset} from "@/components/AddressFieldset";
import {Heading} from "@/components/Heading";
import {Radio} from "@/components/Radio";
import {RadioGroup} from "@/components/RadioGroup";
import {FormattedMessage} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

type RadioValue = "yes" | "no";

export function CheckoutBillingAddressSection() {
  const [value, setValue] = useState<RadioValue>("yes");
  const headingId = useId();
  return (
    <section className={cn("space-y-base")}>
      <Heading id={headingId}>
        <FormattedMessage id="6orx1c" defaultMessage="Billing address" />
      </Heading>
      <RadioGroup
        value={value}
        onChange={(value) => setValue(value as RadioValue)}
        variant="group"
        aria-labelledby={headingId}>
        <Radio value={"yes" satisfies RadioValue}>
          <FormattedMessage
            id="ipwTkh"
            defaultMessage="Same as shipping address"
          />
        </Radio>
        <Radio value={"no" satisfies RadioValue}>
          <FormattedMessage
            id="o58q+n"
            defaultMessage="Use a different billing address"
          />
        </Radio>
      </RadioGroup>
      {value === "no" && <AddressFieldset />}
    </section>
  );
}
