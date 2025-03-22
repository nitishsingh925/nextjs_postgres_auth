import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createAt: timestamp("create_at").notNull().defaultNow(),
  updateAt: timestamp("update_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
