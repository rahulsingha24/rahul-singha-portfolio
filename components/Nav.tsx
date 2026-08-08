"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

/**
 * Nav.tsx
 *
 * The sticky bar at the top of the page. Links jump to sections on the
 * same page rather than loading new routes, and the link for whichever
 * section you are currently reading stays highlighted.
 *
 * This is the only component on the site that needs "use client" - the
 * mobile menu has to open and close, and the active link has to track
 * scrolling. Everything else is static HTML.
 *
 * You never edit the link list by hand. A section appears in the nav only
 * if its data file has content, so emptying an array removes both the
 * section and its nav link.
 */

const navItems = [
  { label: "About", href: "#about", show: profile.about.length > 0 },
  { label: "Skills", href: "#skills", show: skills.length > 0 },
  { label: "Projects", href: "#projects", show: projects.length > 0 },
  { label: "Hackathons", href: "#hackathons", show: hackathons.length > 0 },
  { label: "Education", href: "#education", show: education.length > 0 },
  {
    label: "Certifications",
    href: "#certifications",
    show: certifications.length > 0,
  },
  { label: "Contact", href: "#contact", show: true },
].filter((item) => item.show);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  // Which sections are currently crossing the detection band. Kept in a
  // ref rather than state because it changes on every observer callback
  // and only the derived result needs to trigger a render.
  const intersectingIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersectingIds.current.add(entry.target.id);
          } else {
            intersectingIds.current.delete(entry.target.id);
          }
        }

        // When two sections briefly overlap the band, take the lower one
        // in document order - that is the section you are scrolling into,
        // so the highlight moves as soon as it arrives rather than
        // lagging behind.
        let current: string | null = null;
        for (const id of sectionIds) {
          if (intersectingIds.current.has(id)) current = id;
        }

        setActiveHref(current ? `#${current}` : null);
      },
      {
        // A narrow band near the top of the screen, just below the sticky
        // bar. A section counts as active while it crosses this band, so
        // the highlight tracks what you are actually reading rather than
        // whatever happens to be on screen.
        rootMargin: "-88px 0px -70% 0px",
      },
    );

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4"
      >
        {/* Name doubles as the "back to top" link. */}
        <a
          href="#main"
          className="font-display text-base font-semibold text-ink transition-colors hover:text-signal"
        >
          {profile.name}
        </a>

        {/* Desktop links. Hidden below 768px. */}
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  // Tells screen readers which link represents the
                  // section currently being read.
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm transition-colors ${
                    isActive ? "text-signal" : "text-graphite hover:text-signal"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle. Hidden at 768px and above. */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-1 text-ink md:hidden"
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu. Only in the DOM when open, so keyboard users can't
          tab into hidden links. */}
      {isMenuOpen && (
        <ul className="border-t border-rule px-6 py-2 md:hidden">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block py-2.5 transition-colors ${
                    isActive ? "text-signal" : "text-graphite hover:text-signal"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}