import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const reviews = sqliteTable(
  "reviews",
  {
    id: text("id").primaryKey(),
    tourSlug: text("tour_slug").notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    countryCode: text("country_code").notNull(),
    rating: integer("rating").notNull(),
    comment: text("comment").notNull(),
    status: text("status").notNull().default("pending"),
    ipHash: text("ip_hash"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("reviews_tour_status_created_idx").on(table.tourSlug, table.status, table.createdAt),
    index("reviews_ip_created_idx").on(table.ipHash, table.createdAt),
  ],
);
