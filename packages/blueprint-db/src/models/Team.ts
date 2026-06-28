import type { EntityId, UserOwnedEntity } from "../types/index.js";

export type TeamFormat = "bring-3" | "singles" | "doubles" | "custom";

export type TeamSlot = {
  buildId: EntityId;
  position: number;
  label?: string;
};

export type Team = UserOwnedEntity & {
  name: string;
  format: TeamFormat;
  slots: readonly TeamSlot[];
  description?: string;
  tags: readonly string[];
  isArchived: boolean;
};
