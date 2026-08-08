import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import TechChip from "@/components/ui/TechChip";
import Reveal from "@/components/ui/Reveal";

/**
 * Skills.tsx
 *
 * One bordered panel with a divided row per category.
 *
 * WHY ROWS AND NOT A CARD GRID
 * The categories hold between one and five items each. In a grid of
 * cards that difference shows up as ragged heights and empty space,
 * and it gets worse every time you add a skill. Divided rows stay level
 * no matter what the data does - which matters because this section will
 * change more than any other over the next two years.
 *
 * The panel uses the same border, radius and surface as the project
 * cards, so it belongs to the same family without competing with them.
 *
 * To add, remove or reorder skills, edit data/skills.ts. This file never
 * needs to change.
 */
export default function Skills() {
  if (skills.length === 0) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="skills">Technical Skills</SectionHeading>

        <Reveal>
          {/* divide-y draws a hairline between rows only - no border above
              the first or below the last, so it reads as one object. */}
          <dl className="mt-10 divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-surface shadow-[var(--shadow-card)]">
            {skills.map((group) => (
              <div
                key={group.category}
                // Stacked on mobile, label beside items from 640px up.
                className="group px-5 py-5 transition-colors duration-200 hover:bg-signal-dim/40 sm:flex sm:gap-6 sm:px-7"
              >
                {/* <dt>/<dd> is the correct HTML for label-and-value pairs.
                    Screen readers announce them as a described list. */}
                <dt className="w-40 shrink-0 pt-1 font-mono text-xs uppercase tracking-wider text-signal">
                  {group.category}
                </dt>

                <dd className="mt-3 flex flex-wrap gap-2 sm:mt-0">
                  {group.items.map((item) => (
                    <TechChip key={item} label={item} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}