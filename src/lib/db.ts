// `Db` is decorated, so the polyfill has to be in place before this module
// body runs — it is imported by repositories that may load before the container.
import "reflect-metadata";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@generated/prisma/client";
import { Injectable, Scope } from "@lib/di/injectable";

/**
 * Prisma Database Client Wrapper
 * Singleton instance for dependency injection
 */
// Declared a singleton for documentation, but the container never constructs it:
// `registry.ts` registers the `db` instance below, which is cached on `globalThis`
// so it survives HMR and is shared by every module graph.
/**
 * Prisma 7 connects through a driver adapter rather than a URL in the schema, so
 * the connection string is read here. Runtime traffic goes through Supabase's
 * transaction pooler (`DATABASE_URL`, port 6543) — never `DIRECT_URL`, which is
 * reserved for Migrate. Failing loudly on a missing URL keeps the old behaviour:
 * `pg` would otherwise silently fall back to libpq defaults (localhost, $USER).
 */
function connectionString(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Prisma 7 takes the runtime connection from the " +
        "driver adapter in src/lib/db.ts, not from prisma/schema.prisma.",
    );
  }
  return url;
}

@Injectable({ scope: Scope.Singleton })
export class Db extends PrismaClient {
  constructor() {
    super({
      adapter: new PrismaPg({ connectionString: connectionString() }),
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  }

  /**
   * Clean disconnect from database
   */
  async disconnect() {
    await this.$disconnect();
  }
}

/**
 * Global Prisma Client instance for Next.js
 * Prevents multiple instances in development due to hot reload
 */
const globalForPrisma = globalThis as unknown as {
  prisma: Db | undefined;
};

export const db = globalForPrisma.prisma ?? new Db();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
