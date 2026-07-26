"use client";

import { ArrowDown, ArrowRight, MessageCircle, Pause, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCopy } from "../lib/i18n";
import { localizedPath, type Locale } from "../lib/site";
import { SiteImage } from "./SiteImage";
import { WhatsAppBooking } from "./WhatsAppBooking";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const c = getCopy(locale);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wideScreen = window.matchMedia("(min-width: 900px)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const constrainedConnection =
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g";

    if (reducedMotion || !wideScreen || constrainedConnection) return;

    let timeout = 0;
    const schedule = () => {
      timeout = window.setTimeout(() => setShouldLoadVideo(true), 1800);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoadVideo || !video) return;
    video.load();
    void video.play().catch(() => setIsPlaying(false));
  }, [shouldLoadVideo]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      return;
    }
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section className="home-hero">
      <div className="hero-media">
        <SiteImage src="/albania-riviera.webp" priority sizes="100vw" />
        <video
          ref={videoRef}
          className={videoReady ? "is-ready" : ""}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => {
            setVideoReady(true);
            void videoRef.current?.play().catch(() => setIsPlaying(false));
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          {shouldLoadVideo && <source src="/hero-albania.mp4" type="video/mp4" />}
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
      <button
        type="button"
        className="video-control"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pause background film" : "Play background film"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        <span>{isPlaying ? "Pause" : "Play"}</span>
      </button>
      <a className="scroll-cue" href="#journeys"><ArrowDown /><span>Explore</span></a>
    </section>
  );
}
