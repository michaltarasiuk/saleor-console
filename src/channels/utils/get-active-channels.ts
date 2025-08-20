import type {ApolloClient} from "@apollo/client";

import {env} from "@/env";
import {graphql} from "@/graphql/codegen";

const ChannelSlugsQuery = graphql(`
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
      headers: {
        Authorization: `Bearer ${env.SALEOR_AUTH_TOKEN}`,
      },
    },
  });
  return (data.channels ?? [])
    .filter((channel) => channel.isActive)
    .map((channel) => channel.slug);
}
