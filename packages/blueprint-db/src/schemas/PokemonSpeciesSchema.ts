import { z } from "zod";

import type {
  LearnsetEntry,
  PokemonSpecies,
  StatTable
} from "../models/index.js";
import { EntityIdSchema, StaticSourceSchema } from "./common.js";

export const StatKeySchema = z.enum([
  "hp",
  "attack",
  "defense",
  "specialAttack",
  "specialDefense",
  "speed"
]);

export const StatTableSchema: z.ZodType<StatTable> = z.object({
  hp: z.number().int().nonnegative(),
  attack: z.number().int().nonnegative(),
  defense: z.number().int().nonnegative(),
  specialAttack: z.number().int().nonnegative(),
  specialDefense: z.number().int().nonnegative(),
  speed: z.number().int().nonnegative()
});

export const LearnsetMethodSchema = z.enum([
  "level",
  "machine",
  "tutor",
  "event",
  "unknown"
]);

export const LearnsetEntrySchema: z.ZodType<LearnsetEntry> = z.object({
  moveId: EntityIdSchema,
  method: LearnsetMethodSchema.optional(),
  level: z.number().int().nonnegative().optional()
});

export const PokemonSpeciesSchema: z.ZodType<PokemonSpecies> = z.object({
  id: EntityIdSchema,
  nationalDexNumber: z.number().int().positive().optional(),
  name: z.string().min(1),
  formName: z.string().min(1).optional(),
  typeIds: z.array(EntityIdSchema).min(1),
  abilityIds: z.array(EntityIdSchema),
  baseStats: StatTableSchema.optional(),
  learnset: z.array(LearnsetEntrySchema),
  source: StaticSourceSchema.optional()
});
