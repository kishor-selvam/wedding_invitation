"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { weddingConfig } from "@/data/weddingConfig";

const cardVariants: Variants = {
  hidden: { y: 10, opacity: 0, scale: 0.9, rotate: -10 },
  visible: {
    y: -160,
    opacity: 1,
    scale: 1,
    rotate: -6,
    transition: { type: "spring", stiffness: 160, damping: 17, delay: 0.45 },
  },
};

interface EnvelopeCardProps {
  isOpen: boolean;
  onRevealed?: () => void;
}

export function EnvelopeCard({ isOpen, onRevealed }: EnvelopeCardProps) {
  const { heroImage } = weddingConfig;

  return (
    <motion.div
      className="absolute left-1/2 bottom-10 -translate-x-1/2 w-36 sm:w-44 rounded-[2px] bg-white p-1.5 shadow-2xl z-10"
      variants={cardVariants}
      animate={isOpen ? "visible" : "hidden"}
      initial="hidden"
      onAnimationComplete={(definition) => {
        if (definition === "visible") onRevealed?.();
      }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
