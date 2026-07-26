import { AmbientVideo } from "./AmbientVideo";
import { SiteImage } from "./SiteImage";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  video?: string;
  playLabel?: string;
  pauseLabel?: string;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, intro, image, video, playLabel, pauseLabel, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      {video ? (
        <AmbientVideo
          src={video}
          poster={image}
          priority
          showControl
          playLabel={playLabel}
          pauseLabel={pauseLabel}
          className="page-hero-video"
        />
      ) : (
        <SiteImage src={image} priority />
      )}
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        <p className="hero-eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
