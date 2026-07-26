import { ArrowLeft, ArrowRight, Check, CircleAlert, Clock3, Globe2, MapPin, MessageCircle, Navigation, Phone, ShieldCheck, Star, UsersRound, X } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AmbientVideo } from "../../../components/AmbientVideo";
import { JsonLd } from "../../../components/JsonLd";
import { PayInHand } from "../../../components/PayInHand";
import { Reveal } from "../../../components/Reveal";
import { TourCard } from "../../../components/TourCard";
import { TourReviews } from "../../../components/TourReviews";
import { WhatsAppBooking } from "../../../components/WhatsAppBooking";
import { editorialUi } from "../../../lib/editorial";
import { getCopy } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/metadata";
import { VIDEO_UPLOAD_DATE, videoDurationIso } from "../../../lib/seo";
import { isLocale, localizedPath, PHONE_TEL, SITE_NAME, SITE_URL, type Locale } from "../../../lib/site";
import { getTour, tours, tourContent, tourGroupRange, tourLabels, tourPickupCities } from "../../../lib/tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const tour = getTour(slug);
  if (!tour) return {};
  const content = tourContent(tour, locale);
  return pageMetadata({
    locale,
    path: `/tours/${tour.slug}`,
    title: `${content.title} — ${SITE_NAME}`,
    description: content.tagline,
    image: tour.image,
    video: tour.video,
    keywords: [content.title, content.region, `${content.title} tour`, "Albania day tour", ...tour.pickupCities.map((city) => `tour from ${city}`)],
  });
}

