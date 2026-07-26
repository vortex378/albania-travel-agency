"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface FaqAccordionProps {
  items: readonly (readonly [string, string])[];
  limit?: number;
}

export function FaqAccordion({ items, limit }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const visible = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="faq-list">
      {visible.map(([question, answer], index) => (
        <article className={open === index ? "faq-item open" : "faq-item"} key={question}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
            <span><i>{String(index + 1).padStart(2, "0")}</i>{question}</span>
            <Plus aria-hidden="true" />
          </button>
          <div className="faq-answer"><p>{answer}</p></div>
        </article>
      ))}
    </div>
  );
}
