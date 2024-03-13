import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const MoviesTable = pgTable(
  "movies",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    image: text("image").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (movies) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(movies.title),
    };
  }
);

export type Movie = InferSelectModel<typeof MoviesTable>;
export type NewMovie = InferInsertModel<typeof MoviesTable>;

// Connect to Vercel Postgres
export const db = drizzle(sql);
