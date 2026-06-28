import type { EntityId, StaticSource } from "../types/index.js";

export type MoveCategory = "physical" | "special" | "status" | "unknown";

export type MoveTarget =
  | "self"
  | "ally"
  | "single-opponent"
  | "all-opponents"
  | "field"
  | "unknown";

export type Move = {
  id: EntityId;
  name: string;
  typeId: EntityId;
  category: MoveCategory;
  target: MoveTarget;
  power?: number;
  accuracy?: number;
  priority?: number;
  description?: string;
  source?: StaticSource;
};
