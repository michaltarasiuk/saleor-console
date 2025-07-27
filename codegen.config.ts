import type {CodegenConfig} from "@graphql-codegen/cli";

import {env} from "./env";

const config: CodegenConfig = {
  schema: env.SALEOR_GRAPHQL_URL,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/graphql/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: true,
  hooks: {
    afterAllFileWrite: ["bun run prettier --write"],
  },
};
export default config;
