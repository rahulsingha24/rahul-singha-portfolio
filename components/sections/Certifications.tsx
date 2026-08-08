import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Certifications.tsx
 *
 * Full-width rows, one per certification.
 *
 * WHY ROWS AND NOT A GRID
 * A two-column grid leaves an odd number of items with one stranded tile
 * and a visible hole beside it. Rows stay even at any count - add a
 * fourth certification or drop to two and the section still looks right
 * with no layout tweaking.
 *
 * These are supporting evidence, not headline work, so the rows use the
 * same border and radius as the project cards but carry NO shadow and
 * less padding - visibly lighter, keeping the page hierarchy honest.
 *
 * `url` is optional. A row without one renders with no View link and
 * nothing looks broken. Before adding a link, open it in a private
 * browser window: a link that asks a recruiter to request access is
 * worse than no link at all.
 *
 * Empty the array in data/certifications.ts and this section disappears
 * entirely, nav link included.
 */
export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="certifications">Certifications</SectionHeading>

        <ul className="mt-10 space-y-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.name} delay={index * 60}>
              <li className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-lg border border-rule bg-surface px-5 py-4 transition-colors duration-300 hover:border-signal/50">
                {/* min-w-0 lets long names wrap instead of forcing the row
                    wider than its container. */}
                <div className="min-w-0 flex-1">
                  {/* Issuer above the name: it is the part that carries
                      the credibility, so it reads first. */}
                  <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-1 font-medium leading-snug text-ink transition-colors duration-200 group-hover:text-signal">
                    {certification.name}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-5">
                  <span className="font-mono text-xs text-graphite">
                    {certification.date}
                  </span>

                  {certification.url && (
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-graphite transition-colors duration-200 hover:text-signal"
                    >
                      View
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                      {/* Visually just "View", but a screen reader reads
                          the full phrase - useful when links are listed
                          out of context. */}
                      <span className="sr-only">
                        {" "}
                        {certification.name} certificate
                      </span>
                    </a>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}