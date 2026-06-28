import type {
  EntityId,
  ISODateTimeString,
  UserOwnedEntity
} from "../types/index.js";
import type { StatKey } from "./PokemonSpecies.js";

export type StatSpread = Partial<Record<StatKey, number>>;

export type PokemonInstance = UserOwnedEntity & {
  speciesId: EntityId;
  nickname?: string;
  level?: number;
  nature?: string;
  abilityId?: EntityId;
  heldItemId?: EntityId;
  moveIds: readonly EntityId[];
  effortValues?: StatSpread;
  individualValues?: StatSpread;
  acquiredAt?: ISODateTimeString;
  notes?: string;
};
