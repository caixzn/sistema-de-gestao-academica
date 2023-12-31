import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
    schema: './src/db/schemas/*',
    out: './src/db/migrations',
    driver: 'mysql2',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
    }
} satisfies Config;
