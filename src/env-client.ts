import "client-only";

import * as z from "zod";

const ClientEnvSchema = z.object({});
export const clientEnv = ClientEnvSchema.parse(process.env);
