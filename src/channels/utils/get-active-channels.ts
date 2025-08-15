import type {ApolloClient} from "@apollo/client";

import {serverEnv} from "@/env-server";
import {gql} from "@/graphql/codegen";
import {bearerAuthHeader} from "@/utils/bearer-auth-header";

const ChannelSlugsQuery = gql(`
  query ChannelSlugs {
    channels {
      slug
      isActive
    }
  }
`);

export async function getActiveChannelSlugs(client: ApolloClient<unknown>) {
  const {data} = await client.query({
    query: ChannelSlugsQuery,
    context: {
      headers: Object.fromEntries([
        bearerAuthHeader(serverEnv.SALEOR_AUTH_TOKEN),
      ]),
    },
  });
  return (data.channels ?? [])
    .filter((channel) => channel.isActive)
    .map((channel) => channel.slug);
}
