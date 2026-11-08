import { MongoClient } from "mongodb";
import { DB_HOST, DB_PORT, DB_NAME } from "../config.js";

const client = new MongoClient(`mongodb://${DB_HOST}:${DB_PORT}`);

export const db = client.db(DB_NAME);