export default async function TourDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const tour = getTour(slug);
  if (!tour) notFound();
  const c = getCopy(locale);
  const editorial = editorialUi[locale];
  const content = tourContent(tour, locale);
  const labels = tourLabels(locale);
  const pickupCities = tourPickupCities(tour, locale);
  const groupRange = tourGroupRange(locale, tour.maxGroup ?? 8);
  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);
  const url = `${SITE_URL}${localizedPath(locale, `/tours/${tour.slug}`)}`;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#tour`,
    name: content.title,
    description: content.summary,
    url,
    inLanguage: locale,
    mainEntityOfPage: url,
    touristType: tour.groupStyle,
    itinerary: {
      "@type": "ItemList",
      name: content.region,
      itemListElement: content.stops.map((stop, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: stop.title,
        description: stop.text,
      })),
    },
    image: `${SITE_URL}${tour.image}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      url,
      price: tour.price,
      priceCurrency: "EUR",
      category: "Albania day tour",
      seller: { "@id": `${SITE_URL}/#organization` },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: tour.price,
        priceCurrency: "EUR",
        unitText: "PER PERSON",
      },
    },
    ...(tour.rating !== null && tour.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: tour.rating,
            reviewCount: tour.reviewCount,
            bestRating: 5,
          },
        }
      : {}),
  };

  const schemas = [
    tourSchema,
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: `${content.title} — ${editorial.watch}`,
      description: content.tagline,
      thumbnailUrl: `${SITE_URL}${tour.image}`,
      contentUrl: `${SITE_URL}${tour.video}`,
      uploadDate: VIDEO_UPLOAD_DATE,
      duration: videoDurationIso(tour.video),
      inLanguage: locale,
      isFamilyFriendly: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}${localizedPath(locale)}` },
        { "@type": "ListItem", position: 2, name: c.nav.tours, item: `${SITE_URL}${localizedPath(locale, "/tours")}` },
        { "@type": "ListItem", position: 3, name: content.title, item: url },
      ],
    },
  ];

  return (
    <main className="tour-detail-page">
      <JsonLd data={schemas} />
      <section className="tour-detail-hero">
        <AmbientVideo
          src={tour.video}
          poster={tour.image}
          priority
          showControl
          playLabel={editorial.playVideo}
          pauseLabel={editorial.pauseVideo}
          className="tour-detail-video"
        />
        <div className="tour-detail-shade" />
        <div className="tour-detail-hero-copy">
          <Link href={localizedPath(locale, "/tours")}><ArrowLeft />{c.tour.back}</Link>
          <p>{labels.category[tour.category]} · {tour.groupStyle}</p>
          <h1>{content.title}</h1>
          <span><MapPin />{content.region}</span>
        </div>
        <a className="hero-film-credit" href={tour.videoCredit.url} target="_blank" rel="noreferrer">{editorial.videoCredit}: {tour.videoCredit.name}</a>
      </section>

      <section className="tour-facts">
        <div><Navigation /><span><small>{c.tour.departure}</small><strong>{pickupCities} · {tour.departure}</strong></span></div>
        <div><Clock3 /><span><small>{c.tour.duration}</small><strong>{tour.duration}</strong></span></div>
        <div><UsersRound /><span><small>{c.tour.group}</small><strong>{groupRange}</strong></span></div>
        <div><ShieldCheck /><span><small>{c.tour.level}</small><strong>{labels.difficulty[tour.difficulty]}</strong></span></div>
        <div><MapPin /><span><small>{c.tour.pickupCities}</small><strong>{pickupCities}</strong></span></div>
      </section>

      <div className="tour-detail-layout">
        <div className="tour-detail-main">
          <Reveal className="tour-overview">
            <p className="eyebrow">{c.tour.overview}</p>
            <h2>{content.tagline}</h2>
            <p>{content.summary}</p>
            {tour.optionalExtra && <div className="optional-extra"><CircleAlert /><div><strong>{c.tour.optionalExtra}</strong><p>{tour.optionalExtra}</p></div></div>}
          </Reveal>

          <section className="tour-highlights">
            <Reveal className="tour-section-title"><span>01</span><div><p className="eyebrow">{c.tour.highlights}</p><h2>{c.tour.bestMoments}</h2></div></Reveal>
            <div className="inclusion-grid">
              {tour.highlights.map((item) => <span key={item}><Star />{item}</span>)}
            </div>
          </section>

          <section className="tour-itinerary">
            <Reveal className="tour-section-title"><span>02</span><div><p className="eyebrow">{c.tour.itinerary}</p><h2>{content.region}</h2></div></Reveal>
            <div className="timeline">
              {content.stops.map((stop, index) => (
                <Reveal key={`${stop.time}-${stop.title}`} delay={index * 45}>
                  <article><time>{stop.time}</time><span><i>{index + 1}</i>{index < content.stops.length - 1 && <b />}</span><div><h3>{stop.title}</h3><p>{stop.text}</p></div></article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="tour-inclusions">
            <Reveal className="tour-section-title"><span>03</span><div><p className="eyebrow">{c.tour.included}</p><h2>{c.tour.clearBeforeBooking}</h2></div></Reveal>
            <div className="tour-inclusion-columns">
              <div>
                <h3><Check />{c.tour.included}</h3>
                <div className="inclusion-grid">{tour.inclusions.map((item) => <span key={item}><Check />{item}</span>)}</div>
              </div>
              <div>
                <h3><X />{c.tour.notIncluded}</h3>
                <div className="inclusion-grid inclusion-grid--muted">{tour.notIncluded.map((item) => <span key={item}><X />{item}</span>)}</div>
              </div>
            </div>
          </section>

          <section className="tour-practical">
            <Reveal className="tour-section-title"><span>04</span><div><p className="eyebrow">{c.tour.practical}</p><h2>{c.tour.beforeYouGo}</h2></div></Reveal>
            <div className="practical-grid">
              <article><Globe2 /><div><small>{c.tour.languages}</small><strong>{tour.languages.join(" · ")}</strong></div></article>
              <article><MapPin /><div><small>{c.tour.pickupCities}</small><strong>{tour.pickupDetails}</strong></div></article>
              <article><ShieldCheck /><div><small>{c.tour.cancellation}</small><strong>{tour.freeCancellation}</strong></div></article>
              {tour.wheelchairAccessible && <article><UsersRound /><div><small>{c.tour.accessibility}</small><strong>{c.tour.wheelchair}</strong></div></article>}
              {tour.privateGroupAvailable && <article><UsersRound /><div><small>{c.tour.group}</small><strong>{c.tour.privateAvailable}</strong></div></article>}
            </div>
          </section>

          <section className="tour-bring">
            <Reveal className="tour-section-title"><span>05</span><div><p className="eyebrow">{c.tour.bring}</p><h2>{content.title}</h2></div></Reveal>
            <div className="bring-list">{tour.bring.map((item) => <span key={item}>{item}</span>)}</div>

            {tour.restrictions.length > 0 && <div className="tour-notes-group"><h3>{c.tour.restrictions}</h3><ul>{tour.restrictions.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {tour.notAllowed.length > 0 && <div className="tour-notes-group"><h3>{c.tour.notAllowed}</h3><ul>{tour.notAllowed.map((item) => <li key={item}>{item}</li>)}</ul></div>}
            {tour.notes.length > 0 && <div className="tour-notes-group"><h3>{c.tour.notes}</h3><ul>{tour.notes.map((item) => <li key={item}>{item}</li>)}</ul></div>}
          </section>
        </div>

        <aside className="tour-booking-card">
          <span className="booking-card-daily"><ShieldCheck />{tour.freeCancellation}</span>
          <div className="booking-rating">
            {tour.rating === null || tour.reviewCount === 0 ? <strong>{c.tour.newActivity}</strong> : <><Star /><strong>{tour.rating.toFixed(1)}</strong><span>({tour.reviewCount} {c.tour.reviews})</span></>}
          </div>
          <div className="booking-contact booking-contact--price">
            <small>{c.tour.priceLabel}</small>
            <strong>
              {tour.originalPrice && <del>€{tour.originalPrice}</del>}
              {c.tour.from} €{tour.price}
            </strong>
            <span>{c.tour.perPersonCash}</span>
          </div>
          <PayInHand locale={locale} />
          <div className="booking-contact-actions">
            <a className="button button-outline" href={`tel:${PHONE_TEL}`}><Phone />{c.contact.call}</a>
            <WhatsAppBooking locale={locale} tourTitle={content.title} className="button button-whatsapp"><MessageCircle />{c.actions.book}</WhatsAppBooking>
          </div>
          <div className="booking-card-points">
            <span><Check />{tour.pickupDetails}</span>
            <span><Check />{groupRange}</span>
            <span><Check />{tour.groupStyle}</span>
            <span><Check />{c.tour.cashFaq}</span>
          </div>
        </aside>
      </div>

      <TourReviews
        tourSlug={tour.slug}
        locale={locale}
        rating={tour.rating}
        reviewCount={tour.reviewCount}
        verifiedReviews={[]}
      />

      <section className="tour-payment-band">
        <div><p className="eyebrow">{c.nav.booking}</p><h2>{c.tour.cashTitle}</h2><p>{c.tour.cashFaq}</p></div>
        <Link href={localizedPath(locale, "/booking")}>{c.nav.booking}<ArrowRight /></Link>
      </section>

      <section className="section related-section">
        <div className="section-heading"><div><p className="eyebrow">{c.tour.related}</p><h2>{c.home.toursTitle}</h2></div></div>
        <div className="tour-grid">{related.map((item) => <TourCard key={item.slug} tour={item} locale={locale} />)}</div>
      </section>
    </main>
  );
}
