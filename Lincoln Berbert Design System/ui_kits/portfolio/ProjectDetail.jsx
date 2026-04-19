function ProjectDetail({ id, setRoute, openProject }) {
  const p = window.PROJECTS.find(x => x.id === id) || window.PROJECTS[0];
  const idx = window.PROJECTS.findIndex(x => x.id === p.id);
  const next = window.PROJECTS[(idx + 1) % window.PROJECTS.length];

  return (
    <main>
      {/* Hero plate — full bleed */}
      <section style={{position:'relative',aspectRatio:'16/9',background:p.hero,marginBottom:48}}>
        <div style={{position:'absolute',bottom:32,left:48,right:48,display:'flex',justifyContent:'space-between',alignItems:'end',color:'#ECEAE4',mixBlendMode:'difference'}}>
          <div className="t-caption" style={{color:'#ECEAE4'}}>Plate · {p.num}</div>
          <div className="t-caption" style={{color:'#ECEAE4'}}>{p.year}</div>
        </div>
      </section>

      <div style={{padding:'0 48px'}}>
        {/* Title */}
        <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'0 0 64px',borderBottom:'1px solid var(--rule)'}}>
          <div className="t-caption" style={{paddingTop:12}}>
            <span style={{display:'inline-block',width:24,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:10}}></span>
            Project {p.num} · {p.discipline}
          </div>
          <div>
            <h1 className="t-display-l" style={{maxWidth:'18ch'}}>
              {p.title}
            </h1>
            <p className="t-body-l" style={{marginTop:32,maxWidth:'56ch',color:'var(--fg-secondary)'}}>{p.summary}</p>
          </div>
        </section>

        {/* Meta */}
        <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'48px 0'}}>
          <div className="t-caption">Details</div>
          <div style={{display:'grid',gridTemplateColumns:'140px 1fr',rowGap:0}}>
            {[
              ['Year', p.year],
              ['Discipline', p.discipline],
              ['Role', p.role],
              ['Collaborators', p.collaborators],
            ].map(([k, v]) => (
              <React.Fragment key={k}>
                <div className="t-caption" style={{padding:'14px 0',borderBottom:'1px solid var(--rule)'}}>{k}</div>
                <div style={{padding:'14px 0',borderBottom:'1px solid var(--rule)',fontSize:15}}>{v}</div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Essay */}
        <section style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:64,padding:'80px 0 120px'}}>
          <div>
            <div className="t-caption" style={{marginBottom:16}}>Chapters</div>
            <ol style={{padding:0,margin:0,listStyle:'none'}}>
              {p.chapters.map((c, i) => (
                <li key={c} style={{display:'grid',gridTemplateColumns:'24px 1fr',padding:'8px 0',fontSize:14}}>
                  <span className="t-mono" style={{color:'var(--fg-tertiary)'}}>{String(i+1).padStart(2,'0')}</span>
                  <a style={{cursor:'pointer'}} className="link">{c}</a>
                </li>
              ))}
            </ol>
          </div>
          <div style={{maxWidth:'62ch'}}>
            {p.essay.map((par, i) => (
              <p key={i} className="t-body-l" style={{marginBottom:24}}>
                {i === 0 && <span style={{fontFamily:'var(--font-display)',float:'left',fontSize:72,lineHeight:0.85,marginRight:8,marginTop:4,color:'var(--fg-primary)'}}>{par[0]}</span>}
                {i === 0 ? par.slice(1) : par}
              </p>
            ))}
          </div>
        </section>

        {/* Next project */}
        <section style={{borderTop:'1px solid var(--fg-primary)',padding:'48px 0 0',marginBottom:80}}>
          <div className="t-caption" style={{marginBottom:20}}>Next</div>
          <a onClick={()=>openProject(next.id)} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:32,alignItems:'end',cursor:'pointer'}}>
            <div style={{width:160,aspectRatio:'4/3',background:next.hero}}></div>
            <div>
              <div className="t-caption" style={{color:'var(--fg-tertiary)'}}>{next.num} · {next.discipline}</div>
              <div className="t-display-m" style={{marginTop:8,maxWidth:'22ch'}}>{next.title}</div>
            </div>
            <div className="t-mono" style={{color:'var(--fg-secondary)'}}>{next.year} →</div>
          </a>
        </section>
      </div>
    </main>
  );
}

window.ProjectDetail = ProjectDetail;
