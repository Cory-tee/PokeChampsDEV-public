import { z } from "zod";

import type { Team, TeamSlot } from "../models/index.js";
import { EntityIdSchema, UserOwnedEntitySchema } from "./common.js";

export const TeamFormatSchema = z.enum([
  "bring-3",
  "singles",
  "doubles",
  "custom"
]);

export const TeamSlotSchema: z.ZodType<TeamSlot> = z.object({
  buildId: EntityIdSchema,
  position: z.number().int().nonnegative(),
  label: z.string().min(1).optional()
});

export const TeamSchema: z.ZodType<Team> = UserOwnedEntitySchema.and(
  z.object({
    name: z.string().min(1),
    format: TeamFormatSchema,
    slots: z.array(TeamSlotSchema),
    description: z.string().min(1).optional(),
    tags: z.array(z.string().min(1)),
    isArchived: z.boolean()
  })
);
