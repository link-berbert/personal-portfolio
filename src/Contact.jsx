import { useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [category, setCategory] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const pm = 'clamp(20px, 5vw, 80px)';
  const contactContentWidth = 'min(100%, 920px)';

  const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "").trim();

  const categories = [
    { id: 'ai', label: 'AI / LightWrk', desc: 'Partnerships, questions, and evaluation work.' },
    { id: 'other-ventures', label: 'Other Ventures', desc: 'Brand, product, and strategy support.' },
    { id: 'creative', label: 'Creative', desc: 'Music, design, and worldbuilding projects.' },
    { id: 'other', label: 'Something Else', desc: 'Speaking, ideas, and introductions.' },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!category) {
      setError("Choose a topic above.");
      return;
    }
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) {
      setError("Name, email, and message are required.");
      return;
    }
    if (!accessKey) {
      setError(
        import.meta.env.DEV
          ? "Missing VITE_WEB3FORMS_ACCESS_KEY. Add it to env/.env and restart the dev server."
          : "This deployment has no form key. In Vercel → Settings → Environment Variables, set VITE_WEB3FORMS_ACCESS_KEY, then redeploy. Or use the email link below.",
      );
      return;
    }

    const categoryLabel = categories.find(c => c.id === category)?.label ?? category;
    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Portfolio] ${categoryLabel}`,
          name,
          email,
          message,
          category: categoryLabel,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(typeof data.message === "string" ? data.message : "Could not send. Try again or use email below.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send. Try again or use email below.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      {/* Header */}
      <section style={{
        padding: `clamp(80px, 10vw, 160px) ${pm} clamp(40px, 5vw, 64px)`,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption" style={{
          marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12,
          color: 'var(--fg-secondary)',
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--fg-tertiary)', verticalAlign: 'middle' }}></span>
          Contact
        </div>
        <h1 className="t-display-l headline-measure" style={{ maxWidth: '20ch' }}>
          Send a note.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            I read everything.
          </span>
        </h1>
        <p className="t-body-l min-w-0" style={{
          marginTop: 36, maxWidth: '52ch',
          color: 'var(--fg-secondary)', lineHeight: 1.65,
        }}>
          Don't hesitate to reach out. I usually respond within a few days.
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
            I'll respond as soon as I can.
          </div>
        </section>
      ) : (
        <>
          {/* Category select */}
          <section style={{
            padding: `clamp(28px, 4vw, 48px) ${pm} clamp(28px, 4vw, 48px)`,
            borderTop: '1px solid var(--fg-primary)',
            borderBottom: '1px solid var(--rule)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            <div className="t-caption" style={{ marginBottom: 14, color: 'var(--fg-secondary)' }}>
              What is this about?
            </div>
            <div className="contact-category-grid" style={{ width: contactContentWidth }}>
              {categories.map(c => (
                <button key={c.id}
                  className="contact-category-button"
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
                    justifyContent: 'space-between',
                    gap: 4, textAlign: 'left', width: '100%', minHeight: '100%',
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
            onSubmit={handleSubmit}
            style={{
              padding: `clamp(28px, 4vw, 48px) ${pm} clamp(48px, 6vw, 96px)`,
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <div
              className="contact-form"
              style={{
                width: contactContentWidth,
                boxSizing: 'border-box',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px 48px',
              }}>

              {[
                { id: 'name', label: 'Name', type: 'text', col: 1 },
                { id: 'email', label: 'Email', type: 'email', col: 1 },
              ].map(f => (
                <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label className="t-caption">{f.label}</label>
                  <input
                    type={f.type}
                    name={f.id}
                    required
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
                  name="message"
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
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
                display: 'flex', flexDirection: 'column',
                gap: 12, marginTop: 8,
              }}>
                {error ? (
                  <p
                    className="t-caption"
                    role="alert"
                    style={{ margin: 0, color: '#c45', maxWidth: '52ch' }}
                  >
                    {error}
                  </p>
                ) : null}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap', gap: 16,
                }}>
                  <a href="mailto:lincoln.berbert@lightwrk.ai"
                    className="t-mono"
                    style={{ color: 'var(--fg-tertiary)', fontSize: 12 }}>
                    Or email directly: lincoln.berbert@lightwrk.ai ↗
                  </a>
                  <button type="submit"
                    disabled={submitting}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: 14,
                      padding: '14px 28px',
                      border: '1px solid var(--fg-primary)',
                      background: 'var(--fg-primary)', color: 'var(--bg-canvas)',
                      cursor: submitting ? 'wait' : 'pointer',
                      opacity: submitting ? 0.75 : 1,
                      transition: 'all 140ms cubic-bezier(0.2,0.6,0.2,1)',
                    }}
                    onMouseEnter={e => {
                      if (e.currentTarget.disabled) return;
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--fg-primary)';
                    }}
                    onMouseLeave={e => {
                      if (e.currentTarget.disabled) return;
                      e.currentTarget.style.background = 'var(--fg-primary)';
                      e.currentTarget.style.color = 'var(--bg-canvas)';
                    }}>
                    {submitting ? "Sending…" : "Get in touch →"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </main>
  );
}
