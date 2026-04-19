import { useState, useEffect } from "react";
import { CREATIVE_WORK, AI_WORK } from "./data.js";

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
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-reveal
      className="work-entry-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto',
        gap: 24, alignItems: 'baseline',
        padding: '28px 0',
        borderBottom: '1px solid var(--rule)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--dur-micro) var(--ease)',
      }}>
      <span className="t-mono work-entry__num" style={{ color: 'var(--fg-tertiary)' }}>
        {item.num}
      </span>
      <div className="work-entry__body min-w-0">
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
      <div className="t-mono work-entry__year" style={{
        color: 'var(--fg-tertiary)', fontSize: 12, whiteSpace: 'nowrap',
        opacity: hovered ? 1 : 0.6,
        transition: 'opacity var(--dur-micro) var(--ease)',
      }}>
        {item.year}
      </div>
    </div>
  );
}

export default function Home({ setRoute }) {
  useReveal();

  return (
    <main>
      {/* Hero — content width matches all sections (see --max-content) */}
      <section style={{
        padding: 'clamp(80px, 12vw, 200px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 140px)',
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
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

        <h1 data-reveal className="t-display-l headline-measure" style={{
          maxWidth: '18ch', marginBottom: 0,
        }}>
          Building worlds, systems, and infrastructure for{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            machine intelligence.
          </span>
        </h1>

        <div
          data-reveal
          className="hero-cta"
          style={{
            marginTop: 56,
            width: '100%',
          }}
        >
          <p
            className="t-body-l min-w-0"
            style={{
              color: 'var(--fg-secondary)',
              lineHeight: 1.6,
              maxWidth: '56ch',
            }}
          >
            A multidisciplinary practice spanning music, creative direction, and physical AI.
            One point of view operating at the intersection of culture and infrastructure.
          </p>
          <button
            type="button"
            onClick={() => { setRoute('work'); window.scrollTo(0,0); }}
            className="nav-item"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              whiteSpace: 'nowrap', paddingBottom: 4,
              background: 'none', border: 0, cursor: 'pointer',
              color: 'var(--fg-primary)',
              alignSelf: 'end',
              flexShrink: 0,
            }}
          >
            See the work ↓
          </button>
        </div>
      </section>

      {/* Thesis */}
      <section
        className="page-section--split"
        style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        gap: 48,
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption page-section__label" style={{ paddingTop: 6 }}>§ I · Practice</div>
        <div data-reveal className="min-w-0" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(26px, 3.5vw, 46px)',
          lineHeight: 1.2, letterSpacing: '-0.025em',
          maxWidth: '26ch',
        }}>
          I don't believe the division between art and engineering is real.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            I believe the interesting work lives past the point where the categories stop working.
          </span>
        </div>
      </section>

      {/* Selected Work preview — split */}
      <section style={{
        borderTop: '1px solid var(--fg-primary)',
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div
          className="home-sw-header"
          style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '20px clamp(20px, 5vw, 80px)',
        }}
        >
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

        <div
          className="home-sw-cols"
          style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid var(--rule)',
        }}
        >
          {/* Creative column */}
          <div style={{
            padding: 'clamp(32px, 4vw, 64px) clamp(20px, 5vw, 80px)',
            borderRight: '1px solid var(--rule)',
          }}>
            <div className="t-caption" style={{ marginBottom: 32, color: 'var(--fg-secondary)' }}>
              Creative
            </div>
            {CREATIVE_WORK.slice(0, 2).map(item => (
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
            {AI_WORK.slice(0, 1).map(item => (
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
        <div
          className="page-section--split"
          style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: 48,
          maxWidth: 'var(--max-content)',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
        >
          <div className="t-caption page-section__label" style={{ paddingTop: 6, color: 'var(--fg-inverse)', opacity: 0.5 }}>
            § II · Company
          </div>
          <div className="min-w-0">
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              opacity: 0.5, marginBottom: 20,
            }}>
              LightWrk · Founded 2024
            </div>
            <h2 data-reveal className="headline-measure" style={{
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
              LightWrk is building the ontologies, rubrics, and judgment pipelines
              that turn human expertise into training signal — the evaluation layer
              that frontier robotics is still missing.
            </p>
            <div
              className="lightwrk-cards"
              style={{
              marginTop: 40, display: 'flex', gap: 48,
            }}
            >
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
      <section
        className="page-section--split"
        style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48,
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption page-section__label" style={{ paddingTop: 6 }}>§ III · Creative</div>
        <div className="min-w-0">
          <h2 data-reveal className="headline-measure" style={{
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
            Under the name Berby, and through characters like James Judas,
            Lincoln builds worlds — aesthetic systems with internal logic, narrative structure,
            and a sound. Creative work that takes the long view.
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
      <section
        className="home-closing-cta"
        style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--fg-primary)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: 32,
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div data-reveal className="headline-measure min-w-0" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 60px)',
          lineHeight: 1.05, letterSpacing: '-0.025em',
          maxWidth: '20ch',
        }}>
          Send a note.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            I read everything.
          </span>
        </div>
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
