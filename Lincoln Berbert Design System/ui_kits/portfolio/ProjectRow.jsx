function ProjectRow({ p, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
       style={{display:'grid',gridTemplateColumns:'280px 1fr auto',gap:48,alignItems:'end',padding:'40px 0',borderBottom:'1px solid var(--rule)',cursor:'pointer'}}>
      <div style={{aspectRatio:'4/3',background:p.hero,overflow:'hidden',position:'relative'}}>
        <div style={{position:'absolute',inset:0,background:p.hero,transform:hover?'scale(1.02)':'scale(1)',transition:'transform 480ms cubic-bezier(0.2,0.6,0.2,1)'}}></div>
      </div>
      <div>
        <div className="t-caption" style={{color:'var(--fg-tertiary)'}}>{p.num} · {p.discipline}</div>
        <div className="t-display-m" style={{marginTop:12,maxWidth:'20ch'}}>
          {p.title}
        </div>
      </div>
      <div className="t-mono" style={{color:'var(--fg-secondary)',whiteSpace:'nowrap'}}>
        {p.year} <span style={{display:'inline-block',transform:hover?'translateX(4px)':'translateX(0)',transition:'transform 280ms cubic-bezier(0.2,0.6,0.2,1)'}}>↗</span>
      </div>
    </a>
  );
}

window.ProjectRow = ProjectRow;
