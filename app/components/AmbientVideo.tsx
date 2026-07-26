"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteImage } from "./SiteImage";

interface AmbientVideoProps {
  src: string;
  poster: string;
  className?: string;
  priority?: boolean;
  showControl?: boolean;
  playLabel?: string;
  pauseLabel?: string;
  sizes?: string;
  forcePaused?: boolean;
}

export function AmbientVideo({
  src,
  poster,
  className = "",
  priority = false,
  showControl = false,
  playLabel = "Play video",
  pauseLabel = "Pause video",
  sizes = "100vw",
  forcePaused = false,
}: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const constrainedConnection =
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g";
    const allowAmbientPlayback =
      window.matchMedia("(min-width: 900px)").matches &&
      !reducedMotion &&
      !constrainedConnection;

    if (!allowAmbientPlayback || pausedByUser || forcePaused) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video.parentElement ?? video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [forcePaused, pausedByUser, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video || pausedByUser || forcePaused) return;
    video.load();
    void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [forcePaused, pausedByUser, shouldLoad]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!shouldLoad) {
      setPausedByUser(false);
      setShouldLoad(true);
      return;
    }
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
      <SiteImage src={poster} priority={priority} sizes={sizes} />
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
          if (!pausedByUser && !forcePaused) {
            void videoRef.current?.play().catch(() => setIsPlaying(false));
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
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
