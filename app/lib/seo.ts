import type { Locale } from "./site";

export const CONTENT_PUBLISHED = "2026-07-25";
export const CONTENT_UPDATED = "2026-07-26";
export const VIDEO_UPLOAD_DATE = "2026-07-25T00:00:00+02:00";

const videoDurations: Record<string, number> = {
  "/hero-albania.mp4": 40.97,
  "/travel-city.mp4": 8,
  "/travel-driving.mp4": 10,
  "/travel-friends.mp4": 10,
  "/video/albanian-alps.mp4": 12,
  "/video/berat.mp4": 12,
  "/video/blue-eye.mp4": 12,
  "/video/cape-rodon.mp4": 12,
  "/video/durres.mp4": 10.62,
  "/video/farm.mp4": 3.63,
  "/video/kruja.mp4": 12,
  "/video/lezhe.mp4": 13.5,
  "/video/riviera.mp4": 12,
  "/video/shkoder.mp4": 12,
  "/video/valbona.mp4": 10,
  "/video/vjosa.mp4": 12,
  "/video/vineyard.mp4": 8.44,
};

export function videoDurationSeconds(src: string) {
  return videoDurations[src];
}

export function videoDurationIso(src: string) {
  const seconds = videoDurationSeconds(src);
  return seconds ? `PT${seconds}S` : undefined;
}

export const seoTerms: Record<Locale, string[]> = {
  en: [
    "Albania tours",
    "Albania tour packages",
    "Albania travel agency",
    "Albania tour operator",
    "private tours Albania",
    "guided tours Albania",
    "best Albania tours",
    "Albania vacation packages",
    "Albania day tours",
    "Albania airport transfers",
    "small group tours Albania",
    "day trips from Tirana",
  ],
  sq: [
    "ture në Shqipëri",
    "paketa turistike Shqipëri",
    "agjenci turistike Shqipëri",
    "operator turistik Shqipëri",
    "ture private Shqipëri",
    "ture me guidë Shqipëri",
    "udhëtime ditore nga Tirana",
    "transferta aeroporti Shqipëri",
  ],
  de: [
    "Albanien Rundreisen",
    "Albanien Reisepakete",
    "Reiseagentur Albanien",
    "private Touren Albanien",
    "geführte Touren Albanien",
    "beste Albanien Touren",
    "Kleingruppentouren Albanien",
    "Tagesausflüge ab Tirana",
    "Flughafentransfer Albanien",
  ],
  fr: [
    "circuits Albanie",
    "forfaits voyage Albanie",
    "agence de voyage Albanie",
    "tour opérateur Albanie",
    "circuits privés Albanie",
    "visites guidées Albanie",
    "meilleurs circuits Albanie",
    "petits groupes Albanie",
    "excursions depuis Tirana",
    "transfert aéroport Albanie",
  ],
};
