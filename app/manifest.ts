import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Albanian Tours Hub",
    short_name: "Albanian Tours Hub",
    description: "Book guided Albania tours, private day trips and small-group tour packages.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#20352a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
