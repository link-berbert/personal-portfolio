function Home({ setRoute, openProject }) {
  const projects = window.PROJECTS.slice(0, 4);
  return (
    <main style={{padding:'0 48px'}}>
      {/* Hero */}
      <section style={{padding:'160px 0 120px',maxWidth:1440}}>
        <div className="t-caption" style={{color:'var(--fg-secondary)',marginBottom:48}}>
          <span style={{display:'inline-block',width:28,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:12}}></span>
          Lincoln Berbert · Practice · 2026
        </div>
        <h1 className="t-display-xl" style={{maxWidth:'15ch'}}>
          Building systems at the edge of music, intelligence,{' '}
          <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>and myth.</span>
        </h1>
        <div style={{marginTop:48,display:'flex',gap:56,alignItems:'baseline'}}>
          <p className="t-body-l" style={{maxWidth:'52ch',color:'var(--fg-secondary)'}}>
            A practice in four disciplines — one point of view. I work on music, physical AI, and long-form worldbuilding. Often at the same time.
          </p>
          <button onClick={() => setRoute('work')} className="link" style={{fontSize:17,borderBottom:'1px solid var(--fg-primary)',paddingBottom:2,whiteSpace:'nowrap'}}>
            Selected work ↓
          </button>
        </div>
      </section>

      {/* Selected work */}
      <section>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',padding:'20px 0',borderBottom:'1px solid var(--fg-primary)'}}>
          <div className="t-caption" style={{color:'var(--fg-primary)'}}>Selected work · Ongoing</div>
          <button onClick={() => setRoute('work')} className="nav-item" style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase'}}>Index / 12 →</button>
        </div>
        {projects.map(p => (
          <ProjectRow key={p.id} p={p} onClick={() => openProject(p.id)} />
        ))}
      </section>

      {/* Manifesto passage */}
      <section style={{padding:'160px 0',display:'grid',gridTemplateColumns:'1fr 2fr',gap:48}}>
        <div className="t-caption">§ On practice</div>
        <div style={{fontFamily:'var(--font-display)',fontSize:36,lineHeight:1.3,letterSpacing:'-0.02em',maxWidth:'22ch'}}>
          I don't believe in the division between art and engineering.{' '}
          <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>
            I believe the division is lazy, and everything interesting happens on its far side.
          </span>
        </div>
      </section>

      {/* Writing preview */}
      <section>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',padding:'20px 0',borderBottom:'1px solid var(--fg-primary)'}}>
          <div className="t-caption" style={{color:'var(--fg-primary)'}}>Writing · 2024 —</div>
          <button onClick={() => setRoute('writing')} className="nav-item" style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase'}}>All essays →</button>
        </div>
        {[
          ['On staying small', 'Why the interesting problems live just past the point where scaling stops helping.', '2025'],
          ['The swarm does not plan', 'Notes from two years of consensus-based robotics.', '2024'],
          ['Against progress bars', 'A short defense of forgetting where you were.', '2024'],
        ].map(([title, sub, year], i) => (
          <a key={i} style={{display:'grid',gridTemplateColumns:'72px 1fr auto',gap:24,alignItems:'baseline',padding:'20px 0',borderBottom:'1px solid var(--rule)',cursor:'pointer'}}>
            <div className="t-mono" style={{color:'var(--fg-tertiary)'}}>§ {String(i+1).padStart(2,'0')}</div>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:22,letterSpacing:'-0.015em'}}>{title}.</div>
              <div className="t-small" style={{marginTop:4}}>{sub}</div>
            </div>
            <div className="t-mono" style={{color:'var(--fg-secondary)'}}>{year} ↗</div>
          </a>
        ))}
      </section>
    </main>
  );
}

window.Home = Home;
