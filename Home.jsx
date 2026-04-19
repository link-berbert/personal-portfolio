const { useEffect: _ue, useRef: _ur } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 800ms cubic-bezier(0.2,0.6,0.2,1), transform 800ms cubic-bezier(0.2,0.6,0.2,1)';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function WorkRow({ item, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto',
        gap: 24, alignItems: 'baseline',
        padding: '28px 0',
        borderBottom: '1px solid var(--rule)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--dur-micro) var(--ease)',
      }}>
      <span className="t-mono" style={{ color: 'var(--fg-tertiary)' }}>
        {item.num}
      </span>
      <div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.5vw, 30px)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          color: hovered ? 'var(--fg-primary)' : 'var(--fg-primary)',
          transition: 'opacity var(--dur-micro) var(--ease)',
          opacity: hovered ? 1 : 0.9,
        }}>
          {item.title}
        </div>
        <div className="t-small" style={{ marginTop: 6, color: 'var(--fg-secondary)' }}>
          {item.summary}
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {item.tags && item.tags.map(t => (
            <span key={t} className="t-mono" style={{
              fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--fg-tertiary)', padding: '2px 0',
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="t-mono" style={{
        color: 'var(--fg-tertiary)', fontSize: 12, whiteSpace: 'nowrap',
        opacity: hovered ? 1 : 0.6,
        transition: 'opacity var(--dur-micro) var(--ease)',
      }}>
        {item.year}
      </div>
    </div>
  );
}

function Home({ setRoute }) {
  useReveal();

  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: 'clamp(80px, 12vw, 200px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 140px)',
        maxWidth: 1440,
      }}>
        <div data-reveal className="t-caption" style={{
          color: 'var(--fg-secondary)', marginBottom: 48,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{
            display: 'inline-block', width: 28, height: 1,
            background: 'var(--fg-tertiary)', verticalAlign: 'middle',
          }}></span>
          Lincoln Berbert · 2026
        </div>

        <h1 data-reveal className="t-display-xl" style={{
          maxWidth: '16ch', marginBottom: 0,
        }}>
          Working at the edge of music, intelligence,{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            and myth.
          </span>
        </h1>

        <div data-reveal style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'minmax(0,56ch) auto',
          gap: 48, alignItems: 'end',
          maxWidth: 900,
        }}>
          <p className="t-body-l" style={{ color: 'var(--fg-secondary)', lineHeight: 1.6 }}>
            Founder of LightWrk. Artist as Berby. Building the evaluation infrastructure physical AI is missing — and the worlds worth building toward.
          </p>
          <button
            onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
            className="nav-item"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              whiteSpace: 'nowrap', paddingBottom: 4,
              background: 'none', border: 0, cursor: 'pointer',
              color: 'var(--fg-primary)',
            }}>
            See the work ↓
          </button>
        </div>
      </section>

      {/* Thesis */}
      <section style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: 48,
        maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 6 }}>§ I · Practice</div>
        <div data-reveal style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3.5vw, 46px)',
          lineHeight: 1.2, letterSpacing: '-0.025em',
          maxWidth: '26ch',
        }}>
          The division between art and engineering is a convenient fiction.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            The interesting work lives past it.
          </span>
        </div>
      </section>

      {/* Selected Work preview — split */}
      <section style={{ borderTop: '1px solid var(--fg-primary)', maxWidth: 1440 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '20px clamp(20px, 5vw, 80px)',
        }}>
          <div className="t-caption" style={{ color: 'var(--fg-primary)' }}>
            Selected work · Ongoing
          </div>
          <button
            onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
            className="nav-item"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'none', border: 0, cursor: 'pointer',
              color: 'var(--fg-primary)',
            }}>
            Full index →
          </button>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid var(--rule)',
        }}>
          {/* Creative column */}
          <div style={{
            padding: 'clamp(32px, 4vw, 64px) clamp(20px, 5vw, 80px)',
            borderRight: '1px solid var(--rule)',
          }}>
            <div className="t-caption" style={{ marginBottom: 32, color: 'var(--fg-secondary)' }}>
              Creative
            </div>
            {window.CREATIVE_WORK.slice(0, 2).map(item => (
              <div key={item.id} data-reveal style={{ marginBottom: 40 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  letterSpacing: '-0.02em', lineHeight: 1.2,
                }}>
                  {item.title}
                </div>
                <div className="t-small" style={{ marginTop: 8, color: 'var(--fg-secondary)' }}>
                  {item.discipline} · {item.year}
                </div>
              </div>
            ))}
            <button
              onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: 'none', border: 0, cursor: 'pointer',
                color: 'var(--fg-tertiary)', padding: 0, marginTop: 8,
              }}>
              All creative work →
            </button>
          </div>

          {/* AI column */}
          <div style={{
            padding: 'clamp(32px, 4vw, 64px) clamp(20px, 5vw, 80px)',
          }}>
            <div className="t-caption" style={{ marginBottom: 32, color: 'var(--fg-secondary)' }}>
              AI / Companies
            </div>
            {window.AI_WORK.slice(0, 1).map(item => (
              <div key={item.id} data-reveal style={{ marginBottom: 40 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  letterSpacing: '-0.02em', lineHeight: 1.2,
                }}>
                  {item.title}
                </div>
                <div className="t-small" style={{ marginTop: 8, color: 'var(--fg-secondary)' }}>
                  {item.discipline} · {item.year}
                </div>
                <p className="t-small" style={{ marginTop: 12, color: 'var(--fg-secondary)', maxWidth: '44ch', lineHeight: 1.6 }}>
                  {item.summary}
                </p>
              </div>
            ))}
            <button
              onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: 'none', border: 0, cursor: 'pointer',
                color: 'var(--fg-tertiary)', padding: 0, marginTop: 8,
              }}>
              All AI work →
            </button>
          </div>
        </div>
      </section>

      {/* LightWrk feature */}
      <section style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        background: 'var(--fg-primary)',
        color: 'var(--bg-canvas)',
        marginTop: 96,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 48, maxWidth: 1200,
        }}>
          <div className="t-caption" style={{ paddingTop: 6, color: 'var(--fg-inverse)', opacity: 0.5 }}>
            § II · Company
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              opacity: 0.5, marginBottom: 20,
            }}>
              LightWrk · Founded 2024
            </div>
            <h2 data-reveal style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: 1.0, letterSpacing: '-0.03em',
              maxWidth: '20ch', marginBottom: 32,
              color: 'var(--bg-canvas)',
            }}>
              Structured human feedback for physical AI.
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.65,
              maxWidth: '56ch', opacity: 0.75,
              color: 'var(--bg-canvas)',
            }}>
              Physical AI systems fail in ways that are hard to label and harder to fix.
              LightWrk builds the ontologies, rubrics, and judgment pipelines
              that make human expertise trainable — the evaluation layer frontier robotics is missing.
            </p>
            <div style={{
              marginTop: 40, display: 'flex', gap: 48,
            }}>
              {[
                ['Ontology design', 'Structured failure taxonomies for embodied systems'],
                ['Rubric development', 'Scored, repeatable human judgment at scale'],
                ['Model improvement', 'Feedback that closes the loop between behavior and training'],
              ].map(([label, desc]) => (
                <div key={label} style={{ maxWidth: 200 }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    opacity: 0.5, marginBottom: 8,
                  }}>{label}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.75, color: 'var(--bg-canvas)' }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative feature */}
      <section style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 6 }}>§ III · Creative</div>
        <div>
          <h2 data-reveal style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 56px)',
            lineHeight: 1.1, letterSpacing: '-0.025em',
            maxWidth: '22ch', marginBottom: 32,
          }}>
            Music, identity, and long-form{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
              worldbuilding.
            </span>
          </h2>
          <p className="t-body" style={{
            color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65,
          }}>
            Under the name Berby, and through characters like James Judas and the prophet.
            Worlds with their own logic, sound, and time horizon.
          </p>
          <button
            onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
            style={{
              marginTop: 28,
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'none', border: 0, cursor: 'pointer',
              color: 'var(--fg-primary)', padding: 0,
              borderBottom: '1px solid var(--rule-strong)', paddingBottom: 2,
            }}>
            View creative work →
          </button>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--fg-primary)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: 32,
      }}>
        <div data-reveal style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 60px)',
          lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: '20ch',
        }}>
          Write.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            I read everything.
          </span>
        </div>
        <p className="t-body" style={{ color: 'var(--fg-secondary)', maxWidth: '36ch', lineHeight: 1.6, marginTop: 16 }}>
          AI / LightWrk, creative work, or something else — a sentence is enough context.
        </p>
        <button
          onClick={() => { setRoute('contact'); window.scrollTo(0,0); }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            padding: '14px 28px',
            border: '1px solid var(--fg-primary)',
            background: 'var(--fg-primary)', color: 'var(--bg-canvas)',
            cursor: 'pointer',
            transition: 'all 140ms cubic-bezier(0.2,0.6,0.2,1)',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--bg-canvas)'; e.target.style.color = 'var(--fg-primary)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--fg-primary)'; e.target.style.color = 'var(--bg-canvas)'; }}>
          Get in touch →
        </button>
      </section>
    </main>
  );
}

window.Home = Home;
window.WorkRow = WorkRow;
