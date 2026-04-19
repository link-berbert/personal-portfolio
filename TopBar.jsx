const { useState, useEffect, useRef } = React;

function TopBar({ route, setRoute, theme, setTheme }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    ['home', 'Index'],
    ['work', 'Work'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px clamp(20px, 5vw, 80px)',
      background: 'color-mix(in oklab, var(--bg-canvas) 72%, transparent)',
      backdropFilter: 'blur(20px) saturate(1.15)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.15)',
      borderBottom: '1px solid var(--rule)',
      transition: 'transform var(--dur-ui) var(--ease)',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
    }}>
      <button onClick={() => setRoute('home')} style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'none', border: 0, cursor: 'pointer', padding: 0,
      }}>
        <span style={{
          width: 28, height: 28,
          background: 'var(--fg-primary)', color: 'var(--bg-canvas)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
          letterSpacing: '0.02em', flexShrink: 0,
        }}>L·B</span>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 17,
          letterSpacing: '-0.02em', color: 'var(--fg-primary)',
        }}>Lincoln Berbert</span>
      </button>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {items.map(([k, label]) => (
          <a key={k}
            onClick={() => { setRoute(k); window.scrollTo(0, 0); }}
            className="nav-item"
            aria-current={route === k ? 'page' : undefined}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 14, cursor: 'pointer',
              color: route === k ? 'var(--fg-primary)' : 'var(--fg-secondary)',
              transition: 'color var(--dur-micro) var(--ease)',
            }}>
            {label}
          </a>
        ))}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{
            marginLeft: 8,
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--fg-tertiary)', padding: '4px 8px',
            border: '1px solid var(--rule)', background: 'none', cursor: 'pointer',
          }}>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </button>
      </nav>
    </header>
  );
}

window.TopBar = TopBar;
