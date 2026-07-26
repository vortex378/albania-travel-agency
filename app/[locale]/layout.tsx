import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import "../globals.css";
import { getCopy } from "../lib/i18n";
import { isLocale, locales, PHONE_DISPLAY, SITE_NAME, SITE_URL, type Locale } from "../lib/site";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = getCopy(locale);
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;
  const baiduVerification = process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION;
  const naverVerification = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION;
  const verification: Metadata["verification"] = {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(yandexVerification ? { yandex: yandexVerification } : {}),
    ...((bingVerification || baiduVerification || naverVerification)
      ? {
          other: {
            ...(bingVerification ? { "msvalidate.01": bingVerification } : {}),
            ...(baiduVerification ? { "baidu-site-verification": baiduVerification } : {}),
            ...(naverVerification ? { "naver-site-verification": naverVerification } : {}),
          },
        }
      : {}),
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${SITE_NAME} | Albania Tours & Private Day Trips`, template: `%s | ${SITE_NAME}` },
    description: c.home.intro,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "travel",
    classification: "Albania tours, private day trips and guided small-group packages",
    formatDetection: { telephone: true, address: true, email: false },
    appleWebApp: { capable: true, title: SITE_NAME, statusBarStyle: "black-translucent" },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
        { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    ...(googleVerification || bingVerification || yandexVerification || baiduVerification || naverVerification ? { verification } : {}),
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const c = getCopy(locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Albania Tours", "Albania Tour Operator", "Private Tours Albania"],
    description: c.about.intro,
    slogan: "Small groups. Deeper journeys.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: [`${SITE_URL}/og.png`, `${SITE_URL}/albania-riviera.png`],
    telephone: PHONE_DISPLAY,
    address: { "@type": "PostalAddress", addressLocality: "Tirana", addressCountry: "AL" },
    areaServed: { "@type": "Country", name: "Albania" },
    priceRange: "€€",
    serviceType: ["Albania tours", "Albania tour packages", "Private tours Albania", "Guided tours Albania", "Albania day tours", "Albania airport transfers by request"],
    knowsAbout: ["Albania travel", "Tirana day trips", "Albanian Riviera", "Berat", "Kruja", "Theth", "Përmet", "Durrës", "Ksamil"],
    availableLanguage: ["English", "Albanian", "German", "French"],
    knowsLanguage: ["en", "sq", "de", "fr"],
    paymentAccepted: "Cash only, paid in person on the day of the tour",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_DISPLAY,
      contactType: "reservations",
      availableLanguage: ["English", "Albanian", "German", "French"],
      areaServed: "AL",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "21:00",
      },
    },
  };

  return (
    <html lang={locale} className={`${sans.variable} ${display.variable}`} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={organization} />
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
