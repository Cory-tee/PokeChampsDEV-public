import type { EntityId, StaticSource } from "../types/index.js";

export type StatKey =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

export type StatTable = Record<StatKey, number>;

export type LearnsetEntry = {
  moveId: EntityId;
  method?: "level" | "machine" | "tutor" | "event" | "unknown";
  level?: number;
};

export type PokemonSpecies = {
  id: EntityId;
  nationalDexNumber?: number;
  name: string;
  formName?: string;
  typeIds: readonly EntityId[];
  abilityIds: readonly EntityId[];
  baseStats?: StatTable;
  learnset: readonly LearnsetEntry[];
  source?: StaticSource;
};
