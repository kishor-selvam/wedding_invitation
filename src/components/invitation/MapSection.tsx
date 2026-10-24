import { MapPin } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MapSection() {
  const { venue } = weddingConfig;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(
    venue.mapsDirectionsUrl
  )}`;

  return (
    <section className="px-6 py-14 bg-blush-light/40">
      <SectionHeading eyebrow="Join Us At" title="The Venue" />

      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-xl text-charcoal">{venue.name}</p>
        <p className="mt-1 text-sm text-charcoal/70">{venue.address}</p>

        <div className="mt-6 overflow-hidden rounded-lg border border-gold/30 shadow-sm">
          <iframe
            src={venue.mapsEmbedUrl}
            className="h-64 w-full sm:h-80"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${venue.name}`}
          />
        </div>

        <a
          href={venue.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-dark px-6 py-3 text-sm font-medium text-ivory shadow-sm transition hover:bg-gold"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </a>

        <div className="mt-8 flex flex-col items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrCodeUrl}
            alt="QR code linking to the venue location"
            width={140}
            height={140}
            className="rounded-lg border border-gold/30 bg-ivory p-2 shadow-sm"
          />
          <p className="text-xs text-charcoal/60">Scan for location</p>
        </div>
      </div>
    </section>
  );
}
