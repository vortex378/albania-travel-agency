"use client";

import { ArrowRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { getCopy } from "../lib/i18n";
import { localizedPath, PHONE_TEL, type Locale } from "../lib/site";
import { tours, tourContent } from "../lib/tours";
import { PayInHand } from "./PayInHand";
import { SiteImage } from "./SiteImage";
import { WhatsAppBooking } from "./WhatsAppBooking";

const TIRANA: [number, number] = [19.8187, 41.3275];

interface JourneyMapProps {
  locale: Locale;
}

export function JourneyMap({ locale }: JourneyMapProps) {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("maplibre-gl").Map | null>(null);
  const markerRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [activeSlug, setActiveSlug] = useState(tours[0].slug);
  const c = getCopy(locale);
  const active = tours.find((tour) => tour.slug === activeSlug) || tours[0];
  const content = tourContent(active, locale);
  const mapTours = useMemo(() => tours.map((tour) => ({ tour, content: tourContent(tour, locale) })), [locale]);

  useEffect(() => {
    if (!container.current || mapRef.current) return;
    let cancelled = false;
    const markers = markerRefs.current;
    const mapContainer = container.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      void import("maplibre-gl").then((maplibregl) => {
        if (cancelled || !container.current) return;
        const map = new maplibregl.Map({
          container: container.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center: [19.95, 41.15],
        zoom: 6.2,
        attributionControl: false,
        cooperativeGestures: true,
      });
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
      map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");

      map.on("load", () => {
        map.addSource("albania-travel-routes", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: tours.map((tour) => ({
              type: "Feature",
              properties: { slug: tour.slug },
              geometry: { type: "LineString", coordinates: [TIRANA, tour.coordinates] },
            })),
          },
        });
        map.addLayer({
          id: "albania-travel-route-lines",
          type: "line",
          source: "albania-travel-routes",
          paint: { "line-color": "#e76c53", "line-width": 2.2, "line-opacity": 0.72, "line-dasharray": [1.2, 1.4] },
        });
      });

      const tirana = document.createElement("span");
      tirana.className = "map-marker tirana";
      tirana.textContent = "T";
      new maplibregl.Marker({ element: tirana }).setLngLat(TIRANA).addTo(map);

      mapTours.forEach(({ tour, content: itemContent }, index) => {
        const marker = document.createElement("button");
        marker.type = "button";
        marker.className = `map-marker ${index === 0 ? "active" : ""}`;
        marker.textContent = String(index + 1);
        marker.setAttribute("aria-label", itemContent.title);
        marker.addEventListener("click", () => {
          markers.forEach((item) => item.classList.remove("active"));
          marker.classList.add("active");
          setActiveSlug(tour.slug);
          map.flyTo({ center: tour.coordinates, zoom: 8, duration: 1000 });
        });
        markers.set(tour.slug, marker);
        new maplibregl.Marker({ element: marker }).setLngLat(tour.coordinates).addTo(map);
      });
        mapRef.current = map;
      });
    }, { rootMargin: "240px 0px", threshold: 0.01 });

    observer.observe(mapContainer);

    return () => {
      cancelled = true;
      observer.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
      markers.clear();
    };
  }, [mapTours]);

  return (
    <div className="map-shell">
      <div className="map-canvas" ref={container} role="region" aria-label={c.home.mapTitle} />
      <article className="map-card">
        <div className="map-card-image"><SiteImage src={active.image} /></div>
        <div className="map-card-copy">
          <p><MapPin />{content.region}</p>
          <h3>{content.title}</h3>
          <span><Clock3 />{active.departure} · {active.duration}</span>
          <div>
            <strong>{c.tour.from} €{active.price}</strong>
            <Link href={localizedPath(locale, `/tours/${active.slug}`)}>{c.actions.details}<ArrowRight /></Link>
          </div>
          <PayInHand locale={locale} compact />
          <div className="map-contact-actions">
            <a href={`tel:${PHONE_TEL}`}><Phone />{c.contact.call}</a>
            <WhatsAppBooking locale={locale} tourTitle={content.title}><MessageCircle />WhatsApp</WhatsAppBooking>
          </div>
        </div>
      </article>
    </div>
  );
}
