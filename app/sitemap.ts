import type { MetadataRoute } from "next";
import { travelGuideContent, travelGuides } from "./lib/editorial";
import { getCopy } from "./lib/i18n";
import { getSearchLanding, searchLandingSlugs } from "./lib/searchLandings";
import { CONTENT_UPDATED, videoDurationSeconds } from "./lib/seo";
import { locales, localizedPath, SITE_NAME, SITE_URL, type Locale } from "./lib/site";
import { tours, tourContent } from "./lib/tours";

type SitemapEntry = MetadataRoute.Sitemap[number];

function xmlText(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function languageAlternates(path: string) {
  return Object.fromEntries([
    ...locales.map((locale) => [locale, `${SITE_URL}${localizedPath(locale, path)}`]),
    ["x-default", `${SITE_URL}${localizedPath("en", path)}`],
  ]);
}

function baseEntry({
  locale,
  path,
  image,
  priority,
  changeFrequency = "monthly",
}: {
  locale: Locale;
  path: string;
  image?: string;
  priority: number;
  changeFrequency?: SitemapEntry["changeFrequency"];
}): SitemapEntry {
  return {
    url: `${SITE_URL}${localizedPath(locale, path)}`,
    lastModified: new Date(CONTENT_UPDATED),
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(path) },
    ...(image ? { images: [`${SITE_URL}${image}`] } : {}),
  };
}

function videoEntry({
  src,
  image,
  title,
  description,
}: {
  src: string;
  image: string;
  title: string;
  description: string;
}) {
  const duration = videoDurationSeconds(src);
  return {
    title: xmlText(title),
    thumbnail_loc: `${SITE_URL}${image}`,
    description: xmlText(description),
    content_loc: `${SITE_URL}${src}`,
    ...(duration ? { duration: Math.round(duration) } : {}),
    publication_date: CONTENT_UPDATED,
    family_friendly: "yes" as const,
    requires_subscription: "no" as const,
    uploader: {
      content: SITE_NAME,
      info: `${SITE_URL}/en/about`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) => {
    const copy = getCopy(locale);
    const pages: Array<{
      path: string;
      image: string;
      priority: number;
      video?: { src: string; title: string; description: string };
    }> = [
      {
        path: "",
        image: "/og.png",
        priority: 1,
        video: {
          src: "/hero-albania.mp4",
          title: `${SITE_NAME}: ${copy.home.heroLead}`,
          description: copy.home.intro,
        },
      },
      { path: "/tours", image: "/mountain-road.webp", priority: 0.95 },
      {
        path: "/travel-guide",
        image: "/group-road.webp",
        priority: 0.95,
        video: {
          src: "/travel-driving.mp4",
          title: copy.nav.guide,
          description: copy.home.guideTitle,
        },
      },
      { path: "/albania", image: "/albania-riviera.png", priority: 0.9 },
      { path: "/booking", image: "/group-road.webp", priority: 0.8 },
      { path: "/about", image: "/group-road.webp", priority: 0.75 },
      { path: "/faq", image: "/blue-eye.webp", priority: 0.8 },
      { path: "/contact", image: "/city-walk.webp", priority: 0.8 },
    ];

    return pages.map((page) => {
      const entry = baseEntry({
        locale,
        path: page.path,
        image: page.image,
        priority: page.priority,
      });
      return page.video
        ? {
            ...entry,
            videos: [
              videoEntry({
                src: page.video.src,
                image: page.image,
                title: page.video.title,
                description: page.video.description,
              }),
            ],
          }
        : entry;
    });
  });

  const tourEntries = locales.flatMap((locale) =>
    tours.map((tour) => {
      const content = tourContent(tour, locale);
      const path = `/tours/${tour.slug}`;
      return {
        ...baseEntry({
          locale,
          path,
          image: tour.image,
          priority: 0.9,
          changeFrequency: "weekly",
        }),
        videos: [
          videoEntry({
            src: tour.video,
            image: tour.image,
            title: content.title,
            description: content.tagline,
          }),
        ],
      };
    }),
  );

  const searchLandingEntries = locales.flatMap((locale) =>
    searchLandingSlugs.map((slug) => {
      const landing = getSearchLanding(slug, locale);
      if (!landing) throw new Error(`Missing search landing content for ${locale}/${slug}`);
      return baseEntry({
        locale,
        path: `/${slug}`,
        image: landing.image,
        priority: 0.9,
        changeFrequency: "weekly",
      });
    }),
  );

  const guideEntries = locales.flatMap((locale) =>
    travelGuides.map((guide) => {
      const content = travelGuideContent(guide, locale);
      const path = `/travel-guide/${guide.slug}`;
      return {
        ...baseEntry({
          locale,
          path,
          image: guide.image,
          priority: 0.85,
          changeFrequency: "weekly",
        }),
        videos: [
          videoEntry({
            src: guide.video,
            image: guide.image,
            title: content.title,
            description: content.intro,
          }),
        ],
      };
    }),
  );

  return [...staticEntries, ...searchLandingEntries, ...tourEntries, ...guideEntries];
}
