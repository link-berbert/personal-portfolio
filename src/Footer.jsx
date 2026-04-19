export default function Footer({ setRoute }) {
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
      marginTop: 160,
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
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
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
            fontSize: 'clamp(18px, 2.2vw, 24px)',
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
            style={{
              marginTop: 20,
              display: 'inline-block',
              fontSize: 16,
              borderBottom: '1px solid var(--rule-strong)',
              paddingBottom: 2,
              color: 'var(--fg-primary)',
            }}
          >
            lincoln.berbert@lightwrk.ai ↗
          </a>
        </div>

        {/* One row per pair: Index|Elsewhere, Work|LightWrk, About|LinkedIn, Contact|(empty) */}
        <div className="footer-columns">
          {navLink("home", "Index")}
          <div className="t-caption footer-columns__head">Elsewhere</div>
          {navLink("work", "Work")}
          {extLink("LightWrk ↗", "https://lightwrk.ai")}
          {navLink("about", "About")}
          {extLink("LinkedIn ↗", "https://www.linkedin.com/in/lincoln-berbert/")}
          {navLink("contact", "Contact")}
        </div>
      </div>

      <div
        className="footer-bar"
        style={{
        marginTop: 64, paddingTop: 20,
        borderTop: '1px solid var(--rule)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        color: 'var(--fg-tertiary)',
      }}
      >
        <span>© 2026 Lincoln Berbert</span>
        <span>v1 · Apr 2026</span>
      </div>
    </footer>
  );
}
