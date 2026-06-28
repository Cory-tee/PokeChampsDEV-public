import { z } from "zod";

import type { Item } from "../models/index.js";
import { EntityIdSchema, StaticSourceSchema } from "./common.js";

export const ItemCategorySchema = z.enum([
  "held-item",
  "consumable",
  "currency",
  "material",
  "key-item",
  "unknown"
]);

export const ItemSchema: z.ZodType<Item> = z.object({
  id: EntityIdSchema,
  name: z.string().min(1),
  category: ItemCategorySchema,
  description: z.string().min(1).optional(),
  source: StaticSourceSchema.optional()
});
