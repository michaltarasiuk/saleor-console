import "server-only";

import * as z from "zod";

const ServerEnvSchema = z.object({
  SALEOR_GRAPHQL_URL: z.url(),
});
export const serverEnv = ServerEnvSchema.parse(process.env);
