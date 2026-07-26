import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { SiteImage } from "../../components/SiteImage";
import { WhatsAppBooking } from "../../components/WhatsAppBooking";
import { getCopy } from "../../lib/i18n";
import { pageMetadata } from "../../lib/metadata";
import { isLocale, localizedPath, SITE_NAME, SITE_URL, type Locale } from "../../lib/site";
import { getTour, tourContent } from "../../lib/tours";

type ExplorePageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  regionsEyebrow: string;
  regionsTitle: string;
  regionsIntro: string;
  journeyLabel: string;
  regions: readonly {
    name: string;
    kicker: string;
    text: string;
  }[];
  closingEyebrow: string;
  closingTitle: string;
  closingText: string;
};

const explorePageCopy: Record<Locale, ExplorePageCopy> = {
  en: {
    eyebrow: "A country made for the road",
    title: "Explore Albania, region by region.",
    intro: "The coast, stone cities, northern peaks and wild river valleys sit remarkably close together. Start with the landscape that feels most like your day.",
    regionsEyebrow: "From the Adriatic to the Alps. Nine real tours.",
    regionsTitle: "Choose by feeling, not by checklist.",
    regionsIntro: "Every region below connects to a small-group journey from Tirana, with its real pace, drive time, stops and inclusions explained before you book.",
    journeyLabel: "Journeys in this region",
    regions: [
      { name: "The Ionian Coast", kicker: "Sea roads & southern light", text: "Llogara opens the horizon, Himarë slows the afternoon and quiet coves turn the long coastal road into the experience itself." },
      { name: "The Stone South", kicker: "Castles, old quarters & tables", text: "Berat and Gjirokastër tell different chapters of Albania through inhabited castles, Ottoman streets and regional kitchens." },
      { name: "The North & Albanian Alps", kicker: "Mountain air & living history", text: "Theth brings high valleys and stone homes; Krujë and Bovilla pair national memory with a surprisingly wild landscape near Tirana." },
      { name: "Vjosa & Përmet", kicker: "Wild water & generous food", text: "One of Europe’s last wild rivers leads toward thermal pools, a stone bridge, mountain herbs and the famously warm kitchen of Përmet." },
    ],
    closingEyebrow: "Not sure which Albania is yours?",
    closingTitle: "Tell us what you want the day to feel like.",
    closingText: "Sea or mountains, culture or food, an easy walk or an active one—we will recommend the road that fits.",
  },
  sq: {
    eyebrow: "Një vend i krijuar për rrugën",
    title: "Zbulo Shqipërinë, rajon pas rajoni.",
    intro: "Bregdeti, qytetet e gurta, majat e veriut dhe luginat e lumenjve të egër janë çuditërisht pranë njëra-tjetrës. Fillo me peizazhin që të thërret.",
    regionsEyebrow: "Nga Adriatiku në Alpe. Nëntë ture reale.",
    regionsTitle: "Zgjidh sipas ndjesisë, jo listës.",
    regionsIntro: "Çdo rajon lidhet me një udhëtim në grup të vogël nga Tirana, me ritmin, kohën e rrugës, ndalesat dhe përfshirjet të shpjeguara para rezervimit.",
    journeyLabel: "Udhëtime në këtë rajon",
    regions: [
      { name: "Bregdeti Jon", kicker: "Rrugë deti dhe dritë jugu", text: "Llogaraja hap horizontin, Himara ngadalëson pasditen dhe gjiret e qeta e bëjnë vetë rrugën pjesë të përvojës." },
      { name: "Jugu i gurtë", kicker: "Kala, lagje të vjetra dhe tryeza", text: "Berati dhe Gjirokastra tregojnë kapituj të ndryshëm të Shqipërisë përmes kalave të banuara, rrugëve osmane dhe kuzhinës rajonale." },
      { name: "Veriu dhe Alpet Shqiptare", kicker: "Ajër mali dhe histori e gjallë", text: "Thethi sjell lugina të larta e shtëpi guri; Kruja dhe Bovilla bashkojnë kujtesën kombëtare me natyrën e egër pranë Tiranës." },
      { name: "Vjosa dhe Përmeti", kicker: "Ujë i egër dhe kuzhinë bujare", text: "Një nga lumenjtë e fundit të egër të Evropës të çon te ujërat termale, ura e gurit, erëzat e malit dhe mikpritja e Përmetit." },
    ],
    closingEyebrow: "Nuk je i sigurt cilën Shqipëri të zgjedhësh?",
    closingTitle: "Na trego si dëshiron të ndihet dita.",
    closingText: "Det apo male, kulturë apo ushqim, ecje e lehtë apo aktive—ne të rekomandojmë rrugën e duhur.",
  },
  de: {
    eyebrow: "Ein Land wie gemacht für die Straße",
    title: "Albanien entdecken, Region für Region.",
    intro: "Küste, Steinstädte, Nordgipfel und wilde Flusstäler liegen erstaunlich nah beieinander. Beginnen Sie mit der Landschaft, die zu Ihrem Tag passt.",
    regionsEyebrow: "Von der Adria bis in die Alpen. Neun echte Touren.",
    regionsTitle: "Nach Gefühl wählen, nicht nach Checkliste.",
    regionsIntro: "Jede Region führt zu einer Kleingruppentour ab Tirana. Tempo, Fahrzeit, Stopps und Leistungen sind vor der Buchung klar beschrieben.",
    journeyLabel: "Touren in dieser Region",
    regions: [
      { name: "Die Ionische Küste", kicker: "Meeresstraßen & Licht des Südens", text: "Llogara öffnet den Horizont, Himarë verlangsamt den Nachmittag und stille Buchten machen die Küstenstraße selbst zum Erlebnis." },
      { name: "Der steinerne Süden", kicker: "Burgen, Altstädte & Tische", text: "Berat und Gjirokastër erzählen verschiedene Kapitel Albaniens durch bewohnte Burgen, osmanische Gassen und regionale Küchen." },
      { name: "Der Norden & die Albanischen Alpen", kicker: "Bergluft & lebendige Geschichte", text: "Theth bringt Hochtäler und Steinhäuser; Krujë und Bovilla verbinden nationale Erinnerung mit überraschend wilder Landschaft nahe Tirana." },
      { name: "Vjosa & Përmet", kicker: "Wildes Wasser & großzügige Küche", text: "Einer der letzten wilden Flüsse Europas führt zu Thermalbecken, einer Steinbrücke, Bergkräutern und der herzlichen Küche von Përmet." },
    ],
    closingEyebrow: "Sie wissen noch nicht, welche Region passt?",
    closingTitle: "Sagen Sie uns, wie sich der Tag anfühlen soll.",
    closingText: "Meer oder Berge, Kultur oder Essen, leicht oder aktiv—wir empfehlen die passende Straße.",
  },
  fr: {
    eyebrow: "Un pays fait pour la route",
    title: "Découvrir l’Albanie, région par région.",
    intro: "La côte, les villes de pierre, les sommets du Nord et les vallées sauvages sont étonnamment proches. Commencez par le paysage qui ressemble à votre journée idéale.",
    regionsEyebrow: "De l’Adriatique aux Alpes. Neuf vrais circuits.",
    regionsTitle: "Choisir par envie, pas par checklist.",
    regionsIntro: "Chaque région mène à une excursion en petit groupe depuis Tirana, avec rythme, temps de route, étapes et inclusions clairement expliqués.",
    journeyLabel: "Excursions dans cette région",
    regions: [
      { name: "La côte Ionienne", kicker: "Routes marines & lumière du Sud", text: "Llogara ouvre l’horizon, Himarë ralentit l’après-midi et les criques tranquilles font de la route une partie du voyage." },
      { name: "Le Sud de pierre", kicker: "Citadelles, vieux quartiers & tables", text: "Berat et Gjirokastër racontent différents chapitres de l’Albanie par leurs citadelles habitées, ruelles ottomanes et cuisines régionales." },
      { name: "Le Nord & les Alpes albanaises", kicker: "Air des montagnes & histoire vivante", text: "Theth offre hautes vallées et maisons de pierre ; Krujë et Bovilla associent mémoire nationale et paysage sauvage près de Tirana." },
      { name: "La Vjosa & Përmet", kicker: "Eau sauvage & cuisine généreuse", text: "L’une des dernières rivières sauvages d’Europe mène vers les bassins thermaux, un pont de pierre, les herbes de montagne et la cuisine de Përmet." },
    ],
    closingEyebrow: "Vous hésitez encore ?",
    closingTitle: "Dites-nous comment vous voulez vivre la journée.",
    closingText: "Mer ou montagne, culture ou cuisine, promenade facile ou journée active—nous vous conseillerons la bonne route.",
  },
};

