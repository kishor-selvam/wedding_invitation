import { CalendarPlus } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icsDataUri } from "@/lib/calendar";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function CalendarSection() {
  const { year, month, highlightDays } = weddingConfig.calendar;
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const icsHref = icsDataUri(
    weddingConfig.events.map((event) => ({
      title: `${event.label} — ${weddingConfig.person1.name} & ${weddingConfig.person2.name}`,
      start: event.date,
      end: event.endDate,
      location: `${event.venueName}, ${event.address}`,
    }))
  );

  return (
    <section className="px-6 py-14 bg-blush-light/40">
      <SectionHeading eyebrow="Mark Your Calendar" title={monthLabel} />

      <div className="mx-auto max-w-xs">
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase text-charcoal/50 mb-2">
          {WEEKDAY_LABELS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, index) => (
            <div
              key={index}
              className={`flex h-9 items-center justify-center rounded-full text-sm ${
                day && highlightDays.includes(day)
                  ? "bg-gold-dark font-semibold text-ivory"
                  : day
                  ? "text-charcoal/80"
                  : ""
              }`}
            >
              {day ?? ""}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={icsHref}
          download="kaviyarasu-shiyamala-wedding.ics"
          className="inline-flex items-center gap-2 rounded-full bg-gold-dark px-6 py-3 text-sm font-medium text-ivory shadow-sm transition hover:bg-gold"
        >
          <CalendarPlus className="h-4 w-4" />
          Add to Calendar
        </a>
      </div>
    </section>
  );
}
