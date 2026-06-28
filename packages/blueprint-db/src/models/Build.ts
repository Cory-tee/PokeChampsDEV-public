import type { EntityId, UserOwnedEntity } from "../types/index.js";
import type { StatSpread } from "./PokemonInstance.js";

export type BuildRole =
  | "attacker"
  | "defender"
  | "support"
  | "speed-control"
  | "disruptor"
  | "flex";

export type Build = UserOwnedEntity & {
  name: string;
  speciesId: EntityId;
  pokemonInstanceId?: EntityId;
  abilityId?: EntityId;
  heldItemId?: EntityId;
  moveIds: readonly EntityId[];
  role?: BuildRole;
  nature?: string;
  effortValues?: StatSpread;
  notes?: string;
};
