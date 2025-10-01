import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

import {loadEnvConfig} from "@next/env";
import type {IGraphQLConfig} from "graphql-config";
import invariant from "tiny-invariant";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

loadEnvConfig(__dirname);

const saleorGraphqlEndpoint = process.env.NEXT_PUBLIC_SALEOR_GRAPHQL_ENDPOINT;
invariant(
  saleorGraphqlEndpoint,
  "Environment variable NEXT_PUBLIC_SALEOR_GRAPHQL_ENDPOINT must be defined.",
);

const config: IGraphQLConfig = {
  schema: [saleorGraphqlEndpoint, "src/graphql/client-directives.graphql"],
  documents: ["src/**/*.{ts,tsx}"],
};
export default config;
