const { useState: _useStateFooter } = React;

function Footer({ setRoute }) {
  return (
    <footer style={{
      marginTop: 160,
      padding: '64px 48px 32px',
      borderTop: '1px solid var(--rule)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48,alignItems:'start'}}>
        <div>
          <div style={{fontFamily:'var(--font-display)',fontSize:44,lineHeight:1.0,letterSpacing:'-0.025em',maxWidth:520}}>
            Write. <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>I read everything.</span>
          </div>
          <a href="mailto:lincoln@berbert.studio" className="link" style={{marginTop:18,display:'inline-block',fontSize:17,borderBottom:'1px solid var(--rule-strong)',paddingBottom:2}}>
            lincoln@berbert.studio ↗
          </a>
        </div>
        <div>
          <div className="t-caption" style={{marginBottom:12}}>Index</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <a onClick={() => setRoute('work')} style={{cursor:'pointer',fontSize:14}}>Work</a>
            <a onClick={() => setRoute('writing')} style={{cursor:'pointer',fontSize:14}}>Writing</a>
            <a onClick={() => setRoute('about')} style={{cursor:'pointer',fontSize:14}}>About</a>
          </div>
        </div>
        <div>
          <div className="t-caption" style={{marginBottom:12}}>Elsewhere</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <a className="link" style={{fontSize:14}}>Are.na ↗</a>
            <a className="link" style={{fontSize:14}}>Substack ↗</a>
            <a className="link" style={{fontSize:14}}>GitHub ↗</a>
          </div>
        </div>
        <div>
          <div className="t-caption" style={{marginBottom:12}}>Colophon</div>
          <div style={{fontSize:13,color:'var(--fg-secondary)',lineHeight:1.55,maxWidth:220}}>
            Set in Newsreader and Geist. Written in Brooklyn and in transit.
          </div>
        </div>
      </div>
      <div style={{marginTop:64,paddingTop:20,borderTop:'1px solid var(--rule)',display:'flex',justifyContent:'space-between',fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'0.06em',textTransform:'uppercase',color:'var(--fg-tertiary)'}}>
        <span>© 2026 Lincoln Berbert</span>
        <span>v1.0 · Apr 2026</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
