"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AmbientVideoProps {
  src: string;
  poster: string;
  className?: string;
  priority?: boolean;
  showControl?: boolean;
  playLabel?: string;
  pauseLabel?: string;
}

export function AmbientVideo({
  src,
  poster,
  className = "",
  priority = false,
  showControl = false,
  playLabel = "Play video",
  pauseLabel = "Pause video",
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || pausedByUser) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.32 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [pausedByUser, src]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setPausedByUser(false);
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setPausedByUser(true);
      setIsPlaying(false);
    }
  }

  return (
    <div className={`ambient-video ${className}`}>
      <video ref={videoRef} muted loop playsInline preload={priority ? "metadata" : "none"} poster={poster} aria-hidden="true">
        <source src={src} type="video/mp4" />
      </video>
      {showControl && (
        <button type="button" className="ambient-video-control" onClick={togglePlayback} aria-label={isPlaying ? pauseLabel : playLabel}>
          {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          <span>{isPlaying ? pauseLabel : playLabel}</span>
        </button>
      )}
    </div>
  );
}
