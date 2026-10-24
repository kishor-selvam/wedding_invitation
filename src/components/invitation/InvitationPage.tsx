import { motion } from "framer-motion";
import { weddingConfig } from "@/data/weddingConfig";
import { Hero } from "./Hero";
import { Countdown } from "./Countdown";
import { Events } from "./Events";
import { CalendarSection } from "./CalendarSection";
import { MapSection } from "./MapSection";

export function InvitationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen"
    >
      <Hero />
      <Countdown />
      <Events />
      <CalendarSection />
      <MapSection />
      <footer className="px-6 py-10 text-center text-xs text-charcoal/60 space-y-1">
        <p>{weddingConfig.footerMessage}</p>
        <p>{weddingConfig.footerSignature}</p>
      </footer>
    </motion.div>
  );
}
