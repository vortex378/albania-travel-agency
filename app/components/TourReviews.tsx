"use client";

import { CheckCircle2, Quote, Send, ShieldCheck, Star } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Locale } from "../lib/site";

type VerifiedTourReview = {
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  comment: string;
};

type CommunityReview = {
  id: string;
  name: string;
  countryCode: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type ReviewCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  verified: string;
  empty: string;
  formTitle: string;
  formIntro: string;
  firstName: string;
  lastName: string;
  country: string;
  rating: string;
  comment: string;
  commentHint: string;
  submit: string;
  submitting: string;
  success: string;
  moderation: string;
  selectCountry: string;
};

const copy: Record<Locale, ReviewCopy> = {
  en: {
    eyebrow: "Guest reviews",
    title: "Real days. Honest words.",
    intro: "Reviews shared directly by travellers after their Albanian Tours Hub experience.",
    verified: "Approved review",
    empty: "This is a new experience. Be the first traveller to share it.",
    formTitle: "Share your experience",
    formIntro: "No account is needed. Tell future travellers what the day genuinely felt like.",
    firstName: "First name",
    lastName: "Last name",
    country: "Country",
    rating: "Your rating",
    comment: "Your review",
    commentHint: "What stood out? How was the guide, pace, route or pickup?",
    submit: "Submit review",
    submitting: "Submitting…",
    success: "Thank you. Your review was received and will appear after a quick authenticity check.",
    moderation: "Reviews are checked before publication to protect guests and prevent spam.",
    selectCountry: "Select country",
  },
  sq: {
    eyebrow: "Vlerësimet e udhëtarëve",
    title: "Ditë reale. Fjalë të sinqerta.",
    intro: "Vlerësime të dërguara direkt nga udhëtarët pas përvojës së tyre me Albanian Tours Hub.",
    verified: "Vlerësim i miratuar",
    empty: "Ky është një aktivitet i ri. Bëhu udhëtari i parë që ndan përvojën.",
    formTitle: "Ndaj përvojën tënde",
    formIntro: "Nuk nevojitet llogari. Tregoju udhëtarëve të ardhshëm si ishte dita në të vërtetë.",
    firstName: "Emri",
    lastName: "Mbiemri",
    country: "Shteti",
    rating: "Vlerësimi yt",
    comment: "Komenti yt",
    commentHint: "Çfarë të pëlqeu? Si ishte guida, ritmi, rruga ose marrja?",
    submit: "Dërgo vlerësimin",
    submitting: "Duke dërguar…",
    success: "Faleminderit. Vlerësimi u mor dhe do të shfaqet pas një kontrolli të shkurtër.",
    moderation: "Vlerësimet kontrollohen para publikimit për të parandaluar abuzimin.",
    selectCountry: "Zgjidh shtetin",
  },
  de: {
    eyebrow: "Gästebewertungen",
    title: "Echte Tage. Ehrliche Worte.",
    intro: "Bewertungen, die Reisende nach ihrer Erfahrung mit Albanian Tours Hub direkt geteilt haben.",
    verified: "Freigegebene Bewertung",
    empty: "Dies ist ein neues Erlebnis. Teilen Sie als erster Gast Ihre Erfahrung.",
    formTitle: "Erfahrung teilen",
    formIntro: "Kein Konto erforderlich. Erzählen Sie zukünftigen Gästen, wie sich der Tag wirklich angefühlt hat.",
    firstName: "Vorname",
    lastName: "Nachname",
    country: "Land",
    rating: "Ihre Bewertung",
    comment: "Ihre Rezension",
    commentHint: "Was war besonders? Wie waren Guide, Tempo, Route oder Abholung?",
    submit: "Bewertung senden",
    submitting: "Wird gesendet…",
    success: "Vielen Dank. Ihre Bewertung wird nach einer kurzen Echtheitsprüfung veröffentlicht.",
    moderation: "Bewertungen werden vor der Veröffentlichung geprüft, um Spam zu verhindern.",
    selectCountry: "Land auswählen",
  },
  fr: {
    eyebrow: "Avis des voyageurs",
    title: "De vraies journées. Des mots sincères.",
    intro: "Avis partagés directement par les voyageurs après leur expérience avec Albanian Tours Hub.",
    verified: "Avis approuvé",
    empty: "Cette expérience est nouvelle. Soyez le premier voyageur à la raconter.",
    formTitle: "Partagez votre expérience",
    formIntro: "Aucun compte requis. Dites aux futurs voyageurs comment s’est réellement passée la journée.",
    firstName: "Prénom",
    lastName: "Nom",
    country: "Pays",
    rating: "Votre note",
    comment: "Votre avis",
    commentHint: "Qu’avez-vous aimé ? Comment étaient le guide, le rythme, l’itinéraire ou la prise en charge ?",
    submit: "Envoyer l’avis",
    submitting: "Envoi…",
    success: "Merci. Votre avis sera publié après une rapide vérification d’authenticité.",
    moderation: "Les avis sont vérifiés avant publication afin d’éviter le spam.",
    selectCountry: "Choisir le pays",
  },
};

