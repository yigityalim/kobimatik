import dotenv from 'dotenv';
import path from 'path';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { client, db } from './drizzle';

dotenv.config();

async function main() {
    await migrate(db, {
        migrationsFolder: path.join(process.cwd(), '/lib/db/migrations'),
    });
    console.log(`Migrations complete`);
    await client.end();
}

void main()
    .catch((error) => {
        console.error('Migration process failed:', error);
        process.exit(1);
    })
    .finally(() => {
        console.log('Migration process finished. Exiting...');
        process.exit(0);
    });