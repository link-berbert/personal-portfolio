function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', context: '', message: '' });
  const [category, setCategory] = React.useState(null);
  const pm = 'clamp(20px, 5vw, 80px)';

  const categories = [
    { id: 'ai', label: 'AI / LightWrk', desc: 'Partnerships, evaluation work, frontier AI collaboration.' },
    { id: 'creative', label: 'Creative', desc: 'Music, direction, worldbuilding, identity systems.' },
    { id: 'other', label: 'Something else', desc: 'Speaking, ideas, introductions.' },
  ];

  return (
    <main>
      {/* Header */}
      <section style={{
        padding: `clamp(80px, 10vw, 160px) ${pm} clamp(40px, 5vw, 64px)`,
        maxWidth: 900,
      }}>
        <div className="t-caption" style={{
          marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12,
          color: 'var(--fg-secondary)',
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--fg-tertiary)', verticalAlign: 'middle' }}></span>
          Contact
        </div>
        <h1 className="t-display-l" style={{ maxWidth: '16ch' }}>
          Write.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            I read everything.
          </span>
        </h1>
        <p className="t-body-l" style={{
          marginTop: 36, maxWidth: '52ch',
          color: 'var(--fg-secondary)', lineHeight: 1.65,
        }}>
          A sentence is usually enough context. I respond to most things within a few days.
        </p>
      </section>

      {sent ? (
        <section style={{
          padding: `clamp(48px, 6vw, 96px) ${pm}`,
          borderTop: '1px solid var(--fg-primary)',
        }}>
          <div className="t-caption" style={{ color: 'var(--fg-secondary)', marginBottom: 20 }}>
            Sent · Thank you
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 56px)',
            letterSpacing: '-0.025em', lineHeight: 1.1,
            maxWidth: '20ch',
          }}>
            I'll reply within a few days.
          </div>
        </section>
      ) : (
        <>
          {/* Category select */}
          <section style={{
            padding: `clamp(40px, 5vw, 72px) ${pm}`,
            borderTop: '1px solid var(--fg-primary)',
          }}>
            <div className="t-caption" style={{ marginBottom: 24, color: 'var(--fg-secondary)' }}>
              What is this about?
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {categories.map(c => (
                <button key={c.id}
                  onClick={() => setCategory(c.id)}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 14,
                    padding: '12px 20px',
                    border: '1px solid',
                    borderColor: category === c.id ? 'var(--fg-primary)' : 'var(--rule)',
                    background: category === c.id ? 'var(--fg-primary)' : 'transparent',
                    color: category === c.id ? 'var(--bg-canvas)' : 'var(--fg-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--dur-ui) var(--ease)',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    gap: 4, textAlign: 'left',
                  }}>
                  <span style={{ fontWeight: 500 }}>{c.label}</span>
                  <span style={{
                    fontSize: 12, opacity: 0.7,
                    color: category === c.id ? 'var(--bg-canvas)' : 'var(--fg-tertiary)',
                  }}>{c.desc}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Form */}
          <form
            onSubmit={e => { e.preventDefault(); setSent(true); }}
            style={{
              padding: `0 ${pm} clamp(48px, 6vw, 96px)`,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px 48px', maxWidth: 900,
              borderTop: '1px solid var(--rule)',
              paddingTop: 40,
            }}>

            {[
              { id: 'name', label: 'Name', type: 'text', col: 1 },
              { id: 'email', label: 'Email', type: 'email', col: 1 },
            ].map(f => (
              <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label className="t-caption">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.id]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 17,
                    padding: '10px 0', border: 0,
                    borderBottom: '1px solid var(--rule)',
                    background: 'transparent', color: 'var(--fg-primary)',
                    outline: 0, width: '100%',
                    transition: 'border-color var(--dur-ui) var(--ease)',
                  }}
                  onFocus={e => e.target.style.borderBottomColor = 'var(--fg-primary)'}
                  onBlur={e => e.target.style.borderBottomColor = 'var(--rule)'}
                />
              </div>
            ))}

            <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label className="t-caption">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="A sentence is usually enough."
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 17,
                  padding: '10px 0', border: 0,
                  borderBottom: '1px solid var(--rule)',
                  background: 'transparent', color: 'var(--fg-primary)',
                  outline: 0, resize: 'vertical', width: '100%',
                  transition: 'border-color var(--dur-ui) var(--ease)',
                }}
                onFocus={e => e.target.style.borderBottomColor = 'var(--fg-primary)'}
                onBlur={e => e.target.style.borderBottomColor = 'var(--rule)'}
              />
            </div>

            <div style={{
              gridColumn: '1 / -1',
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginTop: 8,
              flexWrap: 'wrap', gap: 16,
            }}>
              <a href="mailto:lincoln@lightwrk.co"
                className="t-mono"
                style={{ color: 'var(--fg-tertiary)', fontSize: 12 }}>
                Or email directly: lincoln@lightwrk.co ↗
              </a>
              <button type="submit"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  padding: '14px 28px',
                  border: '1px solid var(--fg-primary)',
                  background: 'var(--fg-primary)', color: 'var(--bg-canvas)',
                  cursor: 'pointer',
                  transition: 'all 140ms cubic-bezier(0.2,0.6,0.2,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--fg-primary)'; e.currentTarget.style.color = 'var(--bg-canvas)'; }}>
                Send →
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
}

window.Contact = Contact;
