import Image from "next/image";

interface SiteImageProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function SiteImage({
  src,
  alt = "",
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: SiteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={78}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      className={`site-image-fill ${className}`.trim()}
    />
  );
}
