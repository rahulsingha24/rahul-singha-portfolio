/**
 * types.ts
 *
 * The shape of every piece of content on the site.
 *
 * Why this file exists: when you add a project six months from now,
 * TypeScript will tell you if you forgot a field or misspelled one,
 * instead of the site silently rendering a blank card.
 *
 * Fields marked `?` are optional — leave them out and the site
 * simply won't render that bit.
 */

/** A link to an external site (GitHub, LinkedIn, live demo, certificate). */
export interface Link {
  label: string;
  url: string;
}

/** Your personal details. Used in the Hero, About, Contact and Footer. */
export interface Profile {
  name: string;
  /** Short role line under your name in the Hero. */
  title: string;
  location: string;
  email: string;
  phone: string;
  /** 2-3 sentences for the About section. */
  about: string;
  /** One line above the contact buttons. Omit to hide it. */
  contactNote?: string;
  githubUrl: string;
  linkedinUrl: string;
  /** The site's public URL. Used for SEO and link previews. */
  siteUrl: string;
  /** Path to your resume PDF in /public. Leave out to hide the download button. */
  resumePath?: string;
}

/** One row of the Technical Skills section, e.g. "Languages: C, C++, ...". */
export interface SkillGroup {
  /** Category name, e.g. "Languages". */
  category: string;
  /** The skills in that category. */
  items: string[];
}

/**
 * One project card.
 *
 * `status` is the small monospace marker on each card. Keep it truthful —
 * it's what tells a recruiter which projects are shipped and which are
 * learning work, without you having to explain.
 */
export interface Project {
  name: string;
  /** e.g. "Aug 2026" — shown in the card's top-right corner. */
  date: string;
  /** Short honest state, e.g. "Released", "Deployed — 200+ users". */
  status: string;
  /** 1-2 sentence recruiter-friendly summary. */
  summary: string;
  /** Bullet points. Same claims as the resume. */
  highlights: string[];
  /** Technologies, rendered as chips. */
  tech: string[];
  githubUrl: string;
  /** Optional live site. Omit if there isn't one. */
  liveUrl?: string;
}

/** One hackathon entry. */
export interface Hackathon {
  /** Project name, e.g. "ResQNet". */
  name: string;
  /** The competition itself, e.g. "ZYRO Hardware Hackathon". */
  event: string;
  /** Where it was held or who organised it. */
  organiser: string;
  date: string;
  summary: string;
  tech: string[];
  githubUrl: string;
}

/** One education entry. */
export interface Education {
  institution: string;
  /** Degree or qualification. */
  qualification: string;
  location: string;
  /** e.g. "2024 - 2028". */
  period: string;
  /** e.g. "CGPA: 7.47/10 (through 4th semester)". Optional. */
  result?: string;
  /** Course names. Optional — omit for school entries. */
  coursework?: string[];
}

/** One certification entry. */
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Public link to the certificate. Optional. */
  url?: string;
}