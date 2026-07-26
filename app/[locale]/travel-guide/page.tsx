import { ArrowRight, BookOpenText, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "../../components/GuideCard";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { TourCard } from "../../components/TourCard";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { editorialUi, travelGuideContent, travelGuides } from "../../lib/editorial";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../../lib/site";
import { tours } from "../../lib/tours";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const ui = editorialUi[locale];
  const title = {
    en: "Albanian Tours Hub Guide: Itineraries, Seasons & Local Advice",
    sq: "Udhërrëfyes për Shqipërinë: itinerare, stinë dhe këshilla",
    de: "Albanien-Reiseführer: Routen, Reisezeit & lokale Tipps",
    fr: "Guide de voyage en Albanie : itinéraires, saisons & conseils",
  }[locale];
  return pageMetadata({
    locale,
    path: "/travel-guide",
    title: locale === "en" ? title : `${title} | ${SITE_NAME}`,
    description: ui.guideIntro,
    image: "/group-road.webp",
    video: "/travel-driving.mp4",
    keywords: [ui.guideTitle, "Albania itinerary", "Albania travel tips"],
  });
}

export default async function TravelGuideIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const ui = editorialUi[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: ui.guideTitle,
    description: ui.guideIntro,
    url: `${SITE_URL}${localizedPath(locale, "/travel-guide")}`,
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: travelGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: travelGuideContent(guide, locale).title,
        url: `${SITE_URL}${localizedPath(locale, `/travel-guide/${guide.slug}`)}`,
      })),
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={ui.guideEyebrow}
        title={ui.guideTitle}
        intro={ui.guideIntro}
        image="/group-road.webp"
        video="/travel-driving.mp4"
        playLabel={ui.playVideo}
        pauseLabel={ui.pauseVideo}
      />

      <section className="section travel-guide-index">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{ui.guideEyebrow}</p><h2>{ui.chapters}</h2></div>
          <div><p>{ui.guideIntro}</p></div>
        </Reveal>
        <div className="guide-card-grid guide-card-grid--index">
          {travelGuides.map((guide, index) => (
            <Reveal key={guide.slug} delay={(index % 2) * 75}>
              <GuideCard guide={guide} locale={locale} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="editorial-band editorial-band--coral">
        <Reveal>
          <BookOpenText aria-hidden="true" />
          <p className="eyebrow">{ui.destinationsEyebrow}</p>
          <h2>{ui.destinationsTitle}</h2>
          <p>{ui.destinationsIntro}</p>
          <Link className="button button-light" href={localizedPath(locale, "/tours")}>{c.actions.allTours}<ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section related-section">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{ui.related}</p><h2>{c.home.toursTitle}</h2></div>
          <div><p>{c.home.toursIntro}</p></div>
        </Reveal>
        <div className="tour-grid">
          {tours.slice(0, 3).map((tour) => <TourCard key={tour.slug} tour={tour} locale={locale} />)}
        </div>
      </section>

      <section className="destination-booking-cta">
        <div><p className="eyebrow">{ui.matchingJourney}</p><h2>{ui.guideTitle}</h2></div>
        <WhatsAppBooking locale={locale} className="button button-whatsapp"><MessageCircle />WhatsApp</WhatsAppBooking>
      </section>
    </main>
  );
}
