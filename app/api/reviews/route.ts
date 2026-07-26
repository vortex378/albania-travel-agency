import { NextResponse } from "next/server";
import { ensureReviewSchema, getD1 } from "../../../db";
import { getTour } from "../../lib/tours";

type ReviewRow = {
  id: string;
  first_name: string;
  last_name: string;
  country_code: string;
  rating: number;
  comment: string;
  created_at: string;
};

const namePattern = /^[\p{L}][\p{L}\p{M}' -]{1,39}$/u;

async function hashAddress(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function GET(request: Request) {
  const tourSlug = new URL(request.url).searchParams.get("tour") || "";
  if (!getTour(tourSlug)) return NextResponse.json({ reviews: [] });

  try {
    const database = await getD1();
    await ensureReviewSchema(database);
    const result = await database
      .prepare(`
        SELECT id, first_name, last_name, country_code, rating, comment, created_at
        FROM reviews
        WHERE tour_slug = ? AND status = 'approved'
        ORDER BY created_at DESC
        LIMIT 12
      `)
      .bind(tourSlug)
      .all<ReviewRow>();
    const summary = await database
      .prepare("SELECT COUNT(*) AS total, AVG(rating) AS average FROM reviews WHERE tour_slug = ? AND status = 'approved'")
      .bind(tourSlug)
      .first<{ total: number; average: number | null }>();

    return NextResponse.json({
      reviews: (result.results as ReviewRow[]).map((review) => ({
        id: review.id,
        name: `${review.first_name} ${review.last_name.charAt(0)}.`,
        countryCode: review.country_code,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.created_at,
      })),
      summary: {
        count: summary?.total || 0,
        rating: summary?.average || null,
      },
    });
  } catch {
    return NextResponse.json({ reviews: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const tourSlug = String(body.tourSlug || "");
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const countryCode = String(body.countryCode || "").trim().toUpperCase();
    const rating = Number(body.rating);
    const comment = String(body.comment || "").trim();
    const website = String(body.website || "").trim();

    if (website) return NextResponse.json({ ok: true }, { status: 201 });
    if (!getTour(tourSlug)) return NextResponse.json({ error: "Unknown tour." }, { status: 400 });
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) return NextResponse.json({ error: "Please enter a valid first and last name." }, { status: 400 });
    if (!/^[A-Z]{2}$/.test(countryCode)) return NextResponse.json({ error: "Please select your country." }, { status: 400 });
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) return NextResponse.json({ error: "Please choose a star rating." }, { status: 400 });
    if (comment.length < 20 || comment.length > 900) return NextResponse.json({ error: "Your review must be between 20 and 900 characters." }, { status: 400 });

    const database = await getD1();
    await ensureReviewSchema(database);
    const address = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
    const ipHash = await hashAddress(address.split(",")[0].trim());
    const recent = await database
      .prepare("SELECT COUNT(*) AS total FROM reviews WHERE ip_hash = ? AND created_at >= datetime('now', '-10 minutes')")
      .bind(ipHash)
      .first<{ total: number }>();

    if ((recent?.total || 0) >= 3) return NextResponse.json({ error: "Please wait before submitting another review." }, { status: 429 });

    await database
      .prepare(`
        INSERT INTO reviews (id, tour_slug, first_name, last_name, country_code, rating, comment, status, ip_hash)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?)
      `)
      .bind(crypto.randomUUID(), tourSlug, firstName, lastName, countryCode, rating, comment, ipHash)
      .run();

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "The review could not be submitted. Please try again." }, { status: 500 });
  }
}
