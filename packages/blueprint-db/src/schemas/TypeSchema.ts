import { z } from "zod";

import type { PokemonType, TypeEffectiveness } from "../models/index.js";
import { EntityIdSchema, StaticSourceSchema } from "./common.js";

export const PokemonTypeSchema: z.ZodType<PokemonType> = z.object({
  id: EntityIdSchema,
  name: z.string().min(1),
  source: StaticSourceSchema.optional()
});

export const TypeEffectivenessSchema: z.ZodType<TypeEffectiveness> = z.object({
  attackingTypeId: EntityIdSchema,
  defendingTypeId: EntityIdSchema,
  multiplier: z.number().nonnegative(),
  source: StaticSourceSchema.optional()
});
