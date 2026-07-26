import { ArrowLeft, ArrowRight, BookOpenText, Clock3, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "../../../components/GuideCard";
import { JsonLd } from "../../../components/JsonLd";
import { PageHero } from "../../../components/PageHero";
import { Reveal } from "../../../components/Reveal";
import { TourCard } from "../../../components/TourCard";
import { WhatsAppBooking } from "../../../components/WhatsAppBooking";
import { editorialUi, getTravelGuide, travelGuideContent, travelGuides } from "../../../lib/editorial";
import { getCopy } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/metadata";
import { CONTENT_PUBLISHED, CONTENT_UPDATED, VIDEO_UPLOAD_DATE, videoDurationIso } from "../../../lib/seo";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../../../lib/site";
import { tours, tourContent } from "../../../lib/tours";

export function generateStaticParams() {
  return travelGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const guide = getTravelGuide(slug);
  if (!guide) return {};
  const content = travelGuideContent(guide, locale);
  return pageMetadata({
    locale,
    path: `/travel-guide/${guide.slug}`,
    title: `${content.title} | ${SITE_NAME}`,
    description: content.intro,
    image: guide.image,
    video: guide.video,
    type: "article",
    keywords: [content.title, content.kicker, "Albania travel advice"],
  });
}

export default async function TravelGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const c = getCopy(locale);
  const guide = getTravelGuide(slug);
  if (!guide) notFound();
  const content = travelGuideContent(guide, locale);
  const ui = editorialUi[locale];
  const relatedTours = tours.filter((tour) => guide.relatedDestinations.includes(tour.destinationSlug)).slice(0, 3);
  const relatedGuides = travelGuides.filter((item) => item.slug !== guide.slug).slice(0, 2);
  const url = `${SITE_URL}${localizedPath(locale, `/travel-guide/${guide.slug}`)}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: content.title,
      description: content.intro,
      url,
      image: `${SITE_URL}${guide.image}`,
      datePublished: CONTENT_PUBLISHED,
      dateModified: CONTENT_UPDATED,
      inLanguage: locale,
      mainEntityOfPage: url,
      isAccessibleForFree: true,
      articleSection: "Albania travel planning",
      about: relatedTours.map((tour) => ({
        "@type": "TouristTrip",
        name: tourContent(tour, locale).title,
        url: `${SITE_URL}${localizedPath(locale, `/tours/${tour.slug}`)}`,
      })),
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}${localizedPath(locale)}` },
        { "@type": "ListItem", position: 2, name: ui.guideTitle, item: `${SITE_URL}${localizedPath(locale, "/travel-guide")}` },
        { "@type": "ListItem", position: 3, name: content.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: content.title,
      description: content.intro,
      thumbnailUrl: `${SITE_URL}${guide.image}`,
      contentUrl: `${SITE_URL}${guide.video}`,
      uploadDate: VIDEO_UPLOAD_DATE,
      duration: videoDurationIso(guide.video),
      inLanguage: locale,
      isFamilyFriendly: true,
    },
  ];

  return (
    <main className="travel-guide-detail">
      <JsonLd data={schemas} />
      <PageHero
        eyebrow={content.kicker}
        title={content.title}
        intro={content.intro}
        image={guide.image}
        video={guide.video}
        playLabel={ui.playVideo}
        pauseLabel={ui.pauseVideo}
      />

      <div className="article-meta">
        <Link href={localizedPath(locale, "/travel-guide")}><ArrowLeft aria-hidden="true" />{ui.allGuides}</Link>
        <span><Clock3 aria-hidden="true" />{guide.readTime} {ui.minutes}</span>
        <span><BookOpenText aria-hidden="true" />{content.sections.length} {ui.chapters}</span>
      </div>

      <div className="article-layout">
        <aside className="article-toc">
          <p>{ui.chapters}</p>
          <nav>
            {content.sections.map((section, index) => <a key={section.title} href={`#chapter-${index + 1}`}><span>0{index + 1}</span>{section.title}</a>)}
          </nav>
          <WhatsAppBooking locale={locale} className="button button-whatsapp"><MessageCircle />WhatsApp</WhatsAppBooking>
        </aside>

        <article className="article-body">
          <header><p className="eyebrow">{content.kicker}</p><p>{content.intro}</p></header>
          {content.sections.map((section, index) => (
            <Reveal key={section.title}>
              <section id={`chapter-${index + 1}`}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            </Reveal>
          ))}
        </article>
      </div>

      <section className="section related-section">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{ui.related}</p><h2>{c.home.toursTitle}</h2></div>
          <div><Link className="text-link" href={localizedPath(locale, "/tours")}>{c.actions.allTours}<ArrowRight /></Link></div>
        </Reveal>
        <div className="tour-grid">
          {relatedTours.map((tour) => <TourCard key={tour.slug} tour={tour} locale={locale} />)}
        </div>
      </section>

      <section className="section more-guides">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{ui.guideEyebrow}</p><h2>{ui.related}</h2></div>
          <div><Link className="text-link" href={localizedPath(locale, "/travel-guide")}>{ui.allGuides}<ArrowRight /></Link></div>
        </Reveal>
        <div className="guide-card-grid">
          {relatedGuides.map((item) => <GuideCard key={item.slug} guide={item} locale={locale} />)}
        </div>
      </section>
    </main>
  );
}
