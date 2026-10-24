interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10">
      {eyebrow && (
        <p className="text-gold uppercase tracking-[0.2em] text-xs sm:text-sm font-medium mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gold/60" />
    </div>
  );
}
