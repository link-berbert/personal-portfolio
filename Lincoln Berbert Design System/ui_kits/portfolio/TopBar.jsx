const { useState, useEffect, useRef } = React;

function TopBar({ route, setRoute, theme, setTheme }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    const scroller = document.querySelector('.lb-scroll') || window;
    const getY = () => scroller === window ? window.scrollY : scroller.scrollTop;
    const onScroll = () => {
      const y = getY();
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    ['home', 'Index'],
    ['work', 'Work'],
    ['writing', 'Writing'],
    ['about', 'About'],
    ['contact', 'Contact'],
  ];
  return (
    <header className="lb-topbar" style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 48px',
      background: 'color-mix(in oklab, var(--bg-canvas) 72%, transparent)',
      backdropFilter: 'blur(20px) saturate(1.15)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.15)',
      borderBottom: '1px solid var(--rule)',
      transition: 'transform var(--dur-ui) var(--ease), opacity var(--dur-ui) var(--ease)',
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
    }}>
      <button onClick={() => setRoute('home')} style={{display:'flex',alignItems:'center',gap:10}}>
        <span style={{
          width: 28, height: 28, background: 'var(--fg-primary)', color: 'var(--bg-canvas)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em'
        }}>L·B</span>
        <span style={{fontFamily:'var(--font-display)',fontSize:18,letterSpacing:'-0.02em'}}>Lincoln Berbert</span>
      </button>
      <nav style={{display:'flex',alignItems:'center',gap:32}}>
        {items.map(([k, label]) => (
          <a key={k} onClick={() => setRoute(k)} className="nav-item"
             aria-current={route === k ? 'page' : undefined}
             style={{fontFamily:'var(--font-body)',fontSize:14,cursor:'pointer',color: route === k ? 'var(--fg-primary)' : 'var(--fg-secondary)'}}>
            {label}
          </a>
        ))}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Toggle theme"
          style={{marginLeft: 12, fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--fg-tertiary)', padding:'4px 8px', border:'1px solid var(--rule)'}}>
          {theme === 'dark' ? '☽ Dark' : '☀ Light'}
        </button>
      </nav>
    </header>
  );
}

window.TopBar = TopBar;
