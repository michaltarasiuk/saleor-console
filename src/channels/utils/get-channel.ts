import {serverEnv} from "@/env-server";
import {query} from "@/graphql/apollo-client";
import {gql} from "@/graphql/codegen";
import {bearerAuthHeader} from "@/utils/bearer-auth-header";

const ChannelQuery = gql(`
  query Channel($slug: String!) {
    channel(slug: $slug) {
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
      headers: Object.fromEntries([
        bearerAuthHeader(serverEnv.SALEOR_AUTH_TOKEN),
      ]),
    },
  });
  return data.channel;
}
