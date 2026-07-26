import { ArrowRight, Banknote, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PayInHand } from "../../components/PayInHand";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, localizedPath, SITE_NAME, type Locale } from "../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return pageMetadata({ locale, path: "/booking", title: `${c.nav.booking} — ${SITE_NAME}`, description: c.bookingPage.intro });
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return (
    <main>
      <PageHero eyebrow={c.bookingPage.eyebrow} title={c.bookingPage.title} intro={c.bookingPage.intro} image="/group-road.webp" compact />
      <section className="section booking-explainer">
        <Reveal><p className="eyebrow">{c.bookingPage.promiseTitle}</p><h2>{c.home.processTitle}</h2></Reveal>
        <div className="promise-grid">
          {c.bookingPage.promise.map(([title, text], index) => <Reveal key={title} delay={index * 90}><article><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}
        </div>
        <Reveal className="payment-statement">
          <Banknote />
          <div><p className="eyebrow">{c.tour.cashTitle}</p><h2>{c.booking.cash}</h2><p>{c.tour.cashText}</p><PayInHand locale={locale} /></div>
        </Reveal>
        <div className="booking-page-actions">
          <WhatsAppBooking locale={locale} className="button button-whatsapp"><MessageCircle />{c.actions.plan}</WhatsAppBooking>
          <Link className="button button-outline" href={localizedPath(locale, "/tours")}>{c.actions.explore}<ArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}
