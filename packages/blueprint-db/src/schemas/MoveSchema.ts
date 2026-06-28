import { z } from "zod";

import type { Move } from "../models/index.js";
import { EntityIdSchema, StaticSourceSchema } from "./common.js";

export const MoveCategorySchema = z.enum([
  "physical",
  "special",
  "status",
  "unknown"
]);

export const MoveTargetSchema = z.enum([
  "self",
  "ally",
  "single-opponent",
  "all-opponents",
  "field",
  "unknown"
]);

export const MoveSchema: z.ZodType<Move> = z.object({
  id: EntityIdSchema,
  name: z.string().min(1),
  typeId: EntityIdSchema,
  category: MoveCategorySchema,
  target: MoveTargetSchema,
  power: z.number().int().nonnegative().optional(),
  accuracy: z.number().min(0).max(100).optional(),
  priority: z.number().int().optional(),
  description: z.string().min(1).optional(),
  source: StaticSourceSchema.optional()
});
