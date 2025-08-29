"use client";

import {HttpLink} from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

import {env} from "@/env";
import introspection from "@/graphql/codegen/introspection.json" with {type: "json"};

export function ApolloProvider({children}: {children: React.ReactNode}) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: introspection.possibleTypes,
    }),
    link: new HttpLink({
      uri: env.NEXT_PUBLIC_SALEOR_GRAPHQL_URL,
    }),
  });
}
