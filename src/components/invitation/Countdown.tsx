"use client";

import { useCountdown } from "@/lib/useCountdown";
import { weddingConfig } from "@/data/weddingConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export function Countdown() {
  const countdown = useCountdown(weddingConfig.events[0].date);

  return (
    <section className="px-6 py-14 bg-blush-light/40">
      <SectionHeading eyebrow="Almost Time" title="Counting Down" />

      {countdown?.isPast ? (
        <p className="text-center font-serif text-2xl text-charcoal">We&apos;re Married! 💍</p>
      ) : (
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-4">
          {UNITS.map(({ key, label }) => (
            <div
              key={key}
              className="flex flex-col items-center rounded-lg bg-ivory border border-gold/30 py-4 shadow-sm"
            >
              <span className="font-serif text-2xl sm:text-3xl text-gold-dark tabular-nums">
                {countdown ? String(countdown[key]).padStart(2, "0") : "--"}
              </span>
              <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-charcoal/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
