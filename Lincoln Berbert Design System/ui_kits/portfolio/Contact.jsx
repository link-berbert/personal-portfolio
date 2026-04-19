function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', email:'', message:'' });
  return (
    <main style={{padding:'0 48px',minHeight:'80vh'}}>
      <section style={{padding:'120px 0 64px',maxWidth:900}}>
        <div className="t-caption" style={{marginBottom:32}}>
          <span style={{display:'inline-block',width:28,height:1,background:'var(--accent)',verticalAlign:'middle',marginRight:12}}></span>
          Contact
        </div>
        <h1 className="t-display-l" style={{maxWidth:'16ch'}}>
          Write. <span style={{fontStyle:'italic',color:'var(--fg-secondary)'}}>I read everything.</span>
        </h1>
        <p className="t-body-l" style={{marginTop:32,maxWidth:'56ch',color:'var(--fg-secondary)'}}>
          A sentence is usually enough. Best for: collaboration, commissions, residencies, film scores, teaching invitations.
        </p>
      </section>

      {sent ? (
        <section style={{padding:'48px 0',borderTop:'1px solid var(--fg-primary)'}}>
          <div className="t-caption" style={{color:'var(--accent)',marginBottom:16}}>Sent · Thank you</div>
          <div className="t-display-m" style={{maxWidth:'20ch'}}>I'll reply within a week.</div>
        </section>
      ) : (
        <form onSubmit={(e)=>{e.preventDefault();setSent(true);}}
          style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,maxWidth:900,padding:'48px 0',borderTop:'1px solid var(--fg-primary)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            <label className="t-caption">Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
              style={{fontFamily:'var(--font-body)',fontSize:17,padding:'8px 0',border:0,borderBottom:'1px solid var(--rule)',background:'transparent',color:'var(--fg-primary)',outline:0}} />
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            <label className="t-caption">Email</label>
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
              style={{fontFamily:'var(--font-body)',fontSize:17,padding:'8px 0',border:0,borderBottom:'1px solid var(--rule)',background:'transparent',color:'var(--fg-primary)',outline:0}} />
          </div>
          <div style={{gridColumn:'1 / -1',display:'flex',flexDirection:'column',gap:6}}>
            <label className="t-caption">Message</label>
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5}
              placeholder="A sentence is usually enough."
              style={{fontFamily:'var(--font-body)',fontSize:17,padding:'8px 0',border:0,borderBottom:'1px solid var(--rule)',background:'transparent',color:'var(--fg-primary)',outline:0,resize:'vertical'}} />
          </div>
          <div style={{gridColumn:'1 / -1',display:'flex',justifyContent:'space-between',alignItems:'end',marginTop:16}}>
            <div className="t-mono" style={{color:'var(--fg-tertiary)'}}>Or: lincoln@berbert.studio ↗</div>
            <button type="submit"
              style={{fontFamily:'var(--font-body)',fontSize:14,padding:'14px 28px',border:'1px solid var(--fg-primary)',background:'var(--fg-primary)',color:'var(--bg-canvas)',cursor:'pointer',transition:'all 140ms cubic-bezier(0.2,0.6,0.2,1)'}}>
              Send →
            </button>
          </div>
        </form>
      )}
    </main>
  );
}

window.Contact = Contact;
