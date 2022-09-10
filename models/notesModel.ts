import { db } from "../db/DBinit.ts";
import { z } from "zod";
import { ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";


export const NoteSchema = z.object({
    title: z.string(),
    description: z.string(),
})

type Note = z.infer<typeof NoteSchema>;

export const NoteCollection = db.collection<Note>("notes");
