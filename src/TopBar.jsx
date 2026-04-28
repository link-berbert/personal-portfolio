import { useCallback, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TOP_REVEAL = 64;
/** Min upward delta (px) before snapping the bar back in (unchanged from prior behavior) */
const SCROLL_UP_SHOW = 4;

const NAV_ITEMS = [
  ["/", "Index"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

/** True when the top bar's link should be considered active for the current
    location. `/` only matches an exact path; everything else also matches
    deeper paths (none today, but cheap to keep correct). */
function isPathActive(itemPath, currentPathname) {
  if (itemPath === "/") return currentPathname === "/";
  return currentPathname === itemPath || currentPathname.startsWith(`${itemPath}/`);
}

export default function TopBar() {
  const location = useLocation();
  const headerRef = useRef(null);
  const headerHeightRef = useRef(0);
  /** Scroll-linked position; kept in refs so scroll never schedules React renders. */
  const translateYRef = useRef(0);
  /** When false, transform tracks scroll 1:1 (hide). When true, transform animates (reveal). */
  const transitionEnabledRef = useRef(true);

  const syncHeaderDom = useCallback(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.transform = `translateY(${translateYRef.current}px)`;
    el.classList.toggle("top-bar--instant", !transitionEnabledRef.current);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => {
      const h = el.offsetHeight;
      if (h === headerHeightRef.current) return;
      headerHeightRef.current = h;
      if (h) {
        const nextY = Math.max(translateYRef.current, -h);
        if (nextY !== translateYRef.current) {
          translateYRef.current = nextY;
          syncHeaderDom();
        }
      }
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
  }, [syncHeaderDom]);

  useEffect(() => {
    let lastY = window.scrollY;
    let rafId = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        if (reducedMotion.matches) {
          if (translateYRef.current !== 0 || !transitionEnabledRef.current) {
            translateYRef.current = 0;
            transitionEnabledRef.current = true;
            syncHeaderDom();
          }
          lastY = window.scrollY;
          return;
        }

        const y = window.scrollY;
        const delta = y - lastY;
        const h = headerHeightRef.current;

        if (y < TOP_REVEAL) {
          if (translateYRef.current !== 0 || !transitionEnabledRef.current) {
            transitionEnabledRef.current = true;
            translateYRef.current = 0;
            syncHeaderDom();
          }
          lastY = y;
        } else if (delta > 0) {
          const wasAnimated = transitionEnabledRef.current;
          transitionEnabledRef.current = false;
          const prevY = translateYRef.current;
          if (h > 0) {
            translateYRef.current = Math.max(prevY - delta, -h);
          }
          if (
            wasAnimated ||
            translateYRef.current !== prevY
          ) {
            syncHeaderDom();
          }
          lastY = y;
        } else if (delta < -SCROLL_UP_SHOW) {
          if (translateYRef.current !== 0 || !transitionEnabledRef.current) {
            transitionEnabledRef.current = true;
            translateYRef.current = 0;
            syncHeaderDom();
          }
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
  }, [syncHeaderDom]);

  return (
    <header ref={headerRef} className="top-bar">
      <Link to="/" className="top-bar__brand" style={{ textDecoration: "none" }}>
        <span className="top-bar__brand-mark">L·B</span>
        <span className="top-bar__brand-name">Lincoln Berbert</span>
      </Link>

      <nav className="top-bar__nav" aria-label="Primary">
        {NAV_ITEMS.map(([to, label]) => {
          const active = isPathActive(to, location.pathname);
          return (
            <Link
              key={to}
              to={to}
              className="nav-item"
              aria-current={active ? "page" : undefined}
              style={{
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                transition: "color var(--dur-micro) var(--ease)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
