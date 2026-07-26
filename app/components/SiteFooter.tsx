import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getCopy } from "../lib/i18n";
import { localizedPath, PHONE_DISPLAY, type Locale, whatsappUrl } from "../lib/site";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const c = getCopy(locale);
  const searchLinks = {
    en: ["Tours from Tirana", "Tours from Durrës", "Tours from Golem"],
    sq: ["Ture nga Tirana", "Ture nga Durrësi", "Ture nga Golemi"],
    de: ["Touren ab Tirana", "Touren ab Durrës", "Touren ab Golem"],
    fr: ["Circuits depuis Tirana", "Circuits depuis Durrës", "Circuits depuis Golem"],
  }[locale];
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" href={localizedPath(locale)}><span className="brand-mark">A</span><span className="brand-wordmark">Albanian Tours Hub<small>Small-group journeys</small></span></Link>
        <p>{c.footer.line}</p>
        <a className="footer-whatsapp" href={whatsappUrl({ locale })} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp <ArrowUpRight /></a>
      </div>
      <div className="footer-column">
        <strong>{c.footer.explore}</strong>
        <Link href={localizedPath(locale, "/tours")}>{c.nav.tours}</Link>
        <Link href={localizedPath(locale, "/tours-from-tirana")}>{searchLinks[0]}</Link>
        <Link href={localizedPath(locale, "/tours-from-durres")}>{searchLinks[1]}</Link>
        <Link href={localizedPath(locale, "/tours-from-golem")}>{searchLinks[2]}</Link>
        <Link href={localizedPath(locale, "/travel-guide")}>{c.nav.guide}</Link>
      </div>
      <div className="footer-column">
        <strong>{c.footer.support}</strong>
        <Link href={localizedPath(locale, "/booking")}>{c.nav.booking}</Link>
        <Link href={localizedPath(locale, "/about")}>{c.nav.about}</Link>
        <Link href={localizedPath(locale, "/faq")}>{c.nav.faq}</Link>
        <Link href={localizedPath(locale, "/contact")}>{c.nav.contact}</Link>
        <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>{PHONE_DISPLAY}</a>
      </div>
      <div className="footer-column">
        <strong>{c.footer.legal}</strong>
        <span>Tirana, Albania</span>
        <span>{c.contact.hours}</span>
        <span>{c.booking.cash}</span>
      </div>
      <div className="footer-bottom">
        <span>{c.footer.rights}</span>
        <span>English · Shqip · Deutsch · Français</span>
      </div>
    </footer>
  );
}
