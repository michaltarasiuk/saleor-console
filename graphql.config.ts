import type {IGraphQLConfig} from "graphql-config";

import {env} from "./env";

const config: IGraphQLConfig = {
  schema: env.SALEOR_GRAPHQL_URL,
  documents: ["src/**/*.{ts,tsx}"],
};
export default config;
