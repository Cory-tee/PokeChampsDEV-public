import type { EntityId, StaticSource } from "../types/index.js";

export type ItemCategory =
  | "held-item"
  | "consumable"
  | "currency"
  | "material"
  | "key-item"
  | "unknown";

export type Item = {
  id: EntityId;
  name: string;
  category: ItemCategory;
  description?: string;
  source?: StaticSource;
};
