/**
 * SectionHeading.tsx
 *
 * The heading at the top of every section. Kept in one file so all
 * sections stay visually identical - change it here, it changes everywhere.
 *
 * The trailing hairline stretches to fill whatever space is left, which
 * gives each section a clear top edge without needing a heavy divider.
 *
 * `id` does double duty: it's what the nav links jump to, and it's what
 * screen readers announce as the section's name.
 */
export default function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <h2
        id={`${id}-heading`}
        className="font-display text-sm font-medium uppercase tracking-[0.18em] text-graphite"
      >
        {children}
      </h2>

      {/* Decorative only - hidden from screen readers. */}
      <span aria-hidden="true" className="h-px flex-1 bg-rule" />
    </div>
  );
}