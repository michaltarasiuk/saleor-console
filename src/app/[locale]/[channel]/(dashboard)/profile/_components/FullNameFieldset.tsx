"use client";

import {TextField} from "@/components/TextField";
import {FormattedMessage, useIntl} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

export function FullNameFieldset() {
  const intl = useIntl();
  return (
    <fieldset className={cn("gap-base grid grid-cols-1 sm:grid-cols-2")}>
      <legend className={cn("sr-only")}>
        <FormattedMessage id="TemVby" defaultMessage="Full Name" />
      </legend>
      <TextField
        name="firstName"
        label={intl.formatMessage({
          id: "pONqz8",
          defaultMessage: "First name",
        })}
        autoComplete="given-name"
      />
      <TextField
        name="lastName"
        label={intl.formatMessage({
          id: "txUL0F",
          defaultMessage: "Last name",
        })}
        autoComplete="family-name"
      />
    </fieldset>
  );
}
