import 'dotenv/config';
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';

const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

const db = drizzle(connection);

await migrate(db, { migrationsFolder: './src/db/migrations' });

export default db;
