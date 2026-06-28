import type { EntityId, StaticSource } from "../types/index.js";

export type Ability = {
  id: EntityId;
  name: string;
  description?: string;
  source?: StaticSource;
};
