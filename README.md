# Albanian Tours Hub

A premium multilingual booking website for guided Albania tours, private day trips and small-group tour packages.

## What is included

- Four complete static languages: English (`/en`), Albanian (`/sq`), German (`/de`) and French (`/fr`)
- More than 70 localized, indexable pages
- Nine bookable day tours with dedicated detail pages
- Six long-form travel-planning guides
- Location-specific, locally hosted films for the Riviera, Berat, the Albanian Alps, Blue Eye, Krujë, Përmet, Durrës, Lezhë, Shkodër and Valbona
- WhatsApp booking to `+355 69 780 7864`
- Clear EUR “from” prices, always described as payable in cash on the day
- Cash payment only; the site never asks for a card or takes an online payment
- Responsive navigation, booking drawer, multilingual metadata and structured data
- Search and discovery files: `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/llms.txt` and an IndexNow verification key

## Main search sections

The primary pages are deliberately real pages, not subdomains:

- `/en/tours` — daily small-group tours
- `/en/travel-guide` — planning guide hub
- `/en/booking` — how booking and payment work
- `/en/about` — company story
- `/en/faq` — traveller questions

Each has an equivalent `/sq`, `/de` and `/fr` URL, a canonical URL and reciprocal `hreflang` alternates. Google chooses sitelinks automatically; this information architecture gives it clear candidates without creating duplicate subdomains.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root route selects a supported browser language and falls back to English.

## Verify the production build

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Import the repository and keep the framework preset as **Next.js**.
2. Purchase or attach one memorable primary domain.
3. Set `NEXT_PUBLIC_SITE_URL` to `https://albaniantours-hub.com` before the production deployment.
4. Deploy and redirect every alternate domain to the primary domain.
5. Add the domain to Google Search Console and Bing Webmaster Tools.
6. Put the supplied verification values in:
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION`
   - Optional regional engines: `NEXT_PUBLIC_YANDEX_SITE_VERIFICATION`, `NEXT_PUBLIC_BAIDU_SITE_VERIFICATION` and `NEXT_PUBLIC_NAVER_SITE_VERIFICATION`
7. Submit `https://albaniantours-hub.com/sitemap.xml` in the webmaster tools you use.
8. Request indexing for `/en`, `/en/tours` and `/en/travel-guide`.
9. Notify IndexNow-compatible search engines after the production domain is live:

```bash
NEXT_PUBLIC_SITE_URL=https://albaniantours-hub.com npm run seo:indexnow
```

In Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://albaniantours-hub.com"; npm run seo:indexnow
```

Do not submit a Vercel preview URL for indexing. Keep page titles, navigation labels, canonical URLs and the favicon stable after launch.

## Search and AI visibility

The site provides descriptive page titles, reciprocal language alternates, internal links, localized editorial content, organization and page-level structured data, a complete image/video sitemap, crawlable destination films and an `llms.txt` content index. `robots.txt` permits major search and AI discovery crawlers.

No technical setup can promise the first Google position, expanded sitelinks, or an answer citation from an AI service. Those systems decide results after crawling, measuring relevance and building trust. The next growth layer after launch is a complete Google Business Profile, genuine traveller reviews, current operating details, fresh guide updates and reputable local/travel links.

## Media credits

Destination films are locally optimized copies of clips published as free-to-use media on Pexels. Every detail page links back to its source creator. Keep those credits when replacing or extending the film library.

## Booking policy

Every booking starts with a reservation request containing the traveller’s name, email, phone, date, party size, pickup city and message. It continues through WhatsApp and is confirmed by a person. Payment is cash only, paid directly to the guide on the day. No online payment or card information is collected.
