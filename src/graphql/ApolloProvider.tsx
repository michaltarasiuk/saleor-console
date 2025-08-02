"use client";

import {HttpLink} from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

import {clientEnv} from "@/env-client";

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: clientEnv.NEXT_PUBLIC_SALEOR_GRAPHQL_URL,
    }),
  });
}

export function ApolloProvider({children}: {children: React.ReactNode}) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
