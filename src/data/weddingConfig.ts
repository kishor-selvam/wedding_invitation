// ─────────────────────────────────────────────────────────────────────────
// WEDDING CONFIG — edit everything here to personalize the invitation.
// ─────────────────────────────────────────────────────────────────────────

export const weddingConfig = {
  person1: { name: "Kaviyarasu" },
  person2: { name: "Shiyamala" },

  tagline:
    "cordially invite you to join the occasion of their joyous commitment",

  heroImage: {
    src: "/Shiyam_Kavi.png",
    alt: "Kaviyarasu and Shiyamala",
  },

  // Each celebration event. The Countdown targets the first event below.
  events: [
    {
      id: "reception",
      label: "Reception",
      date: new Date("2026-11-10T19:00:00+05:30"),
      endDate: new Date("2026-11-10T22:00:00+05:30"),
      venueName: "Angalamman Kovil New Wedding Hall",
      address: "Kumaramangalam Road, Chittalandur",
    },
    {
      id: "muhurtham",
      label: "Muhurtham",
      date: new Date("2026-11-11T04:00:00+05:30"),
      endDate: new Date("2026-11-11T06:00:00+05:30"),
      venueName:
        "Arulmigu Sivagami Ambigai Sametha Seerkazhinathar Thirukkovil",
      address: "Chittalandur",
    },
  ],

  calendar: {
    year: 2026,
    month: 10, // November (0-indexed)
    highlightDays: [10, 11],
  },

  venue: {
    name: "Angalamman Kovil New Wedding Hall",
    address: "Kumaramangalam Road, Chittalandur",
    // Generic embeddable map built from the address (no API key needed).
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Angalamman+Kovil+New+Wedding+Hall+Kumaramangalam+Road+Chittalandur&output=embed",
    // Real shared Google Maps link — used for "Get Directions" and the QR code.
    mapsDirectionsUrl: "https://maps.app.goo.gl/bCAkke4iNu9pmHw48",
  },

  footerMessage:
    "Your presence and blessings will make our special day even more memorable.",
  footerSignature: "With love, Kaviyarasu & Shiyamala",
};

export type WeddingConfig = typeof weddingConfig;
