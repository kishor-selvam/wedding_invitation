"use client";

import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function computeCountdown(target: Date): CountdownValue {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

export function useCountdown(target: Date): CountdownValue | null {
  const [value, setValue] = useState<CountdownValue | null>(null);

  useEffect(() => {
    setValue(computeCountdown(target));
    const interval = setInterval(() => {
      setValue(computeCountdown(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return value;
}
