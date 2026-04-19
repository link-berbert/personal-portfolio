function Writing() {
  const essays = [
    { num:'§ 01', title:'On staying small', sub:'Why the interesting problems live just past the point where scaling stops helping.', year:'2025', read:'12 min', cat:'Essay' },
    { num:'§ 02', title:'The swarm does not plan', sub:'Notes from two years of consensus-based robotics.', year:'2024', read:'18 min', cat:'Essay' },
    { num:'§ 03', title:'Against progress bars', sub:'A short defense of forgetting where you were.', year:'2024', read:'6 min', cat:'Note' },
    { num:'§ 04', title:'Cartography as composition', sub:'How we drew an atlas of a country that does not exist.', year:'2024', read:'22 min', cat:'Essay' },
    { num:'§ 05', title:'Everything is a score', sub:'On notation for systems that perform themselves.', year:'2023', read:'9 min', cat:'Note' },
    { num:'§ 06', title:'The film with no ending', sub:'A conversation with J. Okafor on extinction, score, and time.', year:'2023', read:'32 min', cat:'Interview' },
  ];
  return (
    <main style={{padding:'0 48px'}}>
      <section style={{padding:'120px 0 48px'}}>
        <div className="t-caption" style={{marginBottom:32}}>
          <span style={{display:'inline-block',width:28,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:12}}></span>
          Writing · 2023 —
        </div>
        <h1 className="t-display-l" style={{maxWidth:'18ch'}}>
          Notes, essays, <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>interviews.</span>
        </h1>
      </section>
      <section>
        <div style={{display:'grid',gridTemplateColumns:'64px 1fr 100px 100px 80px',gap:24,padding:'12px 0',borderBottom:'1px solid var(--fg-primary)'}} className="t-caption">
          <div>№</div><div>Title</div><div>Category</div><div>Read</div><div style={{textAlign:'right'}}>Year</div>
        </div>
        {essays.map((e,i) => (
          <a key={i} style={{display:'grid',gridTemplateColumns:'64px 1fr 100px 100px 80px',gap:24,padding:'28px 0',borderBottom:'1px solid var(--rule)',cursor:'pointer',alignItems:'baseline'}}>
            <div className="t-mono" style={{color:'var(--fg-tertiary)'}}>{e.num}</div>
            <div>
              <div style={{fontFamily:'var(--font-display)',fontSize:26,letterSpacing:'-0.015em',lineHeight:1.2}}>{e.title}.</div>
              <div className="t-small" style={{marginTop:6,maxWidth:'56ch'}}>{e.sub}</div>
            </div>
            <div className="t-mono" style={{color:'var(--fg-secondary)'}}>{e.cat}</div>
            <div className="t-mono" style={{color:'var(--fg-secondary)'}}>{e.read}</div>
            <div className="t-mono" style={{color:'var(--fg-secondary)',textAlign:'right'}}>{e.year} ↗</div>
          </a>
        ))}
      </section>
    </main>
  );
}

window.Writing = Writing;
