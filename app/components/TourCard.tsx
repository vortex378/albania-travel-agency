import { ArrowRight, Clock3, MapPin, MessageCircle, Navigation, Phone, Star, UsersRound } from "lucide-react";
import Link from "next/link";
import { getCopy } from "../lib/i18n";
import { localizedPath, PHONE_TEL, type Locale } from "../lib/site";
import { type Tour, tourContent, tourGroupRange, tourLabels, tourPickupCities } from "../lib/tours";
import { AmbientVideo } from "./AmbientVideo";
import { WhatsAppBooking } from "./WhatsAppBooking";

interface TourCardProps {
  tour: Tour;
  locale: Locale;
  priority?: boolean;
}

export function TourCard({ tour, locale, priority = false }: TourCardProps) {
  const c = getCopy(locale);
  const content = tourContent(tour, locale);
  const labels = tourLabels(locale);
  const pickupCities = tourPickupCities(tour, locale);
  const groupRange = tourGroupRange(locale, tour.maxGroup ?? 8);

  return (
    <article className={`tour-card tour-card--${tour.category}`}>
      <Link className="tour-card-image" href={localizedPath(locale, `/tours/${tour.slug}`)}>
        <AmbientVideo src={tour.video} poster={tour.image} priority={priority} />
        <span className="tour-card-category">{labels.category[tour.category]}</span>
        <span className="tour-card-arrow"><ArrowRight /></span>
      </Link>
      <div className="tour-card-content">
        <p className="tour-region"><MapPin />{content.region}</p>
        <h3><Link href={localizedPath(locale, `/tours/${tour.slug}`)}>{content.title}</Link></h3>
        <p className="tour-tagline">{content.tagline}</p>
        <div className="tour-rating">
          {tour.rating === null || tour.reviewCount === 0 ? (
            <strong>{c.tour.newActivity}</strong>
          ) : (
            <><Star aria-hidden="true" /><strong>{tour.rating?.toFixed(1)}</strong><span>({tour.reviewCount} {c.tour.reviews})</span></>
          )}
        </div>
        <div className="tour-card-meta">
          <span className="tour-card-pickup"><Navigation /><b>{c.tour.departure}:</b> {pickupCities}</span>
          <span><Clock3 />{tour.departure} · {tour.duration}</span>
          <span><UsersRound />{groupRange}</span>
        </div>
        <p className="tour-card-price">
          {tour.originalPrice && <del>€{tour.originalPrice}</del>}
          <strong>{c.tour.from} €{tour.price}</strong>
          <span>{c.tour.perPersonCash}</span>
        </p>
        <div className="tour-card-footer">
          <a className="card-call" href={`tel:${PHONE_TEL}`} aria-label={`${c.contact.call}: ${content.title}`}><Phone /><span>{c.actions.call}</span></a>
          <WhatsAppBooking locale={locale} tourTitle={content.title} className="card-book"><MessageCircle />{c.actions.book}</WhatsAppBooking>
        </div>
      </div>
    </article>
  );
}
