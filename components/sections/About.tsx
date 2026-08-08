import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * About.tsx
 *
 * A short statement about how you work.
 *
 * WHY IT IS SET LARGE
 * Everything below already says what you built. This section earns its
 * place only because it says something the others cannot - so it is set
 * at display size in a narrow measure, closer to a pull quote than to
 * body copy. As a normal paragraph it would read as a summary of the
 * page and get skimmed.
 *
 * The dot grid is the same texture used in the Hero. Repeating it here
 * ties the top and bottom of the page together rather than introducing a
 * new decorative device.
 *
 * The text lives in the `about` field of data/profile.ts. Edit it there.
 * Empty that field and this whole section stops rendering, nav link
 * included.
 */
export default function About() {
  if (!profile.about) return null;

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="about">About</SectionHeading>

        <Reveal>
          <div className="relative mt-10 overflow-hidden">
            {/* Faint dot grid, masked so it fades out to the right.
                Decorative only, so hidden from screen readers. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.6]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-rule) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, transparent 75%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 15%, transparent 75%)",
              }}
            />

            {/* Label column on the left from 768px up, stacked below it
                on smaller screens. */}
            <div className="relative md:flex md:gap-10">
              <div className="md:w-36 md:shrink-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
                  How I work
                </p>
                {/* Short accent rule, same device as the Hero. */}
                <div className="mt-3 hidden h-px w-10 bg-signal md:block" />
              </div>

              <p className="mt-5 max-w-2xl font-display text-xl leading-[1.5] text-ink md:mt-0 sm:text-2xl sm:leading-[1.45]">
                {profile.about}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}