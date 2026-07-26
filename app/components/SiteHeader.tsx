"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCopy } from "../lib/i18n";
import { localizedPath, type Locale } from "../lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppBooking } from "./WhatsAppBooking";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const c = getCopy(locale);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="brand" href={localizedPath(locale)}>
        <span className="brand-mark" aria-hidden="true">A</span>
        <span className="brand-wordmark">Albanian Tours Hub<small>Small-group journeys</small></span>
      </Link>

      <nav className={`desktop-nav ${open ? "open" : ""}`} aria-label="Primary">
        <Link href={localizedPath(locale, "/tours")} onClick={() => setOpen(false)}>{c.nav.tours}</Link>
        <Link href={localizedPath(locale, "/travel-guide")} onClick={() => setOpen(false)}>{c.nav.guide}</Link>
        <Link href={localizedPath(locale, "/booking")} onClick={() => setOpen(false)}>{c.nav.booking}</Link>
        <Link href={localizedPath(locale, "/about")} onClick={() => setOpen(false)}>{c.nav.about}</Link>
        <Link href={localizedPath(locale, "/faq")} onClick={() => setOpen(false)}>{c.nav.faq}</Link>
      </nav>

      <div className="header-actions">
        <LanguageSwitcher locale={locale} />
        <WhatsAppBooking locale={locale} className="header-booking" ariaLabel={c.actions.plan}>
          <MessageCircle aria-hidden="true" />
          <span>{c.actions.plan}</span>
        </WhatsAppBooking>
        <button type="button" className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
