const defaultKey = "a7f39c2d8e614b0f97c51a3e642d9b18";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.argv[2];

if (!rawSiteUrl) {
  console.error(
    "Set NEXT_PUBLIC_SITE_URL to the live production domain or pass it as the first argument.",
  );
  process.exit(1);
}

const siteUrl = rawSiteUrl.replace(/\/+$/, "");
const parsedSiteUrl = new URL(siteUrl);

if (parsedSiteUrl.protocol !== "https:") {
  console.error("IndexNow submissions must use the live HTTPS production domain.");
  process.exit(1);
}

const key = process.env.INDEXNOW_KEY || defaultKey;
const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);

if (!sitemapResponse.ok) {
  throw new Error(
    `Could not read ${siteUrl}/sitemap.xml (${sitemapResponse.status}).`,
  );
}

const sitemapXml = await sitemapResponse.text();
const urlList = [
  ...new Set(
    [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
      match[1]
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">"),
    ),
  ),
].filter((url) => new URL(url).host === parsedSiteUrl.host);

if (!urlList.length) {
  throw new Error("The production sitemap did not contain any same-domain URLs.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: parsedSiteUrl.host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

if (!response.ok) {
  const responseText = await response.text();
  throw new Error(
    `IndexNow rejected the submission (${response.status}): ${responseText}`,
  );
}

console.log(
  `IndexNow accepted ${urlList.length} Albanian Tours Hub URLs from ${siteUrl}/sitemap.xml.`,
);
