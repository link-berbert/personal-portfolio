export default function Footer({ setRoute }) {
  return (
    <footer style={{
      marginTop: 160,
      padding: 'clamp(48px, 6vw, 96px) clamp(20px, 5vw, 80px) 32px',
      borderTop: '1px solid var(--rule)',
    }}>
      <div
        className="footer-grid"
        style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 48, alignItems: 'start',
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div className="footer-brand" style={{ gridColumn: 'span 2' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            maxWidth: 460,
          }}>
            Write.{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
              I read everything.
            </span>
          </div>
          <a href="mailto:lincoln.berbert@lightwrk.ai"
            style={{
              marginTop: 20, display: 'inline-block', fontSize: 16,
              borderBottom: '1px solid var(--rule-strong)', paddingBottom: 2,
              color: 'var(--fg-primary)',
            }}>
            lincoln.berbert@lightwrk.ai ↗
          </a>
        </div>

        <div>
          <div className="t-caption" style={{ marginBottom: 14 }}>Index</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['work', 'Work'], ['about', 'About'], ['contact', 'Contact']].map(([k, l]) => (
              <a key={k} onClick={() => { setRoute(k); window.scrollTo(0,0); }}
                style={{ cursor: 'pointer', fontSize: 14, color: 'var(--fg-secondary)',
                  transition: 'color var(--dur-micro) var(--ease)' }}
                onMouseEnter={e => e.target.style.color = 'var(--fg-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--fg-secondary)'}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="t-caption" style={{ marginBottom: 14 }}>Elsewhere</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['LightWrk ↗', 'https://lightwrk.ai'], ['Twitter ↗', '#'], ['LinkedIn ↗', 'https://www.linkedin.com/in/lincoln-berbert/']].map(([l, h]) => (
              <a key={l} href={h} style={{ fontSize: 14, color: 'var(--fg-secondary)',
                transition: 'color var(--dur-micro) var(--ease)' }}
                onMouseEnter={e => e.target.style.color = 'var(--fg-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--fg-secondary)'}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="t-caption" style={{ marginBottom: 14 }}>Colophon</div>
          <div style={{
            fontSize: 13, color: 'var(--fg-secondary)',
            lineHeight: 1.6, maxWidth: 200,
          }}>
            Set in Newsreader and Geist. Built for the edge of things.
          </div>
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
