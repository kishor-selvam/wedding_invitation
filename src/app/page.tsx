"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { EnvelopeScreen } from "@/components/envelope/EnvelopeScreen";
import { InvitationPage } from "@/components/invitation/InvitationPage";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isOpened ? (
        <EnvelopeScreen key="envelope" onOpened={() => setIsOpened(true)} />
      ) : (
        <InvitationPage key="invitation" />
      )}
    </AnimatePresence>
  );
}
