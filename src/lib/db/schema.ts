import { pgTable, serial, varchar, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }),
    email: varchar('email', { length: 255 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    role: varchar('role', { length: 20 }).notNull().default('member'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    deletedAt: timestamp('deleted_at'),
});

export const teams = pgTable('teams', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    planName: varchar('plan_name', { length: 50 }),
    subscriptionStatus: varchar('subscription_status', { length: 20 }),
});

export const teamMembers = pgTable('team_members', {
    id: serial('id').primaryKey(),
    userId: integer('user_id')
        .notNull()
        .references(() => users.id),
    teamId: integer('team_id')
        .notNull()
        .references(() => teams.id),
    role: varchar('role', { length: 50 }).notNull(),
    joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

export const activityLogs = pgTable('activity_logs', {
    id: serial('id').primaryKey(),
    teamId: integer('team_id')
        .notNull()
        .references(() => teams.id),
    userId: integer('user_id').references(() => users.id),
    action: text('action').notNull(),
    timestamp: timestamp('timestamp').notNull().defaultNow(),
    ipAddress: varchar('ip_address', { length: 45 }),
});

export const pricingPlans = pgTable('pricing_plans', (c) => ({
    id: serial('id').primaryKey(), // birincil anahtar
    name: varchar('name', { length: 50 }).notNull(), // adı
    price: integer('price').notNull(), // fiyatı
    maxTeamMembers: integer('max_team_members').notNull(), // maksimum takım üye sayısı
    maxProjects: integer('max_projects').notNull(), // maksimum proje sayısı
    maxStorage: integer('max_storage').notNull(), // maksimum depolama alanı
    maxActivityLogDays: integer('max_activity_log_days').notNull(), // maksimum aktivite logu gün sayısı
    maxActivityLogRetentionDays: integer('max_activity_log_retention_days').notNull(), // maksimum aktivite logu saklama gün sayısı
    createdAt: timestamp('created_at').notNull().defaultNow(), // oluşturulma tarihi
    updatedAt: timestamp('updated_at').notNull().defaultNow(), // güncellenme tarihi
    deletedAt: timestamp('deleted_at'), // silinme tarihi
}));
