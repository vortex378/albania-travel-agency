import { ArrowRight, Banknote, CarFront, MapPin, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "../../components/FaqAccordion";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { TourCard } from "../../components/TourCard";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { pageMetadata } from "../../lib/metadata";
import { getSearchLanding, searchLandingSlugs } from "../../lib/searchLandings";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../../lib/site";
import { tours, tourContent } from "../../lib/tours";

const ui = {
  en: {
    facts: ["2–8 travellers", "Tirana · Durrës · Golem", "Cash on the day", "WhatsApp confirmation"],
    routesEyebrow: "Available journeys",
    routesTitle: "Choose the day that fits you",
    routesIntro: "Every card opens a complete itinerary with pickup details, duration, inclusions, activity level and the published price.",
    whyEyebrow: "Before you reserve",
    whyTitle: "Clear answers, before the road",
    faqEyebrow: "Practical questions",
    faqTitle: "Good to know",
    allTours: "See all Albania tours",
    ctaEyebrow: "Speak with the local operator",
    ctaTitle: "Tell us your date, group and hotel.",
    ctaText: "We will confirm availability, the correct pickup point and the next practical step directly on WhatsApp.",
    ctaButton: "Plan on WhatsApp",
    home: "Home",
  },
  sq: {
    facts: ["2–8 udhëtarë", "Tiranë · Durrës · Golem", "Cash ditën e turit", "Konfirmim në WhatsApp"],
    routesEyebrow: "Udhëtimet e disponueshme",
    routesTitle: "Zgjidhni ditën që ju përshtatet",
    routesIntro: "Çdo kartë hap itinerarin e plotë me marrjen, kohëzgjatjen, përfshirjet, aktivitetin dhe çmimin e publikuar.",
    whyEyebrow: "Para rezervimit",
    whyTitle: "Përgjigje të qarta para rrugës",
    faqEyebrow: "Pyetje praktike",
    faqTitle: "Mirë për t’u ditur",
    allTours: "Shihni të gjitha turet",
    ctaEyebrow: "Flisni me operatorin vendas",
    ctaTitle: "Na tregoni datën, grupin dhe hotelin.",
    ctaText: "Konfirmojmë disponueshmërinë, pikën e saktë të marrjes dhe hapin e radhës direkt në WhatsApp.",
    ctaButton: "Planifiko në WhatsApp",
    home: "Kreu",
  },
  de: {
    facts: ["2–8 Reisende", "Tirana · Durrës · Golem", "Bar am Reisetag", "WhatsApp-Bestätigung"],
    routesEyebrow: "Verfügbare Reisen",
    routesTitle: "Wählen Sie den passenden Tag",
    routesIntro: "Jede Karte öffnet den vollständigen Ablauf mit Abholung, Dauer, Leistungen, Aktivitätsniveau und veröffentlichtem Preis.",
    whyEyebrow: "Vor der Reservierung",
    whyTitle: "Klare Antworten vor der Straße",
    faqEyebrow: "Praktische Fragen",
    faqTitle: "Gut zu wissen",
    allTours: "Alle Albanien-Touren",
    ctaEyebrow: "Mit dem lokalen Anbieter sprechen",
    ctaTitle: "Nennen Sie Datum, Gruppe und Hotel.",
    ctaText: "Wir bestätigen Verfügbarkeit, richtigen Abholpunkt und den nächsten Schritt direkt per WhatsApp.",
    ctaButton: "Auf WhatsApp planen",
    home: "Startseite",
  },
  fr: {
    facts: ["2–8 voyageurs", "Tirana · Durrës · Golem", "Espèces le jour même", "Confirmation WhatsApp"],
    routesEyebrow: "Voyages disponibles",
    routesTitle: "Choisissez la journée qui vous convient",
    routesIntro: "Chaque carte ouvre un itinéraire complet avec départ, durée, prestations, niveau d’activité et prix publié.",
    whyEyebrow: "Avant de réserver",
    whyTitle: "Des réponses claires avant la route",
    faqEyebrow: "Questions pratiques",
    faqTitle: "Bon à savoir",
    allTours: "Voir tous les circuits",
    ctaEyebrow: "Parler à l’opérateur local",
    ctaTitle: "Indiquez date, groupe et hôtel.",
    ctaText: "Nous confirmons disponibilité, bon point de prise en charge et prochaine étape directement sur WhatsApp.",
    ctaButton: "Organiser sur WhatsApp",
    home: "Accueil",
  },
} as const;

export function generateStaticParams() {
  return searchLandingSlugs.map((landing) => ({ landing }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; landing: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, landing: slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const landing = getSearchLanding(slug, locale);
  if (!landing) return {};

  return pageMetadata({
    locale,
    path: `/${slug}`,
    title: `${landing.seoTitle} | ${SITE_NAME}`,
    description: landing.description,
    image: landing.image,
    keywords: [
      landing.title,
      "Albania tours",
      "Albania day tours",
      "Albania tour operator",
      "Albania travel agency",
      "private tours Albania",
      ...(landing.city ? [`tours from ${landing.city}`, `${landing.city} day trips`] : []),
    ],
  });
}

export default async function SearchLandingPage({
  params,
}: {
  params: Promise<{ locale: string; landing: string }>;
}) {
  const { locale: rawLocale, landing: slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const landing = getSearchLanding(slug, locale);
  if (!landing) notFound();
  const c = ui[locale];
  const matchingTours = tours.filter((tour) => {
    if (landing.city && !tour.pickupCities.includes(landing.city)) return false;
    if (landing.privateOnly && !tour.privateGroupAvailable) return false;
    return true;
  });
  const url = `${SITE_URL}${localizedPath(locale, `/${slug}`)}`;
  const faqItems = landing.faq.map((item) => [item.question, item.answer] as const);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.home,
        item: `${SITE_URL}${localizedPath(locale)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: landing.title,
        item: url,
      },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: landing.title,
    description: landing.description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Albania" },
    serviceType: landing.title,
    audience: {
      "@type": "Audience",
      audienceType: "Couples, families and small groups of 2 to 8 travellers",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}${localizedPath(locale, "/booking")}`,
      servicePhone: { "@type": "ContactPoint", telephone: "+355697807864", contactType: "reservations" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: landing.title,
      itemListElement: matchingTours.map((tour) => ({
        "@type": "Offer",
        url: `${SITE_URL}${localizedPath(locale, `/tours/${tour.slug}`)}`,
        price: tour.price,
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "TouristTrip",
          name: tourContent(tour, locale).title,
        },
      })),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <PageHero eyebrow={landing.eyebrow} title={landing.title} intro={landing.intro} image={landing.image} />

      <section className="search-landing-facts" aria-label={landing.title}>
        {[UsersRound, MapPin, Banknote, ShieldCheck].map((Icon, index) => (
          <div key={c.facts[index]}><Icon aria-hidden="true" /><strong>{c.facts[index]}</strong></div>
        ))}
      </section>

      <section className="section search-landing-tours">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{c.routesEyebrow}</p><h2>{c.routesTitle}</h2></div>
          <div><p>{c.routesIntro}</p><Link className="text-link" href={localizedPath(locale, "/tours")}>{c.allTours}<ArrowRight /></Link></div>
        </Reveal>
        <div className="tour-grid">
          {matchingTours.map((tour, index) => (
            <Reveal key={tour.slug} delay={(index % 3) * 80}><TourCard tour={tour} locale={locale} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section search-landing-explainer">
        <Reveal className="search-landing-explainer-heading">
          <p className="eyebrow">{c.whyEyebrow}</p>
          <h2>{c.whyTitle}</h2>
        </Reveal>
        <div className="search-landing-points">
          {landing.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 80}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <CarFront aria-hidden="true" />
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section search-landing-faq">
        <Reveal className="faq-heading">
          <p className="eyebrow">{c.faqEyebrow}</p>
          <h2>{c.faqTitle}</h2>
        </Reveal>
        <FaqAccordion items={faqItems} />
      </section>

      <section className="search-landing-cta">
        <Reveal>
          <p className="eyebrow">{c.ctaEyebrow}</p>
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <WhatsAppBooking locale={locale} className="button button-whatsapp">
            <MessageCircle />{c.ctaButton}
          </WhatsAppBooking>
        </Reveal>
      </section>
    </main>
  );
}
