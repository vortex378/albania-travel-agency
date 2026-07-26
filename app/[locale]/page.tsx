import { ArrowRight, Banknote, CalendarCheck2, CarFront, MessageCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "../components/FaqAccordion";
import { GuideCard } from "../components/GuideCard";
import { Hero } from "../components/Hero";
import { JourneyMap } from "../components/JourneyMap";
import { JsonLd } from "../components/JsonLd";
import { MotionGallery } from "../components/MotionGallery";
import { Reveal } from "../components/Reveal";
import { SiteImage } from "../components/SiteImage";
import { TourCard } from "../components/TourCard";
import { WhatsAppBooking } from "../components/WhatsAppBooking";
import { editorialUi, travelGuides } from "../lib/editorial";
import { getCopy } from "../lib/i18n";
import { pageMetadata } from "../lib/metadata";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../lib/site";
import { tours, tourContent, tourGroupRange } from "../lib/tours";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const seo = {
    en: {
      title: "Albania Tours & Private Day Trips | Albanian Tours Hub",
      description: "Book Albania tours, private guided day trips and small-group packages with a local Albania travel agency. Departures from Tirana, Durrës and Golem.",
    },
    sq: {
      title: "Ture në Shqipëri & Udhëtime Private | Albanian Tours Hub",
      description: "Rezervoni ture në Shqipëri, udhëtime private me guidë dhe paketa në grupe të vogla me nisje nga Tirana, Durrësi dhe Golemi.",
    },
    de: {
      title: "Albanien Touren & private Tagesausflüge | Albanian Tours Hub",
      description: "Buchen Sie geführte Albanien-Touren, private Tagesausflüge und Kleingruppenreisen ab Tirana, Durrës oder Golem bei einer lokalen Reiseagentur.",
    },
    fr: {
      title: "Circuits Albanie & excursions privées | Albanian Tours Hub",
      description: "Réservez des circuits guidés en Albanie, des excursions privées et des voyages en petit groupe au départ de Tirana, Durrës ou Golem.",
    },
  }[locale];
  return pageMetadata({
    locale,
    title: seo.title,
    description: seo.description,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const editorial = editorialUi[locale];
  const searchAnswer = {
    en: {
      eyebrow: "Albania tours · the clear answer",
      title: "Daily Albania day tours for 2–8 travellers.",
      text: "Albanian Tours Hub offers locally guided small-group and private Albania tours with pickup from Tirana, Durrës and Golem. Book directly through WhatsApp and pay cash to your guide on the day.",
      links: [
        ["Tours from Tirana", "/tours-from-tirana"],
        ["Tours from Durrës", "/tours-from-durres"],
        ["Tours from Golem", "/tours-from-golem"],
        ["Private tours", "/private-tours-albania"],
      ],
    },
    sq: {
      eyebrow: "Ture në Shqipëri · përgjigjja e qartë",
      title: "Ture ditore për 2–8 udhëtarë.",
      text: "Albanian Tours Hub ofron ture private dhe në grupe të vogla me guida vendase dhe marrje nga Tirana, Durrësi dhe Golemi. Rezervoni direkt në WhatsApp dhe paguani cash te guida ditën e turit.",
      links: [
        ["Ture nga Tirana", "/tours-from-tirana"],
        ["Ture nga Durrësi", "/tours-from-durres"],
        ["Ture nga Golemi", "/tours-from-golem"],
        ["Ture private", "/private-tours-albania"],
      ],
    },
    de: {
      eyebrow: "Albanien-Touren · die klare Antwort",
      title: "Tägliche Touren für 2–8 Reisende.",
      text: "Albanian Tours Hub bietet lokal geführte Klein- und Privattouren mit Abholung in Tirana, Durrës und Golem. Buchen Sie direkt per WhatsApp und bezahlen Sie am Reisetag bar beim Guide.",
      links: [
        ["Touren ab Tirana", "/tours-from-tirana"],
        ["Touren ab Durrës", "/tours-from-durres"],
        ["Touren ab Golem", "/tours-from-golem"],
        ["Private Touren", "/private-tours-albania"],
      ],
    },
    fr: {
      eyebrow: "Circuits en Albanie · la réponse claire",
      title: "Excursions quotidiennes pour 2–8 voyageurs.",
      text: "Albanian Tours Hub propose des circuits privés et en petit groupe avec guides locaux et prise en charge à Tirana, Durrës et Golem. Réservez directement sur WhatsApp et payez le guide en espèces le jour même.",
      links: [
        ["Circuits depuis Tirana", "/tours-from-tirana"],
        ["Circuits depuis Durrës", "/tours-from-durres"],
        ["Circuits depuis Golem", "/tours-from-golem"],
        ["Circuits privés", "/private-tours-albania"],
      ],
    },
  }[locale];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["Albania Tours", "Albania Tour Operator", "Private Tours Albania"],
    description: c.home.intro,
    inLanguage: ["en", "sq", "de", "fr"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const itemListSchema = {
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
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} main sections`,
    itemListElement: [
      [c.nav.tours, "/tours"],
      [c.nav.guide, "/travel-guide"],
      [c.nav.booking, "/booking"],
      [c.nav.about, "/about"],
      [c.nav.faq, "/faq"],
    ].map(([name, path], index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name,
      url: `${SITE_URL}${localizedPath(locale, path)}`,
    })),
  };

  return (
    <main>
      <JsonLd data={[websiteSchema, itemListSchema, navigationSchema]} />
      <Hero locale={locale} />

      <section className="search-answer-section">
        <Reveal>
          <div>
            <p className="eyebrow">{searchAnswer.eyebrow}</p>
            <h2>{searchAnswer.title}</h2>
          </div>
          <div>
            <p>{searchAnswer.text}</p>
            <nav aria-label={searchAnswer.eyebrow}>
              {searchAnswer.links.map(([label, path]) => (
                <Link key={path} href={localizedPath(locale, path)}>{label}<ArrowRight /></Link>
              ))}
            </nav>
          </div>
        </Reveal>
      </section>

      <section className="section journeys-section" id="journeys">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{c.home.toursEyebrow}</p><h2>{c.home.toursTitle}</h2></div>
          <div><p>{c.home.toursIntro}</p><Link className="text-link" href={localizedPath(locale, "/tours")}>{c.actions.allTours}<ArrowRight /></Link></div>
        </Reveal>
        <div className="tour-grid">
          {tours.map((tour, index) => <Reveal key={tour.slug} delay={(index % 3) * 90}><TourCard tour={tour} locale={locale} /></Reveal>)}
        </div>
      </section>

      <section className="map-section">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{c.home.mapEyebrow}</p><h2>{c.home.mapTitle}</h2></div>
          <div><p>{c.home.mapIntro}</p><Link className="text-link" href={localizedPath(locale, "/albania")}>{c.nav.explore}<ArrowRight /></Link></div>
        </Reveal>
        <JourneyMap locale={locale} />
      </section>

      <section className="difference-section">
        <div className="difference-media">
          <SiteImage src="/group-road.webp" sizes="(max-width: 760px) 100vw, 50vw" />
          <span><CarFront />1–2 vehicles · {tourGroupRange(locale)}</span>
        </div>
        <Reveal className="difference-copy">
          <p className="eyebrow">{c.home.differenceEyebrow}</p>
          <h2>{c.home.differenceTitle}</h2>
          <p className="difference-lead">{c.home.differenceText}</p>
          <div className="value-list">
            {c.home.values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </Reveal>
      </section>

      <MotionGallery locale={locale} />

      <section className="section process-section">
        <Reveal className="process-heading"><p className="eyebrow">{c.home.processEyebrow}</p><h2>{c.home.processTitle}</h2></Reveal>
        <div className="process-grid">
          {[CalendarCheck2, MessageCircle, ShieldCheck, Banknote].map((Icon, index) => (
            <Reveal key={c.home.process[index][0]} delay={index * 80}>
              <article><span>0{index + 1}</span><Icon /><h3>{c.home.process[index][0]}</h3><p>{c.home.process[index][1]}</p></article>
            </Reveal>
          ))}
        </div>
        <Reveal className="cash-banner">
          <Banknote />
          <div><strong>{c.tour.cashTitle}</strong><p>{c.tour.cashText}</p></div>
          <Link href={localizedPath(locale, "/booking")}>{c.nav.booking}<ArrowRight /></Link>
        </Reveal>
      </section>

      <section className="section guide-preview-section">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{editorial.guideEyebrow}</p><h2>{editorial.guideTitle}</h2></div>
          <div><p>{editorial.guideIntro}</p><Link className="text-link" href={localizedPath(locale, "/travel-guide")}>{editorial.allGuides}<ArrowRight /></Link></div>
        </Reveal>
        <div className="guide-card-grid">
          {travelGuides.slice(0, 3).map((guide, index) => <Reveal key={guide.slug} delay={index * 70}><GuideCard guide={guide} locale={locale} /></Reveal>)}
        </div>
      </section>

      <section className="section home-faq">
        <Reveal className="faq-heading"><p className="eyebrow">{c.home.faqEyebrow}</p><h2>{c.home.faqTitle}</h2><Link className="text-link" href={localizedPath(locale, "/faq")}>{c.nav.faq}<ArrowRight /></Link></Reveal>
        <FaqAccordion items={c.faq} limit={6} />
      </section>

      <section className="closing-cta">
        <SiteImage src="/albania-riviera.webp" sizes="100vw" />
        <div className="closing-shade" />
        <Reveal>
          <span className="brand-mark">A</span>
          <p className="eyebrow">{c.home.closingEyebrow}</p>
          <h2>{c.home.closingTitle}</h2>
          <WhatsAppBooking locale={locale} className="button button-coral"><MessageCircle />{c.actions.plan}</WhatsAppBooking>
        </Reveal>
      </section>
    </main>
  );
}
