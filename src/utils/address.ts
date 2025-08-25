import * as z from "zod";

import {CountryCode} from "@/graphql/codegen/graphql";

export const AddressFields = {
  country: "country",
  name: {
    key: "name",
    fields: {
      firstName: "firstName",
      lastName: "lastName",
    },
  },
  companyName: "companyName",
  streetAddress1: "streetAddress1",
  streetAddress2: "streetAddress2",
  postalCode: "postalCode",
  countryArea: "countryArea",
  city: "city",
};

export const AddressSchema = z.object({
  [AddressFields.country]: z.enum(CountryCode),
  [AddressFields.name.fields.firstName]: z.string().optional(),
  [AddressFields.name.fields.lastName]: z.string().optional(),
  [AddressFields.companyName]: z.string().optional(),
  [AddressFields.streetAddress1]: z.string().optional(),
  [AddressFields.streetAddress2]: z.string().optional(),
  [AddressFields.postalCode]: z.string().optional(),
  [AddressFields.countryArea]: z.string().optional(),
  [AddressFields.city]: z.string().optional(),
});

export const CountryAreaChoiceSchema = z.object({
  raw: z.string(),
  verbose: z.string(),
});

export function isCountryAreaChoice(
  value: unknown,
): value is z.infer<typeof CountryAreaChoiceSchema> {
  return CountryAreaChoiceSchema.safeParse(value).success;
}
