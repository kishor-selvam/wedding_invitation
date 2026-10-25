import Image from "next/image";
import { weddingConfig } from "@/data/weddingConfig";

export function Hero() {
  const { person1, person2, tagline, heroImage } = weddingConfig;

  return (
    <section className="flex flex-col items-center text-center px-6 pt-20 pb-12 sm:pt-28">
      <p className="text-gold-dark uppercase tracking-[0.25em] text-xs sm:text-sm mb-6">
        Save the Date
      </p>

      <div className="relative h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-full border-4 border-gold/40 shadow-md mb-8">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          sizes="176px"
          className="object-cover object-[50%_18%]"
          priority
        />
      </div>

      <h1 className="font-serif text-4xl sm:text-6xl text-charcoal leading-tight">
        {person1.name} <span className="text-gold">&amp;</span> {person2.name}
      </h1>

      <div className="mx-auto mt-6 h-px w-20 bg-gold/60" />
      <p className="mt-6 max-w-md text-charcoal/80 text-sm sm:text-base leading-relaxed">
        {tagline}
      </p>
    </section>
  );
}