const countries = [
  ["AL", "Albania"], ["GB", "United Kingdom"], ["DE", "Germany"], ["FR", "France"],
  ["IT", "Italy"], ["NL", "Netherlands"], ["BE", "Belgium"], ["CH", "Switzerland"],
  ["AT", "Austria"], ["SE", "Sweden"], ["NO", "Norway"], ["DK", "Denmark"],
  ["HU", "Hungary"], ["ES", "Spain"], ["PT", "Portugal"], ["PL", "Poland"],
  ["IE", "Ireland"], ["AU", "Australia"], ["US", "United States"], ["CA", "Canada"],
  ["PE", "Peru"],
] as const;

function flag(code: string) {
  return String.fromCodePoint(...code.toUpperCase().split("").map((letter) => 127397 + letter.charCodeAt(0)));
}

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <span className="review-stars" aria-label={`${value} ${label}`}>
      {[1, 2, 3, 4, 5].map((star) => <Star key={star} className={star <= value ? "active" : ""} aria-hidden="true" />)}
    </span>
  );
}

export function TourReviews({
  tourSlug,
  locale,
  rating,
  reviewCount,
  verifiedReviews,
}: {
  tourSlug: string;
  locale: Locale;
  rating: number | null;
  reviewCount: number;
  verifiedReviews: VerifiedTourReview[];
}) {
  const c = copy[locale];
  const [community, setCommunity] = useState<CommunityReview[]>([]);
  const [communitySummary, setCommunitySummary] = useState<{ count: number; rating: number | null }>({ count: 0, rating: null });
  const [selectedRating, setSelectedRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/reviews?tour=${encodeURIComponent(tourSlug)}`, { signal: controller.signal })
      .then(async (response) => response.ok ? await response.json() as { reviews?: CommunityReview[]; summary?: { count: number; rating: number | null } } : { reviews: [] })
      .then((data) => {
        setCommunity(data.reviews || []);
        if (data.summary) setCommunitySummary(data.summary);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [tourSlug]);

  const allReviews = useMemo(() => [
    ...verifiedReviews.map((review, index) => ({ ...review, id: `verified-${index}`, verified: true })),
    ...community.map((review) => ({ ...review, country: countries.find(([code]) => code === review.countryCode)?.[1] || review.countryCode, verified: false })),
  ], [community, verifiedReviews]);
  const displayRating = communitySummary.rating ?? rating;
  const displayCount = communitySummary.count || reviewCount;

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tourSlug,
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          countryCode: data.get("countryCode"),
          comment: data.get("comment"),
          website: data.get("website"),
          rating: selectedRating,
        }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to submit review.");
      form.reset();
      setSelectedRating(5);
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Unable to submit review.");
      setStatus("error");
    }
  }

  return (
    <section className="tour-reviews-section">
      <div className="reviews-heading">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p>{c.intro}</p>
        </div>
        {displayRating !== null && displayCount > 0 && (
          <div className="review-score">
            <strong>{displayRating.toFixed(1)}</strong>
            <div><Stars value={Math.round(displayRating)} label={c.rating} /><span>{displayCount} reviews</span></div>
          </div>
        )}
      </div>

      {allReviews.length > 0 ? (
        <div className="review-grid">
          {allReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <Quote aria-hidden="true" />
              <Stars value={review.rating} label={c.rating} />
              <p>{review.comment}</p>
              <footer>
                <span className="review-flag" aria-hidden="true">{flag(review.countryCode)}</span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.country}</span>
                </div>
                {review.verified && <small><ShieldCheck />{c.verified}</small>}
              </footer>
            </article>
          ))}
        </div>
      ) : (
        <div className="reviews-empty"><Star /><p>{c.empty}</p></div>
      )}

      <div className="review-form-shell">
        <div className="review-form-intro">
          <p className="eyebrow">{c.formTitle}</p>
          <h3>{c.formIntro}</h3>
          <span><ShieldCheck />{c.moderation}</span>
        </div>
        {status === "success" ? (
          <div className="review-success"><CheckCircle2 /><p>{c.success}</p></div>
        ) : (
          <form className="review-form" onSubmit={submitReview}>
            <label><span>{c.firstName}</span><input name="firstName" required minLength={2} maxLength={40} autoComplete="given-name" /></label>
            <label><span>{c.lastName}</span><input name="lastName" required minLength={2} maxLength={40} autoComplete="family-name" /></label>
            <label className="review-country"><span>{c.country}</span><select name="countryCode" required defaultValue=""><option value="" disabled>{c.selectCountry}</option>{countries.map(([code, name]) => <option value={code} key={code}>{flag(code)} {name}</option>)}</select></label>
            <fieldset className="review-rating-picker">
              <legend>{c.rating}</legend>
              <div>{[1, 2, 3, 4, 5].map((value) => <button type="button" key={value} onClick={() => setSelectedRating(value)} aria-label={`${value} ${c.rating}`} aria-pressed={selectedRating === value}><Star className={value <= selectedRating ? "active" : ""} /></button>)}</div>
            </fieldset>
            <label className="review-comment"><span>{c.comment}</span><textarea name="comment" required minLength={20} maxLength={900} rows={5} placeholder={c.commentHint} /></label>
            <label className="review-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            {status === "error" && <p className="review-error" role="alert">{error}</p>}
            <button className="button button-coral review-submit" disabled={status === "submitting"}><Send />{status === "submitting" ? c.submitting : c.submit}</button>
          </form>
        )}
      </div>
    </section>
  );
}
