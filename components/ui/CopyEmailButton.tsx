"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

/**
 * CopyEmailButton.tsx
 *
 * Copies the email address to the clipboard and shows a tick for two
 * seconds. Useful for anyone browsing on a machine where clicking a
 * mailto: link opens a mail client they never use.
 *
 * Styled to match the outlined buttons in the Hero, so it belongs to the
 * same family rather than introducing a new button style.
 *
 * This is a client component because it needs a click handler and a piece
 * of state. It is kept in its own file so the Contact section itself stays
 * static server-rendered HTML.
 *
 * aria-live announces the change to screen readers, so the confirmation
 * is not purely visual.
 */
export default function CopyEmailButton({ email }: { email: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(email);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (older browsers, insecure origins).
      // The mailto: link beside this button still works, so we fail quietly.
    }
  }

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="inline-flex items-center gap-2 rounded-md border border-rule bg-surface px-4 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:text-signal hover:shadow-[var(--shadow-card-hover)]"
    >
      {hasCopied ? <Check size={17} /> : <Copy size={17} />}
      <span aria-live="polite">{hasCopied ? "Copied" : "Copy address"}</span>
    </button>
  );
}