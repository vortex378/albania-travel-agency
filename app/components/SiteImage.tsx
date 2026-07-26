/* eslint-disable @next/next/no-img-element */

interface SiteImageProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function SiteImage({ src, alt = "", className = "", priority = false }: SiteImageProps) {
  // Keep local media on direct URLs so every supported host serves the same file.
  return (
    <img
      src={src}
      alt={alt}
      className={`site-image-fill ${className}`.trim()}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
