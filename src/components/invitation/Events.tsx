import { CalendarDays, Clock, MapPin } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatEventDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatEventTime(start: Date, end: Date): string {
  const opts: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
  return `${start.toLocaleTimeString("en-US", opts)} – ${end.toLocaleTimeString("en-US", opts)}`;
}

export function Events() {
  return (
    <section className="px-6 py-14">
      <SectionHeading eyebrow="Join Us For" title="Celebrations" />
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {weddingConfig.events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl border border-gold/30 bg-ivory px-6 py-8 text-center shadow-sm"
          >
            <p className="font-serif text-xl text-charcoal mb-4">{event.label}</p>
            <div className="space-y-3 text-sm text-charcoal/75">
              <p className="flex items-center justify-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-gold-dark" />
                {formatEventDate(event.date)}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-gold-dark" />
                {formatEventTime(event.date, event.endDate)}
              </p>
              <p className="flex items-start justify-center gap-2 text-left">
                <MapPin className="h-4 w-4 shrink-0 text-gold-dark mt-0.5" />
                <span>
                  {event.venueName}
                  <br />
                  {event.address}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
