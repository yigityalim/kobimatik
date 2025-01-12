import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
export * from './schema';

const client = new Database(process.env.DATABASE_NAME);

export const db = drizzle({ client, schema });
