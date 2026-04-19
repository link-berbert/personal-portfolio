function WorkIndex({ openProject }) {
  const [filter, setFilter] = React.useState('All');
  const disciplines = ['All', 'Music', 'Design', 'Worldbuilding', 'Physical AI'];
  const filtered = window.PROJECTS.filter(p => filter === 'All' || p.discipline.includes(filter));
  return (
    <main style={{padding:'0 48px'}}>
      <section style={{padding:'120px 0 48px'}}>
        <div className="t-caption" style={{marginBottom:24}}>
          <span style={{display:'inline-block',width:28,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:12}}></span>
          Work · 2022 —
        </div>
        <h1 className="t-display-l" style={{maxWidth:'18ch'}}>
          Selected work. <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>Ongoing.</span>
        </h1>
      </section>
      <section style={{display:'flex',gap:4,paddingBottom:12,borderBottom:'1px solid var(--fg-primary)',marginBottom:0}}>
        {disciplines.map(d => (
          <button key={d} onClick={()=>setFilter(d)}
            className="nav-item"
            aria-current={filter === d ? 'page' : undefined}
            style={{padding:'6px 16px 6px 0',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase',color:filter===d?'var(--fg-primary)':'var(--fg-tertiary)',marginRight:24}}>
            {d} <span style={{color:'var(--fg-tertiary)',marginLeft:4}}>({d==='All'?window.PROJECTS.length:window.PROJECTS.filter(p=>p.discipline.includes(d)).length})</span>
          </button>
        ))}
      </section>
      <section>
        {filtered.map(p => <ProjectRow key={p.id} p={p} onClick={()=>openProject(p.id)} />)}
      </section>
    </main>
  );
}

window.WorkIndex = WorkIndex;
