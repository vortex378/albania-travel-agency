import { ArrowRight, BookOpenText } from "lucide-react";
import Link from "next/link";
import { editorialUi, travelGuideContent, type TravelGuide } from "../lib/editorial";
import { localizedPath, type Locale } from "../lib/site";
import { AmbientVideo } from "./AmbientVideo";

interface GuideCardProps {
  guide: TravelGuide;
  locale: Locale;
  featured?: boolean;
}

export function GuideCard({ guide, locale, featured = false }: GuideCardProps) {
  const content = travelGuideContent(guide, locale);
  const ui = editorialUi[locale];

  return (
    <article className={`guide-card ${featured ? "guide-card--featured" : ""}`}>
      <Link href={localizedPath(locale, `/travel-guide/${guide.slug}`)}>
        <span className="guide-card-image">
          <AmbientVideo src={guide.video} poster={guide.image} />
        </span>
        <span className="guide-card-copy">
          <small><BookOpenText aria-hidden="true" />{guide.readTime} {ui.minutes}</small>
          <strong>{content.title}</strong>
          <span>{content.intro}</span>
          <em>{ui.readGuide}<ArrowRight aria-hidden="true" /></em>
        </span>
      </Link>
    </article>
  );
}
