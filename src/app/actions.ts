"use server";

import { MoviesTable } from "@/db/schema";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { desc } from "drizzle-orm";

// Action to get Favorites Movies
export async function getFavorites() {
  try {
    const data = await db
      .select()
      .from(MoviesTable)
      .orderBy(desc(MoviesTable.createdAt))
      .limit(4);
    return data;
  } catch (e) {
    console.error(e);
  }
}

// Action to Create Movies
export async function createMovie(prevState: any, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const file = formData.get("image") as File;

    if (!title || !file) {
      return { error: true, success: false };
    }

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    await db.insert(MoviesTable).values({
      title: title,
      image: fileUri,
    });
  } catch (e) {
    console.error(e);
    return { error: true, success: false };
  }

  revalidatePath("/");
  return { error: null, success: true };
}
