"use client";

import { useEffect, useRef, useState } from "react";
import { education } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Education.tsx
 *
 * Education history as a timeline. The rail fills as you scroll and each
 * node lights up when it reaches the middle of the screen - and unlights
 * when you scroll back up, so the animation works in both directions.
 *
 * HOW IT WORKS
 * One IntersectionObserver watches all the entries. A node counts as
 * active when it is either inside the viewport band OR has scrolled above
 * it (`boundingClientRect.top < 0`) - that second check is what keeps
 * earlier nodes lit once you have passed them.
 *
 * The observer is NOT disconnected after firing, which is what makes it
 * reversible. That is the one difference from Reveal.tsx.
 *
 * PERFORMANCE
 * The rail is a single element scaled with `transform: scaleY()`, not a
 * height animation - transforms are GPU-composited and never trigger a
 * layout pass, so this stays smooth on cheap phones. There is no scroll
 * listener anywhere; the browser tells us when nodes cross the line.
 *
 * ACCESSIBILITY
 * Only the rail and the nodes animate. All text is visible at all times,
 * so nothing is hidden from anyone with reduced motion enabled or with
 * JavaScript disabled.
 *
 * To add an entry or update your CGPA, edit data/education.ts.
 */
export default function Education() {
  // Which entries are currently lit, by index.
  const [activeIndexes, setActiveIndexes] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIndexes((previous) => {
          const next = new Set(previous);

          for (const entry of entries) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index ?? -1,
            );
            if (index < 0) continue;

            // Lit if it's in view, or if it has scrolled past the top.
            const hasPassed = entry.boundingClientRect.top < 0;
            if (entry.isIntersecting || hasPassed) {
              next.add(index);
            } else {
              next.delete(index);
            }
          }

          return next;
        });
      },
      // Trims the bottom 45% of the viewport, so a node lights up as it
      // reaches roughly the middle of the screen rather than the moment
      // it peeks in from the bottom.
      { rootMargin: "0px 0px -45% 0px" },
    );

    for (const item of itemRefs.current) {
      if (item) observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  if (education.length === 0) return null;

  // How far down the rail should be filled: 0 when nothing is lit, 1 when
  // the last entry is.
  const highestActive =
    activeIndexes.size > 0 ? Math.max(...activeIndexes) : -1;
  const railProgress = (highestActive + 1) / education.length;

  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="education">Education</SectionHeading>

        <div className="relative mt-10">
          {/* Unfilled rail. Decorative, so hidden from screen readers. */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-rule"
          />

          {/* Filled rail, scaled from the top as you scroll. */}
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px origin-top bg-signal transition-transform duration-500 ease-out"
            style={{ transform: `scaleY(${railProgress})` }}
          />

          <ol className="space-y-10">
            {education.map((entry, index) => {
              const isActive = activeIndexes.has(index);

              return (
                <li
                  key={`${entry.institution}-${entry.period}`}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className="group relative pl-8"
                >
                  {/* Node. Fills in when the entry becomes active. */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[7px] size-[11px] rotate-45 border transition-all duration-400 ease-out ${
                      isActive
                        ? "scale-110 border-signal bg-signal"
                        : "border-rule bg-paper"
                    }`}
                  />

                  {/* Date first. On a timeline the date is the anchor, so
                      it leads rather than sitting off to the right. */}
                  <p
                    className={`font-mono text-xs tracking-wide transition-colors duration-400 ${
                      isActive ? "text-signal" : "text-graphite"
                    }`}
                  >
                    {entry.period}
                  </p>

                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-signal sm:text-xl">
                    {entry.institution}
                  </h3>

                  <p className="mt-1 text-graphite">{entry.qualification}</p>

                  <p className="mt-0.5 font-mono text-xs text-graphite">
                    {entry.location}
                  </p>

                  {/* Result as a badge. Recruiters filter on CGPA, so it
                      should be findable without reading a sentence. */}
                  {entry.result && (
                    <p className="mt-3 inline-block rounded border border-rule bg-signal-dim px-2.5 py-1 font-mono text-xs text-ink">
                      {entry.result}
                    </p>
                  )}

                  {entry.coursework && entry.coursework.length > 0 && (
                    <div className="mt-4 border-t border-rule pt-3">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-graphite">
                        Relevant coursework
                      </p>
                      {/* Joined with middots rather than rendered as chips:
                          courses are reference detail, and chips here would
                          compete with the tech stacks further up the page. */}
                      <p className="mt-1.5 text-sm text-graphite">
                        {entry.coursework.join("  ·  ")}
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}