import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import * as z from "zod";

dotenvExpand.expand(
  dotenv.config({
    path: "./.env.local",
    quiet: true,
  }),
);

const EnvSchema = z.object({
  SALEOR_GRAPHQL_URL: z.url(),
});
export const env = EnvSchema.parse(process.env);
