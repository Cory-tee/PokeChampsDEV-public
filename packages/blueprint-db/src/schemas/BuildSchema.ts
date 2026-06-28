import { z } from "zod";

import type { Build } from "../models/index.js";
import { EntityIdSchema, UserOwnedEntitySchema } from "./common.js";
import { StatSpreadSchema } from "./PokemonInstanceSchema.js";

export const BuildRoleSchema = z.enum([
  "attacker",
  "defender",
  "support",
  "speed-control",
  "disruptor",
  "flex"
]);

export const BuildSchema: z.ZodType<Build> = UserOwnedEntitySchema.and(
  z.object({
    name: z.string().min(1),
    speciesId: EntityIdSchema,
    pokemonInstanceId: EntityIdSchema.optional(),
    abilityId: EntityIdSchema.optional(),
    heldItemId: EntityIdSchema.optional(),
    moveIds: z.array(EntityIdSchema),
    role: BuildRoleSchema.optional(),
    nature: z.string().min(1).optional(),
    effortValues: StatSpreadSchema.optional(),
    notes: z.string().min(1).optional()
  })
);
