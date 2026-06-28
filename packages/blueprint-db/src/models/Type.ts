import type { EntityId, StaticSource } from "../types/index.js";

export type PokemonType = {
  id: EntityId;
  name: string;
  source?: StaticSource;
};

export type TypeEffectiveness = {
  attackingTypeId: EntityId;
  defendingTypeId: EntityId;
  multiplier: number;
  source?: StaticSource;
};
