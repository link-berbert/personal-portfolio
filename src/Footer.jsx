function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="footer-theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="footer-theme-toggle__glyphs" aria-hidden>
        <span
          className={`footer-theme-toggle__face footer-theme-toggle__face--sun${
            !isDark ? " is-active" : ""
          }`}
        >
          <svg
            className="footer-theme-toggle__svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span
          className={`footer-theme-toggle__face footer-theme-toggle__face--moon${
            isDark ? " is-active" : ""
          }`}
        >
          <svg
            className="footer-theme-toggle__svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function Footer({ setRoute, theme, setTheme }) {
  const navLink = (route, label) => (
    <a
      key={route}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setRoute(route);
        window.scrollTo(0, 0);
      }}
      className="t-caption footer-columns__nav"
      style={{
        cursor: "pointer",
        transition: "color var(--dur-micro) var(--ease)",
        textDecoration: "none",
        color: "var(--fg-secondary)",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "var(--fg-primary)";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "var(--fg-secondary)";
      }}
    >
      {label}
    </a>
  );

  const extLink = (label, href) => (
    <a
      key={label}
      href={href}
      className="footer-columns__ext"
      style={{
        fontSize: 14,
        color: "var(--fg-secondary)",
        transition: "color var(--dur-micro) var(--ease)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "var(--fg-primary)";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = "var(--fg-secondary)";
      }}
    >
      {label}
    </a>
  );

  return (
    <footer style={{
      marginTop: 0,
      padding: 'clamp(48px, 6vw, 96px) clamp(20px, 5vw, 80px) 32px',
      borderTop: '1px solid var(--rule)',
    }}>
      <div
        className="footer-grid"
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div className="footer-brand" style={{ flex: '0 1 auto', minWidth: 0 }}>
          <div
            className="footer-vision"
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 8,
            fontFamily: 'var(--font-display)',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            maxWidth: 460,
          }}
          >
            <div style={{ color: 'var(--fg-primary)', display: 'block' }}>
              Building worlds you can inhabit.
            </div>
            <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)', display: 'block' }}>
              Designing futures you can feel.
            </span>
          </div>
          <a
            href="mailto:lincoln.berbert@lightwrk.ai"
            className="footer-email"
          >
            lincoln.berbert@lightwrk.ai ↗
          </a>
        </div>

        {/* One row per pair: Index|Elsewhere, Work|LightWrk, About|LinkedIn, Contact|Music */}
        <div className="footer-columns">
          {navLink("home", "Index")}
          <div className="t-caption footer-columns__head">Elsewhere</div>
          {navLink("work", "Work")}
          {extLink("LightWrk ↗", "https://lightwrk.ai")}
          {navLink("about", "About")}
          {extLink("LinkedIn ↗", "https://www.linkedin.com/in/lincoln-berbert/")}
          {navLink("contact", "Contact")}
          {extLink("Music ↗", "https://beacons.page/berbymusic")}
        </div>
      </div>

      <div
        className="footer-bar"
        style={{
        marginTop: 64, paddingTop: 20,
        borderTop: '1px solid var(--rule)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px 20px',
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        color: 'var(--fg-tertiary)',
      }}
      >
        <span>© 2026 Lincoln Berbert</span>
        <div
          className="footer-bar__meta"
          style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        >
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <span className="footer-bar__version">
            v1 ·<wbr /> Apr 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
