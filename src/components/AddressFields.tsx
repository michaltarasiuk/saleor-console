"use client";

import type {FragmentType} from "@apollo/client";
import {useFragment, useSuspenseQuery} from "@apollo/client";
import {use, useState, useTransition} from "react";

import {graphql} from "@/graphql/codegen";
import type {AddressFields_AddressFragment} from "@/graphql/codegen/graphql";
import {useLocale} from "@/i18n/hooks/use-locale";
import {useIntl} from "@/i18n/react-intl";
import {isCountryCode} from "@/i18n/utils/is-country-code";
import {localeToCountryCode} from "@/i18n/utils/locale-to-country-code";
import {ChannelContext} from "@/modules/channels/channel-context";
import {AddressFieldNames} from "@/utils/address";
import {cn} from "@/utils/cn";
import {isDefined} from "@/utils/is-defined";

import {SkeletonInput} from "./Input";
import {Select, SelectItem} from "./Select";
import {TextField} from "./TextField";

const AddressFields_AddressFragment = graphql(`
  fragment AddressFields_Address on Address {
    id
    country {
      code
    }
    companyName
    streetAddress1
    streetAddress2
    postalCode
    countryArea
    city
  }
`);

export function CompletedAddressFields({
  address,
}: {
  address: FragmentType<AddressFields_AddressFragment>;
}) {
  const {data, complete} = useFragment({
    fragment: AddressFields_AddressFragment,
    from: address,
  });
  if (!complete) {
    return <SkeletonAddressFields />;
  }
  return (
    <AddressFields
      address={{
        ...data,
        country: data.country.code,
      }}
    />
  );
}

const AddressFields_AddressValidationRulesQuery = graphql(`
  query AddressFields_AddressValidationRules($countryCode: CountryCode!) {
    addressValidationRules(countryCode: $countryCode) {
      allowedFields
      requiredFields
      upperFields
      countryAreaChoices {
        raw
        verbose
      }
    }
  }
`);

interface AddressFieldsProps {
  address?: Partial<Record<keyof typeof AddressFieldNames, string>>;
}

export function AddressFields({address}: AddressFieldsProps) {
  const locale = useLocale();
  const [countryCode, setCountryCode] = useState(() =>
    isCountryCode(address?.country)
      ? address.country
      : localeToCountryCode(locale),
  );
  const {data} = useSuspenseQuery(AddressFields_AddressValidationRulesQuery, {
    variables: {
      countryCode,
    },
  });
  const [isPending, startTransition] = useTransition();
  const intl = useIntl();
  if (!isDefined(data.addressValidationRules)) {
    return null;
  }
  const {allowedFields, requiredFields, upperFields, countryAreaChoices} =
    data.addressValidationRules;
  const isFieldAllowed = (name: string) => allowedFields.includes(name);
  const isFieldRequired = (name: string) => requiredFields.includes(name);
  const getTextFieldProps = (name: string) => ({
    name,
    isRequired: isFieldRequired(name),
    isUpper: upperFields.includes(name),
  });
  return (
    <fieldset
      className={cn("space-y-base transition-opacity", {
        "opacity-50": isPending,
      })}>
      <Select
        name={AddressFieldNames.country}
        selectedKey={countryCode}
        label={intl.formatMessage({
          id: "vONi+O",
          defaultMessage: "Country",
        })}
        onSelectionChange={(key) => {
          if (isCountryCode(key)) {
            startTransition(() => setCountryCode(key));
          }
        }}>
        {use(ChannelContext).countries.map(({code, country}) => (
          <SelectItem key={code} id={code} textValue={country}>
            {country}
          </SelectItem>
        ))}
      </Select>
      {isFieldAllowed(AddressFieldNames.companyName) && (
        <TextField
          label={intl.formatMessage({
            id: "FPGwAt",
            defaultMessage: "Company name",
          })}
          {...getTextFieldProps(AddressFieldNames.companyName)}
        />
      )}
      {isFieldAllowed(AddressFieldNames.streetAddress1) && (
        <TextField
          label={intl.formatMessage({
            id: "e6Ph5+",
            defaultMessage: "Address",
          })}
          {...getTextFieldProps(AddressFieldNames.streetAddress1)}
        />
      )}
      {isFieldAllowed(AddressFieldNames.streetAddress2) && (
        <TextField
          label={intl.formatMessage({
            id: "/j5hls",
            defaultMessage: "Apartment, suite, etc",
          })}
          {...getTextFieldProps(AddressFieldNames.streetAddress2)}
        />
      )}
      <div className={cn("gap-base flex")}>
        {isFieldAllowed(AddressFieldNames.postalCode) && (
          <TextField
            label={intl.formatMessage({
              id: "3EnruA",
              defaultMessage: "Postal code",
            })}
            className={cn("flex-1")}
            {...getTextFieldProps(AddressFieldNames.postalCode)}
          />
        )}
        {isFieldAllowed(AddressFieldNames.countryArea) && (
          <Select
            name={AddressFieldNames.countryArea}
            label={intl.formatMessage({
              id: "1RBA9b",
              defaultMessage: "Country Area",
            })}
            isRequired={isFieldRequired(AddressFieldNames.countryArea)}
            className={cn("flex-1")}>
            {countryAreaChoices
              .filter(
                (choice): choice is {raw: string; verbose: string} =>
                  typeof choice.raw === "string" &&
                  typeof choice.verbose === "string",
              )
              .map(({raw, verbose}) => (
                <SelectItem key={raw} id={raw} textValue={verbose}>
                  {verbose}
                </SelectItem>
              ))}
          </Select>
        )}
        {isFieldAllowed(AddressFieldNames.city) && (
          <TextField
            label={intl.formatMessage({
              id: "TE4fIS",
              defaultMessage: "City",
            })}
            className={cn("flex-1")}
            {...getTextFieldProps(AddressFieldNames.city)}
          />
        )}
      </div>
    </fieldset>
  );
}

export function SkeletonAddressFields() {
  return (
    <div className={cn("space-y-base")}>
      <SkeletonInput />
      <SkeletonInput />
      <SkeletonInput />
      <SkeletonInput />
      <div className={cn("gap-base flex")}>
        <SkeletonInput className={cn("flex-1")} />
        <SkeletonInput className={cn("flex-1")} />
        <SkeletonInput className={cn("flex-1")} />
      </div>
    </div>
  );
}
