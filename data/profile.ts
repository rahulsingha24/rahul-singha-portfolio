/**
 * profile.ts
 *
 * Your personal details. Edit this file to change anything that appears
 * in the Hero, About, Contact or Footer sections.
 */

import type { Profile } from "./types";

export const profile: Profile = {
  name: "Rahul Singha",

  // Shown directly under your name. Keep it short.
  title: "Computer Science Student · Android & Web",

  location: "Bankura, West Bengal, India",
  email: "singharahul2005@gmail.com",
  phone: "+91 8649859894",

  // Shown in the About section. Says how you work rather than what you
  // built - the projects below already cover that.
  about:
    "I'd rather build one thing someone uses than five that demo well. " +
    "That's shaped how I work: start from a problem I've watched someone " +
    "actually have, ship something they can install, then fix what breaks " +
    "once it's in their hands.",

  // One line shown in the Contact section. Say what you're actually
  // looking for. Delete this line to hide it.
  contactNote:
    "If you've read this far, the fastest way to reach me is email.",

  githubUrl: "https://github.com/rahulsingha24",
  linkedinUrl: "https://www.linkedin.com/in/rahulsingha-cse/",

 // Your live site address. Update this after your first Vercel deploy.
  siteUrl: "https://rahul-singha-portfolio.vercel.app",

  // Put your PDF at /public/resume.pdf. Delete this line to hide the
  // download button entirely.
  resumePath: "/Rahul_Singha_Resume.pdf",
};