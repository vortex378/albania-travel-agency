export async function getD1() {
  const { env } = await import("cloudflare:workers");
  const database = (env as { DB?: D1Database }).DB;
  if (!database) {
    throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  }
  return database;
}

export async function ensureReviewSchema(database: D1Database) {
  await database.batch([
    database.prepare(`
      CREATE TABLE IF NOT EXISTS reviews (
        id TEXT PRIMARY KEY NOT NULL,
        tour_slug TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        country_code TEXT NOT NULL,
        rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
        comment TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        ip_hash TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `),
    database.prepare("CREATE INDEX IF NOT EXISTS reviews_tour_status_created_idx ON reviews (tour_slug, status, created_at)"),
    database.prepare("CREATE INDEX IF NOT EXISTS reviews_ip_created_idx ON reviews (ip_hash, created_at)"),
  ]);
}
