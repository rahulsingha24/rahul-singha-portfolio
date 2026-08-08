/**
 * projects.ts
 *
 * The Projects section. Cards render in the order below, so keep your
 * strongest work at the top — a recruiter reads the first card properly
 * and skims the rest.
 *
 * To add a project: copy an existing object, change the values, done.
 * No component files need editing.
 *
 * A note on `status`: this is the small monospace marker on each card.
 * It should state what is actually true — "Released", "Deployed",
 * "Learning project". It is the one place the site distinguishes shipped
 * work from practice work, and it only works if it stays honest.
 */

import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "DakKhoj",
    date: "Aug 2026",
    status: "Released",
    summary:
      "An offline-first Android app for a postal office to track physical " +
      "document records, with local storage as the source of truth and " +
      "automatic cloud backup.",
    highlights: [
      "Tracks document records across pending, delivered and archived states, with local SQLite as the primary source of truth.",
      "Offline-first sync layer queues additions, updates and deletions while offline, then reconciles them with Cloud Firestore on reconnection.",
      "Background synchronisation scheduled with Workmanager; Google Sign-In scopes each user's cloud backup independently.",
      "Local and cloud backup/restore recovers full document history after reinstallation.",
    ],
    tech: [
      "Flutter",
      "Dart",
      "SQLite",
      "Firebase Firestore",
      "Firebase Auth",
      "Workmanager",
    ],
    githubUrl: "https://github.com/rahulsingha24/DakKhoj-App",
  },

  {
    name: "Meal Poll App",
    date: "Jul 2026",
    status: "In use — 17-20 members",
    summary:
      "A real-time meal polling app for a mess group, with role-based " +
      "access enforced server-side and push notifications delivered " +
      "through a Cloudflare Worker.",
    highlights: [
      "Secure push notification workflow uses a Cloudflare Worker as a server-side intermediary, keeping Firebase Admin credentials out of the distributed client.",
      "Role-based access control across Admin, Manager and Member roles, enforced through Firestore Security Rules as the primary enforcement layer.",
      "Real-time meal response tracking with Google Sign-In and a member approval workflow.",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Cloudflare Workers",
    ],
    githubUrl: "https://github.com/rahulsingha24/meal-poll-app",
  },

  {
    name: "WBJEE College Predictor",
    date: "Jun 2026",
    status: "USED BY 200+ USERS",
    summary:
      "A web app that helps WBJEE candidates identify likely colleges and " +
      "branches from previous-year cutoff trends. Built with one other " +
      "developer.",
    highlights: [
      "Rank-based college and branch prediction from previous-year cutoff trends, with Google Sign-In.",
      "Filtering by category, quota, round, institute, branch and district, with downloadable prediction reports.",
      "Deployed on Vercel and used by 200+ users.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    githubUrl: "https://github.com/rahulsingha24/wbjee-predictor",
    liveUrl: "https://fe-wbjee-college-predictor.vercel.app/",
  },

  {
    name: "Simple Weather Web",
    date: "Jun 2025",
    status: "Learning project",
    summary:
      "A responsive web app that displays real-time weather for a searched " +
      "city, with error handling for invalid input.",
    highlights: [],
    tech: ["HTML", "CSS", "JavaScript", "WeatherAPI"],
    githubUrl: "https://github.com/rahulsingha24/Simple-weather-app",
  },

  {
    name: "GPT Clone",
    date: "Apr 2025",
    status: "Learning project",
    summary:
      "A browser-based chat interface for interactive conversations with a " +
      "generative AI model through the Gemini API.",
    highlights: [],
    tech: ["TypeScript", "Gemini API", "JavaScript", "CSS"],
    githubUrl: "https://github.com/rahulsingha24/Ai-chat",
  },
];
