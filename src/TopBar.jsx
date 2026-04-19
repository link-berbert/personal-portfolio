import { useState, useEffect, useRef, useLayoutEffect } from "react";

const TOP_REVEAL = 64;
/** Min upward delta (px) before snapping the bar back in (unchanged from prior behavior) */
const SCROLL_UP_SHOW = 4;

export default function TopBar({ route, setRoute }) {
  const headerRef = useRef(null);
  const headerHeightRef = useRef(0);
  const [translateY, setTranslateY] = useState(0);
  /** When false, transform tracks scroll 1:1 (hide). When true, transform animates (reveal). */
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => {
      const h = el.offsetHeight;
      if (h === headerHeightRef.current) return;
      headerHeightRef.current = h;
      setTranslateY((prev) => (h ? Math.max(prev, -h) : prev));
    };
    measure();
    /* Re-measure only when the stacked/row breakpoint flips — avoids the
       per-frame ResizeObserver callback that was re-rendering this component
       and thrashing style/paint every frame during a window resize. */
    const mql = window.matchMedia("(min-width: 720px)");
    const onChange = () => measure();
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let rafId = 0;

    const prefersReducedMotion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        if (prefersReducedMotion()) {
          setTranslateY(0);
          setTransitionEnabled(true);
          lastY = window.scrollY;
          return;
        }

        const y = window.scrollY;
        const delta = y - lastY;
        const h = headerHeightRef.current;

        if (y < TOP_REVEAL) {
          setTransitionEnabled(true);
          setTranslateY(0);
          lastY = y;
        } else if (delta > 0) {
          setTransitionEnabled(false);
          if (h > 0) {
            setTranslateY((prev) => Math.max(prev - delta, -h));
          }
          lastY = y;
        } else if (delta < -SCROLL_UP_SHOW) {
          setTransitionEnabled(true);
          setTranslateY(0);
          lastY = y;
        }
        // Small scroll-up: keep lastY so delta can accumulate to SCROLL_UP_SHOW
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const items = [
    ["home", "Index"],
    ["work", "Work"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <header
      ref={headerRef}
      className={`top-bar${transitionEnabled ? "" : " top-bar--instant"}`}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <button type="button" className="top-bar__brand" onClick={() => setRoute("home")}>
        <span className="top-bar__brand-mark">L·B</span>
        <span className="top-bar__brand-name">Lincoln Berbert</span>
      </button>

      <nav className="top-bar__nav" aria-label="Primary">
        {items.map(([k, label]) => (
          <button
            type="button"
            key={k}
            onClick={() => {
              setRoute(k);
              window.scrollTo(0, 0);
            }}
            className="nav-item"
            aria-current={route === k ? "page" : undefined}
            style={{
              fontFamily: "var(--font-body)",
              cursor: "pointer",
              color: route === k ? "var(--fg-primary)" : "var(--fg-secondary)",
              transition: "color var(--dur-micro) var(--ease)",
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
