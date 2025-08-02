import "server-only";

import {HttpLink} from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs";

import {serverEnv} from "@/env-server";

export const {getClient, query, PreloadQuery} = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: serverEnv.NEXT_PUBLIC_SALEOR_GRAPHQL_URL,
      headers: {
        Authorization: `Bearer ${serverEnv.SALEOR_AUTH_TOKEN}`,
      },
    }),
  });
});
