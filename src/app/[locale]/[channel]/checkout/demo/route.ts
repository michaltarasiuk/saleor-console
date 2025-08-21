import {type NextRequest, NextResponse} from "next/server";

import {DefaultChannel} from "@/channels/consts";
import {Routes} from "@/consts/routes";
import {getClient} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {type CheckoutCreateInput, CountryCode} from "@/graphql/codegen/graphql";
import {setCheckoutId} from "@/utils/checkout";
import {isDefined} from "@/utils/is-defined";

const DemoCheckoutCreateMutation = graphql(`
  mutation DemoCheckoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
      }
    }
  }
`);

export async function GET({nextUrl: {origin}}: NextRequest) {
  const {data} = await getClient().mutate({
    mutation: DemoCheckoutCreateMutation,
    variables: {
      input: DemoCheckoutCreateInput,
    },
  });
  const {checkout} = data?.checkoutCreate ?? {};
  if (!isDefined(checkout)) {
    return NextResponse.json(null, {status: 400});
  }
  await setCheckoutId(checkout.id);
  return NextResponse.redirect(new URL(Routes.checkout.information, origin));
}

const DemoCheckoutCreateInput: CheckoutCreateInput = {
  channel: DefaultChannel,
  lines: [
    {
      variantId: "UHJvZHVjdFZhcmlhbnQ6Mzg2",
      quantity: 1,
    },
  ],
  email: "jan.kowalski@example.com",
  shippingAddress: {
    country: CountryCode.Pl,
    firstName: "Jan",
    lastName: "Kowalski",
    streetAddress1: "ul. Marszałkowska 1",
    postalCode: "00-001",
    city: "Warsaw",
  },
};
