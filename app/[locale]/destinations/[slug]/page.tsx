import { redirect } from "next/navigation";
import { isLocale, localizedPath, type Locale } from "../../../lib/site";

export default async function DestinationDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  redirect(localizedPath(locale, "/tours"));
}
