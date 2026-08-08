import { hackathons } from "@/data/hackathons";
import SectionHeading from "@/components/ui/SectionHeading";
import TechChip from "@/components/ui/TechChip";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

/**
 * Hackathons.tsx
 *
 * Competition entries, ordered by strength rather than date - same as the
 * resume, so the stronger entry is read first.
 *
 * HOW THIS DIFFERS FROM A PROJECT CARD
 * A hackathon entry leads with the competition, not the project, so each
 * card opens with a tinted header strip carrying the event name and date.
 * The project itself sits below it.
 *
 * Project cards use a sliding accent bar down the left edge as their
 * signature; these deliberately do not, so the two sections stay
 * distinguishable at a glance. Same palette, same radii, same shadows -
 * only the arrangement changes.
 *
 * To add or edit an entry, use data/hackathons.ts.
 */
export default function Hackathons() {
  if (hackathons.length === 0) return null;

  return (
    <section id="hackathons" aria-labelledby="hackathons-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="hackathons">Hackathons</SectionHeading>

        <div className="mt-10 space-y-5">
          {hackathons.map((hackathon, index) => (
            <Reveal key={hackathon.name} delay={index * 70}>
              <article className="group overflow-hidden rounded-lg border border-rule bg-surface shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[var(--shadow-card-hover)]">
                {/* --- Header strip -------------------------------------
                    Tinted with signal-dim, the same colour the tech chips
                    already use. Reads like a label on a competition entry. */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule bg-signal-dim px-6 py-3 sm:px-7">
                  <p className="font-mono text-xs uppercase tracking-wider text-signal">
                    {hackathon.event}
                  </p>
                  <p className="font-mono text-xs text-graphite">
                    {hackathon.date}
                  </p>
                </div>

                {/* --- Body ---------------------------------------------- */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-signal sm:text-2xl">
                    {hackathon.name}
                  </h3>

                  <p className="mt-1 text-sm text-graphite">
                    {hackathon.organiser}
                  </p>

                  <p className="mt-4 text-graphite">{hackathon.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {hackathon.tech.map((tech) => (
                      <TechChip key={tech} label={tech} />
                    ))}
                  </div>

                  <div className="mt-6 border-t border-rule pt-5">
                    <a
                      href={hackathon.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-signal"
                    >
                      <GithubIcon size={16} />
                      Code
                      {/* Visually just "Code", but a screen reader reads
                          the full phrase - useful when links are listed
                          out of context. */}
                      <span className="sr-only"> for {hackathon.name}</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}