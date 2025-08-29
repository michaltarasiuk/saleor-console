import * as z from "zod";

import {CountryCode} from "@/graphql/codegen/graphql";

export const AddressFieldNames = {
  country: "country",
  firstName: "firstName",
  lastName: "lastName",
  companyName: "companyName",
  streetAddress1: "streetAddress1",
  streetAddress2: "streetAddress2",
  postalCode: "postalCode",
  countryArea: "countryArea",
  city: "city",
};

export const AddressSchema = z.object({
  [AddressFieldNames.country]: z.enum(CountryCode),
  [AddressFieldNames.firstName]: z.string().optional(),
  [AddressFieldNames.lastName]: z.string().optional(),
  [AddressFieldNames.companyName]: z.string().optional(),
  [AddressFieldNames.streetAddress1]: z.string().optional(),
  [AddressFieldNames.streetAddress2]: z.string().optional(),
  [AddressFieldNames.postalCode]: z.string().optional(),
  [AddressFieldNames.countryArea]: z.string().optional(),
  [AddressFieldNames.city]: z.string().optional(),
});
