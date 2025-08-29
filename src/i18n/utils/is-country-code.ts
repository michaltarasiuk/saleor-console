import {CountryCode} from "@/graphql/codegen/graphql";
import {capitalize} from "@/utils/capitalize";

export function isCountryCode(value: unknown): value is CountryCode {
  return typeof value === "string" && capitalize(value) in CountryCode;
}
