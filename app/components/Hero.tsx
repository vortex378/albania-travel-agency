"use client";

import { ArrowDown, ArrowRight, MessageCircle, Pause, Play } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { getCopy } from "../lib/i18n";
import { localizedPath, type Locale } from "../lib/site";
import { WhatsAppBooking } from "./WhatsAppBooking";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const c = getCopy(locale);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  }

  return (
    <section className="home-hero">
      <div className="hero-media">
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/albania-riviera.png">
          <source src="/hero-albania.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <p className="hero-eyebrow"><span />{c.home.eyebrow}</p>
        <h1>{c.home.heroLead}</h1>
        <p className="hero-intro">{c.home.intro}</p>
        <div className="hero-actions">
          <Link className="button button-coral" href={localizedPath(locale, "/tours")}>{c.actions.explore}<ArrowRight /></Link>
          <WhatsAppBooking locale={locale} className="button button-glass"><MessageCircle />{c.actions.plan}</WhatsAppBooking>
        </div>
      </div>
      <div className="hero-proof">
        {c.home.proof.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}
      </div>
      <button type="button" className="video-control" onClick={toggleVideo} aria-pressed={paused}>
        {paused ? <Play /> : <Pause />}<span>{paused ? "Play" : "Pause"}</span>
      </button>
      <a className="scroll-cue" href="#journeys"><ArrowDown /><span>Explore</span></a>
    </section>
  );
}
