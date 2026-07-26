"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { getCopy } from "../lib/i18n";
import type { Locale } from "../lib/site";

interface MotionGalleryProps {
  locale: Locale;
}

const clips = ["/travel-friends.mp4", "/travel-driving.mp4", "/travel-city.mp4"];

export function MotionGallery({ locale }: MotionGalleryProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const c = getCopy(locale);

  function toggle() {
    const next = !paused;
    setPaused(next);
    shellRef.current?.querySelectorAll("video").forEach((video) => {
      if (next) video.pause();
      else void video.play();
    });
  }

  return (
    <section className="motion-section">
      <div className="section-heading light">
        <div><p className="eyebrow">{c.home.motionEyebrow}</p><h2>{c.home.motionTitle}</h2></div>
        <button type="button" className="motion-toggle" aria-pressed={paused} onClick={toggle}>{paused ? <Play /> : <Pause />}<span>{paused ? "Play" : "Pause"}</span></button>
      </div>
      <div className="motion-grid" ref={shellRef}>
        {clips.map((clip, index) => (
          <article className="motion-card" key={clip}>
            <video autoPlay muted loop playsInline preload="metadata"><source src={clip} type="video/mp4" /></video>
            <div className="motion-card-shade" />
            <div><span>0{index + 1}</span><h3>{c.home.motionCards[index][0]}</h3><p>{c.home.motionCards[index][1]}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
