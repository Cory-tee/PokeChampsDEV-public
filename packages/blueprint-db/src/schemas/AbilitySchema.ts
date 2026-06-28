import { z } from "zod";

import type { Ability } from "../models/index.js";
import { EntityIdSchema, StaticSourceSchema } from "./common.js";

export const AbilitySchema: z.ZodType<Ability> = z.object({
  id: EntityIdSchema,
  name: z.string().min(1),
  description: z.string().min(1).optional(),
  source: StaticSourceSchema.optional()
});
