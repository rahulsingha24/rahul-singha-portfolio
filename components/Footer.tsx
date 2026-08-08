import { profile } from "@/data/profile";

/**
 * Footer.tsx
 *
 * Closing line, kept deliberately small. The Contact section directly
 * above already ends the page properly - this is just a legal line, so it
 * should not take up the space of a real section.
 *
 * The year updates itself, so this never goes stale.
 */
export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-4">
        <p className="font-mono text-[11px] text-graphite">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <p className="font-mono text-[11px] text-graphite">
          Next.js &middot; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}