function About() {
  return (
    <main style={{padding:'0 48px'}}>
      <section style={{padding:'120px 0 80px',maxWidth:1000}}>
        <div className="t-caption" style={{marginBottom:32}}>
          <span style={{display:'inline-block',width:28,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:12}}></span>
          About
        </div>
        <h1 className="t-display-l" style={{maxWidth:'18ch'}}>
          A practice <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>across four disciplines,</span> with one point of view.
        </h1>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'0 0 96px',borderBottom:'1px solid var(--rule)'}}>
        <div className="t-caption">§ I · Bio</div>
        <div style={{maxWidth:'60ch'}}>
          <p className="t-body-l" style={{marginBottom:24}}>
            Lincoln Berbert is a multidisciplinary builder. He works on music, physical AI, and long-form worldbuilding — often at the same time.
          </p>
          <p className="t-body" style={{marginBottom:20,color:'var(--fg-primary)'}}>
            He trained as a composer before moving toward systems. Today his work sits at the intersection of three questions: how do we listen more carefully, how do machines decide together, and what do we owe to the worlds we invent.
          </p>
          <p className="t-body" style={{marginBottom:20,color:'var(--fg-primary)'}}>
            Previously: co-founder of an embodied-AI research group, artist-in-residence at the MIT Media Lab, and composer for film and stage. Currently: building a new studio.
          </p>
          <p className="t-body" style={{color:'var(--fg-secondary)'}}>
            Based in Brooklyn and in transit.
          </p>
        </div>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'96px 0',borderBottom:'1px solid var(--rule)'}}>
        <div className="t-caption">§ II · Principles</div>
        <div>
          <ol style={{padding:0,margin:0,listStyle:'none'}}>
            {[
              ['01', 'Restraint is a feature, not a cost.'],
              ['02', 'The interesting work happens at the seams between disciplines.'],
              ['03', 'A slow decision is usually a better one.'],
              ['04', 'A system that cannot be turned off is broken.'],
              ['05', 'The audience is always more patient than you think.'],
            ].map(([n, s]) => (
              <li key={n} style={{display:'grid',gridTemplateColumns:'48px 1fr',padding:'20px 0',borderTop:'1px solid var(--rule)',alignItems:'baseline'}}>
                <span className="t-mono" style={{color:'var(--fg-tertiary)'}}>{n}</span>
                <span style={{fontFamily:'var(--font-display)',fontSize:26,letterSpacing:'-0.015em',lineHeight:1.3}}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'96px 0'}}>
        <div className="t-caption">§ III · Elsewhere</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
          {[
            ['Recent talks', ['Serpentine Gallery · 2025','Strange Loop · 2024','Fiber Festival · 2024']],
            ['Press', ['The Creative Independent · 2025','It\'s Nice That · 2024','Pitchfork · 2023']],
            ['Teaching', ['MIT Media Lab (guest) · 2024','SVA MFA IxD (critic) · 2023']],
            ['Residencies', ['Nara Collective · 2024','MIT Media Lab · 2022']],
          ].map(([k, items]) => (
            <div key={k}>
              <div className="t-caption" style={{paddingBottom:12,borderBottom:'1px solid var(--rule)',marginBottom:12}}>{k}</div>
              {items.map(it => <div key={it} className="t-small" style={{padding:'6px 0',color:'var(--fg-primary)'}}>{it}</div>)}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

window.About = About;
