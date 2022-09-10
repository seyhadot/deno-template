import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import config from "./config.ts";

const client = new MongoClient();
await client.connect(config.DB_URI);
const db = client.database(config.DB);

export { db };
