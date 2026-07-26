export const SITE_NAME = "Albanian Tours Hub";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://albaniantours-hub.com";

export const SITE_URL = configuredSiteUrl
  ? `${configuredSiteUrl.startsWith("http") ? "" : "https://"}${configuredSiteUrl}`.replace(/\/$/, "")
  : "https://albaniantours-hub.com";
export const WHATSAPP_NUMBER = "355697807864";
export const PHONE_DISPLAY = "+355 69 780 7864";
export const PHONE_TEL = "+355697807864";

export const locales = ["en", "sq", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: "English",
  sq: "Shqip",
  de: "Deutsch",
  fr: "Français",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export function languageAlternates(path = "") {
  return {
    en: `${SITE_URL}${localizedPath("en", path)}`,
    sq: `${SITE_URL}${localizedPath("sq", path)}`,
    de: `${SITE_URL}${localizedPath("de", path)}`,
    fr: `${SITE_URL}${localizedPath("fr", path)}`,
    "x-default": `${SITE_URL}${localizedPath("en", path)}`,
  };
}

export function whatsappUrl({
  locale,
  tour,
  name,
  email,
  phone,
  date,
  travellers,
  pickup,
  message,
}: {
  locale: Locale;
  tour?: string;
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  travellers?: number;
  pickup?: string;
  message?: string;
}) {
  const lines: Record<Locale, string[]> = {
    en: [
      "Hello Albanian Tours Hub! I would like to plan a small-group journey in Albania.",
      `Tour: ${tour || "Please help me choose"}`,
      `Name: ${name || "To confirm"}`,
      `Email: ${email || "To confirm"}`,
      `Phone: ${phone || "To confirm"}`,
      `Preferred date: ${date || "Flexible"}`,
      `Travellers: ${travellers || "To confirm"}`,
      `Pickup city / hotel: ${pickup || "To confirm"}`,
      `Message: ${message || "No additional note"}`,
      "Please confirm availability and the reservation details.",
      "I understand that payment is in cash on the day of the tour.",
    ],
    sq: [
      "Përshëndetje Albanian Tours Hub! Dua të planifikoj një udhëtim në grup të vogël në Shqipëri.",
      `Udhëtimi: ${tour || "Më ndihmoni të zgjedh"}`,
      `Emri: ${name || "Për t'u konfirmuar"}`,
      `Email: ${email || "Për t'u konfirmuar"}`,
      `Telefoni: ${phone || "Për t'u konfirmuar"}`,
      `Data e preferuar: ${date || "Fleksibël"}`,
      `Udhëtarë: ${travellers || "Për t'u konfirmuar"}`,
      `Qyteti / hoteli i marrjes: ${pickup || "Për t'u konfirmuar"}`,
      `Mesazhi: ${message || "Pa shënim shtesë"}`,
      "Ju lutem konfirmoni disponueshmërinë dhe detajet e rezervimit.",
      "E kuptoj që pagesa bëhet me para në dorë ditën e turit.",
    ],
    de: [
      "Hallo Albanian Tours Hub! Ich möchte eine Kleingruppenreise in Albanien planen.",
      `Tour: ${tour || "Bitte helfen Sie mir bei der Auswahl"}`,
      `Name: ${name || "Noch offen"}`,
      `E-Mail: ${email || "Noch offen"}`,
      `Telefon: ${phone || "Noch offen"}`,
      `Wunschtermin: ${date || "Flexibel"}`,
      `Reisende: ${travellers || "Noch offen"}`,
      `Abholstadt / Hotel: ${pickup || "Noch offen"}`,
      `Nachricht: ${message || "Keine zusätzliche Nachricht"}`,
      "Bitte bestätigen Sie Verfügbarkeit und Reservierungsdetails.",
      "Ich weiß, dass die Tour am Tag der Tour bar bezahlt wird.",
    ],
    fr: [
      "Bonjour Albanian Tours Hub ! Je souhaite organiser une excursion en petit groupe en Albanie.",
      `Circuit : ${tour || "Aidez-moi à choisir"}`,
      `Nom : ${name || "À confirmer"}`,
      `E-mail : ${email || "À confirmer"}`,
      `Téléphone : ${phone || "À confirmer"}`,
      `Date souhaitée : ${date || "Flexible"}`,
      `Voyageurs : ${travellers || "À confirmer"}`,
      `Ville / hôtel de prise en charge : ${pickup || "À confirmer"}`,
      `Message : ${message || "Aucune note supplémentaire"}`,
      "Merci de confirmer la disponibilité et les détails de la réservation.",
      "Je comprends que le paiement se fait en espèces le jour de l’excursion.",
    ],
  };

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines[locale].join("\n"))}`;
}
