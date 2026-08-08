/**
 * certifications.ts
 *
 * The Certifications section.
 *
 * If you empty this array, the whole section stops rendering — no
 * placeholder, no empty heading. Same for every other data file.
 *
 * `url` is optional. Before adding one, open it in a private browser
 * window: a link that asks a recruiter to request access is worse than
 * no link at all.
 */

import type { Certification } from "./types";

export const certifications: Certification[] = [
  {
    name: "Internet of Things and AI Cloud Specialization",
    issuer: "UC San Diego (Coursera)",
    date: "Mar 2024",
    url: "https://drive.google.com/file/d/1HKIIew5xsqutZNkHOtuC_V9m4-zfcDJg/view",
  },
  {
    name: "Quantum Computing",
    issuer: "C-DAC Hyderabad & IIT Roorkee",
    date: "May 2025",
    url: "https://drive.google.com/file/d/1wPbqhPsUIOLkFs3b-NTAYJv7sV5UBDgZ/view",
  },
  {
    name: "Geospatial Analysis using Google Earth Engine",
    issuer: "IIRS, ISRO",
    date: "Feb 2024",
    url: "https://drive.google.com/file/d/12VZeWyQY7jcWE8TrzLxA09UiQoMNyGgC/view",
  },
];
