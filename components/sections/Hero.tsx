import { Mail, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import SyncField from "@/components/ui/SyncField";

/**
 * Hero.tsx
 *
 * The first thing a recruiter sees: name, role, location, and the links
 * they are most likely to click.
 *
 * Everything reads from data/profile.ts. To change your name, title or
 * links, edit that file - not this one.
 *
 * On load, each line rises into place a fraction after the one above it.
 * The --delay values below control that stagger.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Static dot grid. See SyncField.tsx. */}
      <SyncField />

      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
        {/* Location, in mono. Across the site, monospace marks anything
            that is DATA rather than prose. */}
        <p
          className="rise font-mono text-sm tracking-wide text-graphite"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          {profile.location}
        </p>

        {/* Your name. The only <h1> on the page, which matters for both
            screen readers and search engines. */}
        <h1
          className="rise mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          {profile.name}
        </h1>

        {/* Short accent rule. Small structural device that gives the name
            something to sit on. */}
        <div
          className="rise mt-6 h-px w-16 bg-signal"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        />

        <p
          className="rise mt-6 font-display text-xl text-graphite sm:text-2xl"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          {profile.title}
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-3"
          style={{ "--delay": "280ms" } as React.CSSProperties}
        >
          <HeroLink
            href={profile.githubUrl}
            icon={<GithubIcon size={17} />}
            label="GitHub"
          />
          <HeroLink
            href={profile.linkedinUrl}
            icon={<LinkedinIcon size={17} />}
            label="LinkedIn"
          />
          <HeroLink
            href={`mailto:${profile.email}`}
            icon={<Mail size={17} />}
            label="Email"
          />

          {/* Only renders if resumePath is set in profile.ts.
              Remove that line and this button disappears cleanly. */}
          {profile.resumePath && (
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal hover:shadow-[var(--shadow-card-hover)]"
            >
              <Download size={17} />
              Download resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * A single outlined link button. Kept in this file because the Hero is the
 * only place that uses it - no need for a separate file yet.
 */
function HeroLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      // Opens external links in a new tab, but not the mailto: link.
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-rule bg-surface px-4 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:text-signal hover:shadow-[var(--shadow-card-hover)]"
    >
      {icon}
      {label}
    </a>
  );
}