"use client";

import { motion, type Variants } from "framer-motion";

const flapVariants: Variants = {
  closed: { rotateX: 0 },
  open: {
    rotateX: -180,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.15 },
  },
};

interface EnvelopeFlapProps {
  isOpen: boolean;
}

export function EnvelopeFlap({ isOpen }: EnvelopeFlapProps) {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-1/2 origin-top"
      style={{ transformStyle: "preserve-3d" }}
      variants={flapVariants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-maroon to-maroon-dark"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
      />
    </motion.div>
  );
}
