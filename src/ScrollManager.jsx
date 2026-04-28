import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/* ScrollManager
   ------------
   Owns scroll position across SPA navigations so the site behaves like
   any conventional multi-page website:

   - Forward navigation (clicking a link / pushState):  always lands at top.
   - Back / Forward (browser button → POP):             restores the scroll
     position the user had on that history entry.
   - First load / hard refresh:                          left to the browser
     (we set `scrollRestoration` to "manual" only AFTER the first paint so
     the browser can do its own restore on initial load).

   It does this without persisting anything to sessionStorage / localStorage —
   positions live in an in-memory Map keyed by the `location.key` React Router
   gives every history entry. That key survives back/forward within the SPA
   session, which is exactly the lifetime we care about. Reload starts fresh,
   matching native browser behavior. */

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  /** Map<historyEntryKey, scrollY>. Populated on every scroll for the entry the
      user is currently viewing, read on POP to restore. */
  const positionsRef = useRef(new Map());
  /** Tracks the key the scroll listener should attribute scroll-Y values to.
      Updated synchronously whenever the route changes. */
  const lastKeyRef = useRef(location.key);
  const isFirstRunRef = useRef(true);

  /* Take over from the browser AFTER first paint. Keeping it `auto` for the
     very first render lets a hard refresh restore scroll like a normal site;
     once the SPA is alive, we own all scroll. */
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  /* Save the latest scrollY for whichever history entry the user is on. */
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        positionsRef.current.set(lastKeyRef.current, window.scrollY);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    /* Capture the position once on mount so an initial browser-restored
       scroll (e.g. after a refresh) is remembered for the active entry even
       though no scroll event fires. */
    positionsRef.current.set(lastKeyRef.current, window.scrollY);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  /* Apply scroll on every navigation. useLayoutEffect runs after children
     have committed but before paint, so we beat the user seeing a wrong
     scroll position. For tall pages whose layout depends on async content
     we re-attempt over a short rAF window to deal with content settling. */
  useLayoutEffect(() => {
    const key = location.key;

    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      lastKeyRef.current = key;
      return;
    }

    const isPop = navigationType === "POP";
    const targetY = isPop ? positionsRef.current.get(key) ?? 0 : 0;

    lastKeyRef.current = key;

    /* Single attempt is enough for pages whose first-paint height already
       covers `targetY`. Otherwise rAF a few times until either we hit the
       target, the document has clamped us as far as it can, or we burn
       through the budget. Cheap and self-terminating. */
    let attempts = 0;
    const maxAttempts = 12;
    const apply = () => {
      window.scrollTo(0, targetY);
      attempts += 1;
      if (!isPop || targetY === 0) return;
      const docMax = Math.max(
        0,
        (document.documentElement.scrollHeight || 0) - window.innerHeight,
      );
      const clampedTarget = Math.min(targetY, docMax);
      if (window.scrollY >= clampedTarget - 1 || attempts >= maxAttempts) return;
      requestAnimationFrame(apply);
    };
    apply();
  }, [location.key, navigationType]);

  return null;
}