const regionBlueprints = [
  { image: "/albania-riviera.png", slugs: ["from-tirana-durres-sarande-blue-eye-ksamil-lekursi-castle", "from-tirana-durres-golem-cape-of-rodon-and-wine-tasting-tour", "from-tirana-explore-durres-museum-amphitheater-and-coastal"] },
  { image: "/berat.png", slugs: ["from-tirana-durres-golem-berat-unesco-and-belshi-lake-tour", "from-tirana-durres-golem-kruja-castle-and-old-bazaar-tour"] },
  { image: "/theth.png", slugs: ["from-tirana-and-shkoder-theth-and-blue-eye-full-day-tour"] },
  { image: "/permet-bridge.webp", slugs: ["from-tirana-durres-golem-permet-canyon-and-thermal-baths", "from-tirana-or-durres-vineyard-tour-and-wine-tasting", "from-tirana-durres-wine-tasting-cooking-class-and-goat-milking"] },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = explorePageCopy[locale];
  return pageMetadata({
    locale,
    path: "/albania",
    title: `${c.title} | ${SITE_NAME}`,
    description: c.intro,
  });
}

export default async function ExploreAlbaniaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const c = explorePageCopy[locale];
  const shared = getCopy(locale);

  const itemList = regionBlueprints.flatMap((region) => region.slugs).map((slug, index) => {
    const tour = getTour(slug)!;
    return {
      "@type": "ListItem",
      position: index + 1,
      name: tourContent(tour, locale).title,
      url: `${SITE_URL}${localizedPath(locale, `/tours/${slug}`)}`,
    };
  });

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: c.title,
      description: c.intro,
      url: `${SITE_URL}${localizedPath(locale, "/albania")}`,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@type": "ItemList", numberOfItems: itemList.length, itemListElement: itemList },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}${localizedPath(locale)}` },
        { "@type": "ListItem", position: 2, name: shared.nav.explore, item: `${SITE_URL}${localizedPath(locale, "/albania")}` },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={structuredData} />
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} image="/blue-eye.webp" />

      <section className="section explore-regions">
        <Reveal className="section-heading">
          <div><p className="eyebrow">{c.regionsEyebrow}</p><h2>{c.regionsTitle}</h2></div>
          <div><p>{c.regionsIntro}</p><Link className="text-link" href={localizedPath(locale, "/tours")}>{shared.actions.allTours}<ArrowRight /></Link></div>
        </Reveal>

        <div className="region-grid">
          {regionBlueprints.map((region, index) => (
            <Reveal key={c.regions[index].name} delay={index * 80}>
              <article className="region-card">
                <SiteImage src={region.image} />
                <div className="region-card-shade" />
                <div className="region-card-copy">
                  <p>{c.regions[index].kicker}</p>
                  <h2>{c.regions[index].name}</h2>
                  <span>{c.regions[index].text}</span>
                  <nav aria-label={`${c.journeyLabel}: ${c.regions[index].name}`}>
                    <small>{c.journeyLabel}</small>
                    {region.slugs.map((slug) => {
                      const tour = getTour(slug)!;
                      return (
                        <Link key={slug} href={localizedPath(locale, `/tours/${slug}`)}>
                          {tourContent(tour, locale).title}<ArrowRight />
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="explore-cta">
        <SiteImage src="/group-road.webp" />
        <div />
        <Reveal>
          <Compass />
          <p className="eyebrow">{c.closingEyebrow}</p>
          <h2>{c.closingTitle}</h2>
          <span>{c.closingText}</span>
          <WhatsAppBooking locale={locale} className="button button-coral"><MessageCircle />{shared.actions.plan}</WhatsAppBooking>
        </Reveal>
      </section>
    </main>
  );
}
