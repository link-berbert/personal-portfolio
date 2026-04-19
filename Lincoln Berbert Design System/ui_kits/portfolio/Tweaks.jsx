function Tweaks({ open, onClose, type, setType, theme, setTheme, grain, setGrain, accent, setAccent, saveToFile }) {
  if (!open) return null;
  return (
    <aside style={{
      position:'fixed',right:24,bottom:24,width:320,zIndex:100,
      background:'var(--bg-elevated)',border:'1px solid var(--rule-strong)',
      boxShadow:'var(--shadow-overlay)',
      fontFamily:'var(--font-body)',
      color:'var(--fg-primary)'
    }}>
      <div style={{padding:'14px 18px',borderBottom:'1px solid var(--rule)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="t-caption">Tweaks</div>
        <button onClick={onClose} className="t-mono" style={{fontSize:11,color:'var(--fg-tertiary)'}}>Close ×</button>
      </div>
      <div style={{padding:18,display:'flex',flexDirection:'column',gap:18}}>

        <div>
          <div className="t-caption" style={{marginBottom:8}}>Type direction</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:4}}>
            {[['default','V1·Editorial'],['research','V2·Research'],['manifesto','V3·Manifesto']].map(([k,l]) => (
              <button key={k} onClick={()=>{setType(k);saveToFile({typeVariation:k});}}
                style={{padding:'8px 6px',fontSize:11,fontFamily:'var(--font-mono)',letterSpacing:'0.04em',border:'1px solid '+(type===k?'var(--fg-primary)':'var(--rule)'),background:type===k?'var(--fg-primary)':'transparent',color:type===k?'var(--bg-canvas)':'var(--fg-primary)',cursor:'pointer'}}>{l}</button>
            ))}
          </div>
        </div>

        <div>
          <div className="t-caption" style={{marginBottom:8}}>Mode</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:4}}>
            {[['light','☀ Light'],['dark','☽ Dark']].map(([k,l]) => (
              <button key={k} onClick={()=>{setTheme(k);saveToFile({theme:k});}}
                style={{padding:'10px 6px',fontSize:12,fontFamily:'var(--font-mono)',border:'1px solid '+(theme===k?'var(--fg-primary)':'var(--rule)'),background:theme===k?'var(--fg-primary)':'transparent',color:theme===k?'var(--bg-canvas)':'var(--fg-primary)',cursor:'pointer'}}>{l}</button>
            ))}
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="t-caption">Grain overlay</div>
          <button onClick={()=>{setGrain(!grain);saveToFile({grain:!grain});}}
            style={{width:44,height:22,background:grain?'var(--fg-primary)':'var(--rule)',position:'relative',cursor:'pointer',border:0,padding:0}}>
            <span style={{position:'absolute',top:2,left:grain?24:2,width:18,height:18,background:'var(--bg-canvas)',transition:'left 200ms cubic-bezier(0.2,0.6,0.2,1)'}}></span>
          </button>
        </div>

      </div>
    </aside>
  );
}

window.Tweaks = Tweaks;
