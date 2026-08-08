"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/types";
import TechChip from "@/components/ui/TechChip";
import { GithubIcon } from "@/components/ui/BrandIcons";

/**
 * ProjectCard.tsx
 *
 * One project card, collapsed by default.
 *
 * WHY IT COLLAPSES
 * Every card is the same height until opened, so a recruiter can scan all
 * five projects in a few seconds and then expand whichever one interests
 * them. Nothing is hidden - it's one click away.
 *
 * HOW THE EXPANSION WORKS
 * The details sit inside a CSS grid whose single row animates from `0fr`
 * to `1fr`. Because `fr` resolves against the content's real height, the
 * card expands to exactly the right size at any screen width - no guessed
 * `max-height`, so nothing clips and nothing stalls halfway.
 *
 * The inner div needs `min-h-0` or the grid refuses to shrink below its
 * content height. That one class is what makes the whole thing work.
 *
 * Reduced motion is handled globally in globals.css, so there is nothing
 * extra to remember here.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  // The two learning projects have no bullets, so they get no toggle.
  const hasDetails = project.highlights.length > 0;

  // Used to tie the button to the panel it controls, for screen readers.
  const detailsId = `${project.name.replace(/\s+/g, "-").toLowerCase()}-details`;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-rule bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-card-hover)] sm:p-7">
      {/* Accent bar down the left edge, slides in on hover. */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-signal transition-transform duration-300 group-hover:scale-y-100"
      />

      {/* --- Always visible ------------------------------------------- */}

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-signal sm:text-2xl">
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-xs text-graphite">
          {project.date}
        </span>
      </div>

      {/* Status marker - the one thing that tells a recruiter which
          projects are shipped and which are practice. */}
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-signal">
        {project.status}
      </p>

      <p className="mt-4 text-graphite">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </div>

      {/* --- Expandable details ---------------------------------------- */}

      {hasDetails && (
        <div
          id={detailsId}
          // grid + 0fr/1fr is what makes this animate to the exact height.
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          {/* min-h-0 lets the grid row shrink to zero. Without it the row
              refuses to collapse and the card stays open. */}
          <div className="min-h-0 overflow-hidden">
            <ul className="mt-5 space-y-2 border-t border-rule pt-5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 text-sm leading-relaxed text-graphite before:absolute before:left-0 before:text-signal before:content-['—']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* --- Bottom row -------------------------------------------------
          GitHub always sits on the left, so the row lines up identically
          on every card whether or not there is a toggle on the right. */}

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-rule pt-5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-signal"
        >
          <GithubIcon size={16} />
          Code
          {/* Visually just "Code", but a screen reader reads the full
              phrase - useful when links are listed out of context. */}
          <span className="sr-only"> for {project.name}</span>
        </a>

        {hasDetails && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-graphite transition-colors duration-200 hover:text-signal"
          >
            {isOpen ? "Hide details" : "View details"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </article>
  );
}