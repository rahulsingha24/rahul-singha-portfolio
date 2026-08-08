import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

/**
 * Contact.tsx
 *
 * The closing section. No card, no panel, no tint - it sits directly on
 * the page background like the rest of the site.
 *
 * WHY NOTHING ENCLOSES IT
 * Every section divider was removed so the page reads as one clean white
 * surface. A tinted or bordered block here would be the only heavy
 * element on the page and would fight that. Instead the weight comes from
 * type size: the note is the largest text below the Hero, and the email
 * address sits right under it in mono at display size.
 *
 * There is deliberately no contact form. A form needs a backend, an email
 * service and spam handling, and recruiters overwhelmingly just click the
 * email address anyway. One less thing to maintain.
 *
 * Note: the phone number from your resume is NOT shown here. A phone
 * number on a public page gets scraped and resold by bots, and it is
 * already on the resume PDF that recruiters download. Add it if you
 * disagree - the field exists in data/profile.ts.
 *
 * To change the message, edit `contactNote` in data/profile.ts.
 */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading id="contact">Contact</SectionHeading>

        <Reveal>
          <div className="mt-10">
            {/* Optional - delete contactNote in profile.ts and this line
                disappears with no gap left behind. */}
            {profile.contactNote && (
              <p className="max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
                {profile.contactNote}
              </p>
            )}

            {/* The address itself, as text rather than inside a button.
                Mono because it is data, and at display size because it is
                the single most useful thing on this section. */}
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block font-mono text-lg text-signal underline decoration-signal/30 underline-offset-[6px] transition-colors duration-200 hover:decoration-signal sm:text-xl"
            >
              {profile.email}
            </a>

            {/* Small secondary action. Covers anyone whose machine has no
                mail client set up for the link above. */}
            <div className="mt-7">
              <CopyEmailButton email={profile.email} />
            </div>

            {/* One hairline to close the page. Matches the rule beside
                each section heading rather than introducing a new device. */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-rule pt-6">
              <p className="flex items-center gap-2 font-mono text-xs text-graphite">
                <MapPin size={14} aria-hidden="true" />
                {profile.location}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-signal"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-signal"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}