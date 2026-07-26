import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { TourCard } from "../../components/TourCard";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, localizedPath, SITE_URL, type Locale } from "../../lib/site";
import { tours, tourContent } from "../../lib/tours";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const title = {
    en: "Albania Tours & Day Trips from Tirana | Albanian Tours Hub",
    sq: "Ture Ditore në Shqipëri nga Tirana | Albanian Tours Hub",
    de: "Albanien Touren & Tagesausflüge ab Tirana | Albanian Tours Hub",
    fr: "Circuits Albanie & excursions depuis Tirana | Albanian Tours Hub",
  }[locale];
  return pageMetadata({
    locale,
    path: "/tours",
    title,
    description: c.toursPage.intro,
    image: "/mountain-road.webp",
    keywords: [c.nav.tours, c.toursPage.title, "Albania tours", "Albania tour packages", "private tours Albania", "guided tours Albania", "Albania day tours", "Tirana tours"],
  });
}

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.toursPage.title,
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tourContent(tour, locale).title,
      url: `${SITE_URL}${localizedPath(locale, `/tours/${tour.slug}`)}`,
    })),
  };

  return (
    <main>
      <JsonLd data={listSchema} />
      <PageHero eyebrow={c.toursPage.eyebrow} title={c.toursPage.title} intro={c.toursPage.intro} image="/mountain-road.webp" />
      <section className="section tours-index">
        <div className="tour-grid">
          {tours.map((tour, index) => <Reveal key={tour.slug} delay={(index % 3) * 90}><TourCard tour={tour} locale={locale} priority={index < 3} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
