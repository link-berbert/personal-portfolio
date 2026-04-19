import { useEffect } from "react";
import { HERO_PROFILE_PIC_SRC } from "./heroProfilePic.js";
import { WORK_LOGOS, logoMarqueeCellClass } from "./workLogos.js";

const REVEAL_BELOW_FOLD_MS = 800;
const REVEAL_EASE_DEFAULT = "cubic-bezier(0.2,0.6,0.2,1)";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 40px 0px" },
    );
    els.forEach((el) => {
      /* Hero uses CSS `@keyframes` in shell.css — IntersectionObserver + useEffect
         runs after first paint and stacked under `.page-enter`, which made type
         feel sluggish on first load. */
      if (el.closest(".home-hero")) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition = `opacity ${REVEAL_BELOW_FOLD_MS}ms ${REVEAL_EASE_DEFAULT}, transform ${REVEAL_BELOW_FOLD_MS}ms ${REVEAL_EASE_DEFAULT}`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

export default function Home({ setRoute }) {
  useReveal();

  return (
    <main>
      {/* Hero — spans the full viewport; copy stays left-aligned via padding */}
      <section
        className="home-hero"
        style={{
          position: 'relative',
          padding: 'clamp(40px, 5vw, 80px) clamp(20px, 5vw, 80px) clamp(100px, 11vw, 180px)',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div className="home-hero__text">
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

          <p
            data-reveal
            className="t-body-l min-w-0 home-hero__body"
            style={{
              marginTop: 56,
              color: 'var(--fg-secondary)',
              lineHeight: 1.6,
            }}
          >
            A multidisciplinary practice spanning music, creative direction, and physical AI.
            One point of view operating at the intersection of culture and infrastructure.
          </p>
        </div>

        <img
          className="home-hero__profile"
          src={HERO_PROFILE_PIC_SRC}
          alt=""
          width={1024}
          height={1024}
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
        />
      </section>

      {/* My work — logo marquee */}
      <section
        className="home-my-work"
        style={{
          borderTop: '1px solid var(--fg-primary)',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div className="home-my-work__bar">
          <div className="t-caption" style={{ color: 'var(--fg-primary)' }}>
            My work
          </div>
          <button
            type="button"
            onClick={() => { setRoute('work'); window.scrollTo(0, 0); }}
            className="nav-item home-my-work__cta"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              color: 'var(--fg-primary)',
            }}
          >
            View projects →
          </button>
        </div>

        <div className="logo-marquee" aria-label="Work and affiliations">
          <div className="logo-marquee__track">
            <div className="logo-marquee__group">
              {WORK_LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className={logoMarqueeCellClass(logo)}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-marquee__img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="logo-marquee__group" aria-hidden="true">
              {WORK_LOGOS.map((logo) => (
                <div
                  key={`dup-${logo.src}`}
                  className={logoMarqueeCellClass(logo)}
                >
                  <img
                    src={logo.src}
                    alt=""
                    className="logo-marquee__img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thesis — § I · Practice */}
      <section
        className="page-section--split"
        style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid',
        gridTemplateColumns: 'var(--page-split-label-width) 1fr',
        gap: 48,
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

      {/* LightWrk feature */}
      <section
        className="home-surface-ink"
        style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        background: 'var(--fg-primary)',
        color: 'var(--bg-canvas)',
        marginTop: 0,
      }}
      >
        <div
          className="page-section--split"
          style={{
          display: 'grid',
          gridTemplateColumns: 'var(--page-split-label-width) 1fr',
          gap: 48,
          width: '100%',
          boxSizing: 'border-box',
        }}
        >
          <div
            className="t-caption page-section__label"
            style={{
              paddingTop: 6,
              color: 'color-mix(in srgb, var(--fg-inverse) 50%, transparent)',
            }}
          >
            § II · Company
          </div>
          <div className="min-w-0">
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              marginBottom: 20,
              color: 'color-mix(in srgb, var(--bg-canvas) 50%, transparent)',
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
              maxWidth: '56ch',
              color: 'color-mix(in srgb, var(--bg-canvas) 75%, transparent)',
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
                    marginBottom: 8,
                    color: 'color-mix(in srgb, var(--bg-canvas) 50%, transparent)',
                  }}>{label}</div>
                  <div style={{
                    fontSize: 14, lineHeight: 1.55,
                    color: 'color-mix(in srgb, var(--bg-canvas) 75%, transparent)',
                  }}>
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
        display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr',
        gap: 48,
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
