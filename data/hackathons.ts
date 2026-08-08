/**
 * hackathons.ts
 *
 * The Hackathons section. Ordered by strength rather than date, same as
 * the resume — the stronger entry should be read first.
 */

import type { Hackathon } from "./types";

export const hackathons: Hackathon[] = [
  {
    name: "ResQNet",
    event: "ZYRO Hardware Hackathon",
    organiser: "Kalyani Government Engineering College",
    date: "May 2026",
    summary:
      "The software layer of an accident-response prototype: an ESP32 " +
      "sensor unit connected to hospital and police web portals through " +
      "Firebase Realtime Database, with GPS-based incident location on " +
      "Leaflet.js maps, plus separate dispatch workflows for each operator " +
      "type and a native Android companion app.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "JavaScript",
      "Firebase Realtime Database",
      "Leaflet.js",
      "ESP32",
    ],
    githubUrl: "https://github.com/rahulsingha24/ResQNet-ZYRO",
  },

  {
    name: "PhaseSync",
    event: "Smart India Hackathon 2025 (SIH25064, KSEBL)",
    organiser: "College Internal Round",
    date: "Sep 2025",
    summary:
      "A Flutter dashboard prototype for monitoring simulated solar, grid " +
      "and battery data with historical trend analytics, built for a " +
      "Kerala State Electricity Board problem statement.",
    tech: ["Flutter", "Dart", "Provider", "FL Chart"],
    githubUrl: "https://github.com/rahulsingha24/PhaseSync-SIH25064-Prototype",
  },
];
