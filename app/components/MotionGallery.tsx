"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { getCopy } from "../lib/i18n";
import type { Locale } from "../lib/site";
import { AmbientVideo } from "./AmbientVideo";

interface MotionGalleryProps {
  locale: Locale;
}

const clips = [
  { video: "/travel-friends.mp4", poster: "/group-road.webp" },
  { video: "/travel-driving.mp4", poster: "/mountain-road.webp" },
  { video: "/travel-city.mp4", poster: "/city-walk.webp" },
];

export function MotionGallery({ locale }: MotionGalleryProps) {
  const [paused, setPaused] = useState(false);
  const c = getCopy(locale);

  function toggle() {
    setPaused((value) => !value);
  }

  return (
    <section className="motion-section">
      <div className="section-heading light">
        <div><p className="eyebrow">{c.home.motionEyebrow}</p><h2>{c.home.motionTitle}</h2></div>
        <button
          type="button"
          className="motion-toggle"
          aria-label={paused ? "Play travel films" : "Pause travel films"}
          aria-pressed={!paused}
          onClick={toggle}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      </div>
      <div className="motion-grid">
        {clips.map((clip, index) => (
          <article className="motion-card" key={clip.video}>
            <AmbientVideo
              src={clip.video}
              poster={clip.poster}
              sizes="(max-width: 760px) 50vw, 33vw"
              forcePaused={paused}
            />
            <div className="motion-card-shade" />
            <div><span>0{index + 1}</span><h3>{c.home.motionCards[index][0]}</h3><p>{c.home.motionCards[index][1]}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
