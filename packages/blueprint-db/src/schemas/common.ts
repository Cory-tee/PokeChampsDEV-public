import { z } from "zod";

import type {
  EntityId,
  ISODateTimeString,
  StaticSource,
  UserOwnedEntity
} from "../types/index.js";

export const EntityIdSchema: z.ZodType<EntityId> = z.string().min(1);

export const ISODateTimeStringSchema: z.ZodType<ISODateTimeString> = z
  .string()
  .datetime();

export const StaticSourceSchema: z.ZodType<StaticSource> = z.object({
  sourceId: EntityIdSchema,
  sourceVersion: z.string().min(1).optional(),
  importedAt: ISODateTimeStringSchema.optional()
});

export const UserOwnedEntitySchema: z.ZodType<UserOwnedEntity> = z.object({
  id: EntityIdSchema,
  accountId: EntityIdSchema,
  createdAt: ISODateTimeStringSchema,
  updatedAt: ISODateTimeStringSchema
});
