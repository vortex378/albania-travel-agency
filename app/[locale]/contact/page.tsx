import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, PHONE_DISPLAY, SITE_NAME, type Locale, whatsappUrl } from "../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return pageMetadata({ locale, path: "/contact", title: `${c.nav.contact} — ${SITE_NAME}`, description: c.contact.intro });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return (
    <main>
      <PageHero eyebrow={c.contact.eyebrow} title={c.contact.title} intro={c.contact.intro} image="/permet-bridge.webp" compact />
      <section className="section contact-section">
        <Reveal className="contact-primary">
          <p className="eyebrow">{c.nav.contact}</p>
          <h2>{c.contact.intro}</h2>
          <div className="contact-actions">
            <a className="button button-whatsapp" href={whatsappUrl({ locale })} target="_blank" rel="noreferrer"><MessageCircle />{c.contact.whatsapp}</a>
            <a className="button button-outline" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}><Phone />{c.contact.call}</a>
          </div>
        </Reveal>
        <div className="contact-details">
          <Reveal><article><MapPin /><span><small>{c.nav.contact}</small><strong>{c.contact.location}</strong></span></article></Reveal>
          <Reveal delay={80}><article><Clock3 /><span><small>WhatsApp</small><strong>{c.contact.hours}</strong></span></article></Reveal>
          <Reveal delay={160}><article><Phone /><span><small>{c.contact.call}</small><strong>{PHONE_DISPLAY}</strong></span></article></Reveal>
        </div>
      </section>
    </main>
  );
}
