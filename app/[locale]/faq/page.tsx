import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { FaqAccordion } from "../../components/FaqAccordion";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  return pageMetadata({ locale, path: "/faq", title: `${c.nav.faq} — ${SITE_NAME}`, description: c.faqPage.intro });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${localizedPath(locale, "/faq")}#faq`,
    inLanguage: locale,
    mainEntity: c.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <main>
      <JsonLd data={schema} />
      <PageHero eyebrow={c.faqPage.eyebrow} title={c.faqPage.title} intro={c.faqPage.intro} image="/blue-eye.webp" compact />
      <section className="section faq-page-content">
        <FaqAccordion items={c.faq} />
        <aside className="faq-help">
          <p className="eyebrow">{c.contact.eyebrow}</p>
          <h2>{c.contact.title}</h2>
          <p>{c.faqPage.intro}</p>
          <WhatsAppBooking locale={locale} className="button button-whatsapp"><MessageCircle />{c.actions.plan}</WhatsAppBooking>
        </aside>
      </section>
    </main>
  );
}
