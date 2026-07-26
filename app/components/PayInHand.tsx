import { Banknote } from "lucide-react";
import type { Locale } from "../lib/site";

const notice: Record<Locale, string> = {
  en: "Pay your guide on the day of the tour. No cards or online payment.",
  sq: "Paguani guidën ditën e turit. Nuk pranohen karta ose pagesa online.",
  de: "Bezahlen Sie Ihren Guide am Tourtag. Keine Karten- oder Online-Zahlung.",
  fr: "Payez votre guide le jour du circuit. Aucune carte ni paiement en ligne.",
};

const label: Record<Locale, string> = {
  en: "Cash only",
  sq: "Vetëm para në dorë",
  de: "Nur Barzahlung",
  fr: "Espèces uniquement",
};

export function PayInHand({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <div className={`pay-in-hand${compact ? " pay-in-hand--compact" : ""}`}>
      <Banknote aria-hidden="true" />
      <span><strong>{label[locale]}</strong>{notice[locale]}</span>
    </div>
  );
}
