/**
 * skills.ts
 *
 * The Technical Skills section. Categories render in the order below.
 *
 * Rule of thumb: only list something you could discuss in an interview.
 * A short honest list beats a long one.
 */

import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Dart", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter"],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Firebase Realtime Database",
      "Cloudflare Workers",
    ],
  },
  {
    category: "Databases",
    items: ["SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];
