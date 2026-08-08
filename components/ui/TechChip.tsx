/**
 * TechChip.tsx
 *
 * A small pill showing one technology name. Used by Skills, Projects and
 * Hackathons, so it lives here rather than in any one of them.
 *
 * Monospace on purpose: across the site, mono marks anything that is data
 * - dates, locations, technology names - as opposed to prose.
 */
export default function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded border border-rule bg-signal-dim px-2.5 py-1 font-mono text-xs text-ink transition-colors duration-200 hover:border-signal/40">
      {label}
    </span>
  );
}