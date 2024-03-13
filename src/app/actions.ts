"use server";

import { MoviesTable } from "@/db/schema";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function createMovie(formData: FormData) {
  try {
    const file = formData.get("image") as File;

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    await db.insert(MoviesTable).values({
      title: formData.get("title") as string,
      image: fileUri as string,
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath("/");
}
