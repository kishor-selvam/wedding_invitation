"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Heart, Flower2 } from "lucide-react";
import { EnvelopeFlap } from "./EnvelopeFlap";
import { EnvelopeCard } from "./EnvelopeCard";

interface EnvelopeScreenProps {
  onOpened: () => void;
}

const FLOATING_HEARTS = [
  { left: "12%", top: "18%", delay: 0, size: 14 },
  { left: "85%", top: "14%", delay: 0.6, size: 10 },
  { left: "16%", top: "78%", delay: 1.1, size: 12 },
  { left: "88%", top: "72%", delay: 0.3, size: 16 },
  { left: "50%", top: "8%", delay: 0.9, size: 10 },
];

export function EnvelopeScreen({ onOpened }: EnvelopeScreenProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function handleOpen() {
    if (prefersReducedMotion) {
      onOpened();
      return;
    }
    setIsOpen(true);
  }

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-cream px-6"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {!prefersReducedMotion &&
        FLOATING_HEARTS.map((h, i) => (
          <motion.div
            key={i}
            className="absolute text-maroon/20 pointer-events-none"
            style={{ left: h.left, top: h.top }}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: h.delay }}
          >
            <Heart size={h.size} fill="currentColor" />
          </motion.div>
        ))}

      <p className="font-serif text-maroon text-sm sm:text-base tracking-[0.15em] uppercase mb-10">
        You&apos;re Invited
      </p>

      <div className="relative w-64 h-44 sm:w-80 sm:h-52" style={{ perspective: 1000 }}>
        {/* Decorative floral spray */}
        <div className="absolute -left-7 -top-9 sm:-left-11 sm:-top-11 z-20 pointer-events-none">
          <Flower2
            className="h-11 w-11 sm:h-14 sm:w-14 text-maroon rotate-[-15deg]"
            fill="currentColor"
            strokeWidth={1}
          />
          <Flower2
            className="absolute -left-2 top-7 h-7 w-7 sm:h-9 sm:w-9 text-gold rotate-[12deg]"
            fill="currentColor"
            strokeWidth={1}
          />
          <Flower2
            className="absolute left-6 -top-1 h-6 w-6 sm:h-8 sm:w-8 text-ivory rotate-[28deg]"
            fill="currentColor"
            strokeWidth={1}
          />
        </div>

        {/* Envelope body */}
        <div className="absolute inset-0 rounded-sm bg-maroon border border-gold/30 shadow-xl" />

        {/* Card sliding out from inside */}
        <EnvelopeCard isOpen={isOpen} onRevealed={onOpened} />

        {/* Folding top flap */}
        <EnvelopeFlap isOpen={isOpen} />

        {/* Wax seal / open button */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div key="seal-group" exit={{ opacity: 0 }}>
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-gold/30 blur-md pointer-events-none"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.button
                type="button"
                onClick={handleOpen}
                aria-label="Open invitation"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-maroon-dark shadow-md cursor-pointer"
                initial={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: -45 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <Heart className="h-6 w-6" fill="currentColor" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-10 text-charcoal/70 text-xs sm:text-sm">
        {isOpen ? "Opening your invitation..." : "Tap the seal to open"}
      </p>
    </motion.div>
  );
}
