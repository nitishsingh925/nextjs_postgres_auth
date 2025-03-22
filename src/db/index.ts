import { drizzle } from "drizzle-orm/node-postgres";

// const db = drizzle(process.env.DATABASE_URL!);

// logger: true
const db = drizzle(process.env.DATABASE_URL!, { logger: true });

export { db };
