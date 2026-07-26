"use client";

import { CalendarDays, Check, ContactRound, Mail, MapPin, MessageCircle, MessageSquare, Minus, Phone, Plus, UsersRound, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { getCopy } from "../lib/i18n";
import { type Locale, whatsappUrl } from "../lib/site";
import { PayInHand } from "./PayInHand";

interface WhatsAppBookingProps {
  locale: Locale;
  tourTitle?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function WhatsAppBooking({ locale, tourTitle, className = "", ariaLabel, children }: WhatsAppBookingProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [pickup, setPickup] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const c = getCopy(locale);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.classList.add("drawer-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`booking-trigger ${className}`}
        aria-label={ariaLabel}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && (
        <div className="booking-backdrop" onMouseDown={() => setOpen(false)}>
          <aside className="booking-drawer" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="drawer-close" onClick={() => setOpen(false)} aria-label="Close"><X /></button>
            <p className="eyebrow">{c.booking.eyebrow}</p>
            <h2 id="booking-title">{c.booking.title}</h2>
            <p className="drawer-intro">{c.booking.intro}</p>

            {tourTitle && <div className="selected-tour"><span>{c.nav.tours}</span><strong>{tourTitle}</strong></div>}

            <form
              className="booking-request-form"
              onSubmit={(event) => {
                event.preventDefault();
                const url = whatsappUrl({ locale, tour: tourTitle, name, email, phone, date, travellers, pickup, message });
                window.open(url, "_blank", "noopener,noreferrer");
                setSubmitted(true);
              }}
            >
              <div className="booking-fields">
                <label>
                  <span><ContactRound /> {c.booking.name}</span>
                  <input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                  <span><Mail /> {c.booking.email}</span>
                  <input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <label>
                  <span><Phone /> {c.booking.phone}</span>
                  <input required type="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </label>
                <label>
                  <span><CalendarDays /> {c.booking.date}</span>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="DD / MM / YYYY"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </label>
                <div className="traveller-picker">
                  <span><UsersRound /> {c.booking.travellers}</span>
                  <div>
                    <button type="button" aria-label="Remove traveller" onClick={() => setTravellers((value) => Math.max(2, value - 1))}><Minus /></button>
                    <strong>{travellers}</strong>
                    <button type="button" aria-label="Add traveller" onClick={() => setTravellers((value) => Math.min(8, value + 1))}><Plus /></button>
                  </div>
                </div>
                <label>
                  <span><MapPin /> {c.booking.pickup}</span>
                  <input required value={pickup} placeholder={c.booking.pickupHint} onChange={(event) => setPickup(event.target.value)} />
                </label>
                <label className="booking-message">
                  <span><MessageSquare /> {c.booking.message}</span>
                  <textarea value={message} placeholder={c.booking.messageHint} onChange={(event) => setMessage(event.target.value)} />
                </label>
              </div>

              <PayInHand locale={locale} />
              <button className="drawer-whatsapp" type="submit">
                <MessageCircle /> {c.booking.send}
              </button>
              <p className="drawer-note"><Check /> {c.booking.note}</p>

              {submitted && (
                <div className="booking-confirmation" role="status">
                  <strong>{c.booking.confirmationTitle}</strong>
                  <p>{c.booking.confirmationText}</p>
                  <PayInHand locale={locale} compact />
                </div>
              )}
            </form>
          </aside>
        </div>
      )}
    </>
  );
}
