import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/models/*',
    out: './src/db/migrations'
} satisfies Config;
