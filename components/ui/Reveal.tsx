"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal.tsx
 *
 * Fades its children in when they scroll into view. Wrap any section in it:
 *
 *   <Reveal><ProjectCard ... /></Reveal>
 *
 * Why IntersectionObserver rather than a scroll listener: the browser tells
 * us when an element enters the viewport instead of us checking on every
 * scroll frame. It costs almost nothing, which is what keeps this smooth on
 * low-end phones.
 *
 * The observer disconnects after firing once — elements don't re-animate
 * when you scroll back up, which gets annoying fast.
 *
 * Motion is handled entirely in globals.css (.reveal / .is-visible), so
 * the "reduce motion" media query there covers this component too.
 */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  /** Milliseconds to wait before fading in. Use to stagger a list. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Fire slightly before the element reaches the bottom of the screen,
      // so it has finished animating by the time it's properly in view.
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}