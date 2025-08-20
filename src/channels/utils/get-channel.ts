import {env} from "@/env";
import {query} from "@/graphql/apollo-client";
import {graphql} from "@/graphql/codegen";
import {isDefined} from "@/utils/is-defined";

const ChannelQuery = graphql(`
  query Channel($slug: String!) {
    channel(slug: $slug) {
      countries {
        code
        country
      }
      taxConfiguration {
        displayGrossPrices
      }
    }
  }
`);

export async function getChannel(slug: string) {
  const {data} = await query({
    query: ChannelQuery,
    variables: {
      slug,
    },
    context: {
      headers: {
        Authorization: `Bearer ${env.SALEOR_AUTH_TOKEN}`,
      },
    },
  });
  if (!isDefined(data.channel)) {
    return;
  }
  return {
    ...data.channel,
    countries: data.channel.countries ?? [],
  };
}
