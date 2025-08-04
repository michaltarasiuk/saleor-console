import {notFound, redirect} from "next/navigation";

import {serverEnv} from "@/env-server";
import {query} from "@/graphql/client";
import {graphql} from "@/graphql/codegen";
import type {Locale} from "@/i18n/consts";
import {isDefined} from "@/utils/is-defined";
import {joinPathSegments} from "@/utils/pathname";

interface LocalePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function LocalePage({params}: LocalePageProps) {
  const {locale} = await params;
  const {region} = new Intl.Locale(locale);
  if (!isDefined(region)) {
    notFound();
  }
  const {data} = await query({
    query: ChannelsWithCountryQuery,
    context: {
      headers: {
        Authorization: `Bearer ${serverEnv.SALEOR_AUTH_TOKEN}`,
      },
    },
  });
  const regionChannel = data.channels?.find(
    (channel) => channel.defaultCountry.code === region,
  );
  if (!isDefined(regionChannel)) {
    notFound();
  }
  redirect(joinPathSegments(locale, regionChannel.slug));
}

const ChannelsWithCountryQuery = graphql(`
  query ChannelsWithCountry {
    channels {
      slug
      defaultCountry {
        code
        country
      }
    }
  }
`);
