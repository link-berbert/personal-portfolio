import { useState, useEffect, useRef } from "react";

export default function TopBar({ route, setRoute }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    ["home", "Index"],
    ["work", "Work"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <header className={`top-bar${hidden ? " top-bar--hidden" : ""}`}>
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
