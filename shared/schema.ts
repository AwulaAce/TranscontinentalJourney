import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const photos = pgTable("photos", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  caption: text("caption").notNull(),
  category: text("category").notNull(),
  order: serial("order").notNull(),
});

export const insertPhotoSchema = createInsertSchema(photos).pick({
  url: true,
  caption: true,
  category: true,
  order: true,
});

export type InsertPhoto = z.infer<typeof insertPhotoSchema>;
export type Photo = typeof photos.$inferSelect;
