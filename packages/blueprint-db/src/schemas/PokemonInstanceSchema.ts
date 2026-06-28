import { z } from "zod";

import type { PokemonInstance, StatSpread } from "../models/index.js";
import {
  EntityIdSchema,
  ISODateTimeStringSchema,
  UserOwnedEntitySchema
} from "./common.js";

export const StatSpreadSchema: z.ZodType<StatSpread> = z.object({
  hp: z.number().int().nonnegative().optional(),
  attack: z.number().int().nonnegative().optional(),
  defense: z.number().int().nonnegative().optional(),
  specialAttack: z.number().int().nonnegative().optional(),
  specialDefense: z.number().int().nonnegative().optional(),
  speed: z.number().int().nonnegative().optional()
});

export const PokemonInstanceSchema: z.ZodType<PokemonInstance> =
  UserOwnedEntitySchema.and(
    z.object({
      speciesId: EntityIdSchema,
      nickname: z.string().min(1).optional(),
      level: z.number().int().positive().optional(),
      nature: z.string().min(1).optional(),
      abilityId: EntityIdSchema.optional(),
      heldItemId: EntityIdSchema.optional(),
      moveIds: z.array(EntityIdSchema),
      effortValues: StatSpreadSchema.optional(),
      individualValues: StatSpreadSchema.optional(),
      acquiredAt: ISODateTimeStringSchema.optional(),
      notes: z.string().min(1).optional()
    })
  );
