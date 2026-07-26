import type { Metadata } from "next";
import { CONTENT_PUBLISHED, CONTENT_UPDATED, seoTerms } from "./seo";
import { languageAlternates, SITE_NAME, SITE_URL, type Locale } from "./site";

const openGraphLocales: Record<Locale, string> = {
  en: "en_GB",
  sq: "sq_AL",
  de: "de_DE",
  fr: "fr_FR",
};

export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  image = "/og.png",
  video,
  type = "website",
  keywords = [],
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const canonical = `${SITE_URL}/${locale}${path}`;
  const alternateLocales = Object.entries(openGraphLocales)
    .filter(([key]) => key !== locale)
    .map(([, value]) => value);
  const commonOpenGraph = {
    title,
    description,
    url: canonical,
    siteName: SITE_NAME,
    locale: openGraphLocales[locale],
    alternateLocale: alternateLocales,
    images: [{ url: image, width: 1200, height: 630, alt: title }],
    ...(video ? { videos: [{ url: video, type: "video/mp4", width: 1280, height: 720 }] } : {}),
  };

  return {
    title: { absolute: title },
    description,
    keywords: [...new Set([...seoTerms[locale], ...keywords])],
    category: "travel",
    classification: "Albania tours, private day trips and guided small-group packages",
    referrer: "origin-when-cross-origin",
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: type === "article"
      ? {
          type: "article",
          ...commonOpenGraph,
          publishedTime: CONTENT_PUBLISHED,
          modifiedTime: CONTENT_UPDATED,
          authors: [`${SITE_URL}/${locale}/about`],
          section: "Albania travel guide",
        }
      : { type: "website", ...commonOpenGraph },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "AL",
      "geo.placename": "Tirana, Albania",
      "content-language": locale,
    },
  };
}
