/**
 * SyncField.tsx
 *
 * The faint dot grid behind the Hero. Static - nothing here animates.
 *
 * It is a CSS gradient rather than a set of elements, so it costs nothing
 * to render regardless of how large the Hero gets, and it is masked so it
 * fades out before it reaches the text.
 */
export default function SyncField() {
  return (
    // Decorative only - hidden from screen readers, ignores pointer events.
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--color-rule) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
      }}
    />
  );
}