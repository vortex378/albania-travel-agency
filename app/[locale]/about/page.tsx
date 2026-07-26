import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { SiteImage } from "../../components/SiteImage";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, SITE_NAME, type Locale } from "../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return pageMetadata({ locale, path: "/about", title: `${c.nav.about} — ${SITE_NAME}`, description: c.about.intro });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return (
    <main>
      <PageHero eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro} image="/theth.png" />
      <section className="about-story">
        <div className="about-story-image"><SiteImage src="/city-walk.webp" /></div>
        <Reveal className="about-story-copy"><p className="eyebrow">{c.about.eyebrow}</p><h2>{c.about.storyTitle}</h2><p>{c.about.storyText}</p><WhatsAppBooking locale={locale} className="button button-coral"><MessageCircle />{c.actions.plan}</WhatsAppBooking></Reveal>
      </section>
      <section className="section principles-section">
        <Reveal className="principles-title"><p className="eyebrow">Albanian Tours Hub standard</p><h2>{c.home.differenceTitle}</h2></Reveal>
        <div className="principles-grid">
          {c.about.principles.map(([title, text], index) => <Reveal key={title} delay={index * 80}><article><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}
        </div>
      </section>
    </main>
  );
}
