"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { languageNames, locales, type Locale } from "../lib/site";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function hrefFor(nextLocale: Locale) {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length && locales.includes(parts[0] as Locale)) parts[0] = nextLocale;
    else parts.unshift(nextLocale);
    return `/${parts.join("/")}`;
  }

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-trigger"
        aria-label={`Change language. Current language: ${languageNames[locale]}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown aria-hidden="true" />
      </button>
      {open && (
        <div className="language-menu" role="menu">
          {locales.map((item) => (
            <a key={item} href={hrefFor(item)} lang={item} role="menuitem" onClick={() => setOpen(false)}>
              <span>{languageNames[item]}</span>
              {item === locale && <Check aria-hidden="true" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
