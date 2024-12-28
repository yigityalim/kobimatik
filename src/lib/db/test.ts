import { sqliteTable } from 'drizzle-orm/sqlite-core';

export const customers = sqliteTable('customers', (c) => ({
    first_name: c.text(),
    last_name: c.text(),
    email: c.text(),
    phone: c.text(),
    created_at: c.text(),
    updated_at: c.text(),
}));
