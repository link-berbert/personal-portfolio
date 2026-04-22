import { useEffect } from "react";
import { HERO_PROFILE_PIC_SRC } from "./heroProfilePic.js";
import { WORK_LOGOS, logoMarqueeCellClass } from "./workLogos.js";

/** Shared display scale for home § I / § II / § III primary ledes */
const homeSectionLedeTypo = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(28px, 4vw, 56px)",
  lineHeight: 1.1,
  letterSpacing: "-0.025em",
};

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
            Building music, myth, and{' '}
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
            Regardless of medium, the philosophy is the same — create systems that are both functional and beautiful.
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

      {/* Thesis — § I · Practice (mirrored rail vs § II) */}
      <section
        className="page-section--split page-section--split--mirror home-vision-split"
        style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div className="t-caption page-section__label" style={{ paddingTop: 6 }}>§ I · Vision</div>
        <div
          data-reveal
          className="min-w-0 home-vision-lede"
          style={{
          ...homeSectionLedeTypo,
          maxWidth: '100%',
        }}
        >
          <span className="home-vision-line">
            A future where intelligence is democratized,{" "}
          </span>
          <span
            className="home-vision-line home-vision-line--bottom"
            style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}
          >
            and humans are defined by their beauty.
          </span>
        </div>
      </section>

      {/* LightWrk feature */}
      <section
        className="home-surface-ink"
        style={{
        /* Padding, ink-pad vars, and the wider-viewport bleed live in shell.css so a
           media query can flip them below --home-ink-narrow-bp without !important. */
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
            § II · AI / Companies
          </div>
          <div className="min-w-0">
            <h2 data-reveal className="headline-measure" style={{
              ...homeSectionLedeTypo,
              maxWidth: '26ch', marginBottom: 32,
              color: 'var(--bg-canvas)',
            }}>
              Physical AI, organizational<br />structures, and{' '}
              <span style={{ fontStyle: 'italic', color: 'color-mix(in srgb, var(--bg-canvas) 65%, transparent)' }}>
              business ventures.
            </span>
            </h2>
            <p className="home-mobile-link-line" style={{
              fontSize: 17, lineHeight: 1.65,
              maxWidth: '56ch',
              color: 'color-mix(in srgb, var(--bg-canvas) 75%, transparent)',
            }}>
              A vision only matters if it can be implemented, repeated, and sustained. The future isn't built by ideas alone. 
              Companies provide the structure, leverage, and durable systems that make ambitious work possible over time. 
              Physical AI extends that logic into the real world through intelligence that is embodied, actionable, and materially useful.
              <br />
              <br />
              See how I am building towards a{" "}
              <span className="home-mobile-link-target">
                <span className="home-mobile-link-label">functional future:</span>
                <button
                  className="home-inline-link home-inline-link--inverse"
                  onClick={() => {
                    window.location.hash = "ai-companies";
                    setRoute('work');
                    window.scrollTo(0, 0);
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    backgroundColor: 'transparent', border: 0, cursor: 'pointer',
                    '--home-inline-link-color': 'var(--bg-canvas)',
                    '--home-inline-link-rule': 'color-mix(in srgb, var(--bg-canvas) 70%, transparent)',
                    padding: 0,
                    position: 'relative', top: -2,
                    borderBottom: '1px solid var(--home-inline-link-rule)', paddingBottom: 1,
                  }}>
                  View AI / Companies work →
                </button>
              </span>
            </p>
            </div>
          </div>
      </section>

      {/* Creative feature (mirrored rail vs § II) */}
      <section
        className="page-section--split page-section--split--mirror"
        style={{
        padding: 'clamp(64px, 8vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--rule)',
        display: 'grid',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div className="t-caption page-section__label" style={{ paddingTop: 6 }}>§ III · Creative</div>
        <div className="min-w-0">
          <h2 data-reveal className="headline-measure" style={{
            ...homeSectionLedeTypo,
            maxWidth: '26ch', marginBottom: 32,
          }}>
            Music, design, and long-form{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
              worldbuilding.
            </span>
          </h2>
          <p className="t-body home-mobile-link-line" style={{
            color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65,
          }}>
            Whether it's Leonardo da Vinci, Jony Ive, or Virgil Abloh, history keeps proving the same thing: given any tool, humans will try to make something beautiful with it.
             Technology is no different. When machines can do anything, artistic expression, entertainment, and storytelling become the defining features of human intelligence.
             <br />
             <br />
             See how I am building towards a{" "}
             <span className="home-mobile-link-target">
               <span className="home-mobile-link-label">beautiful future:</span>
               <button
                 className="home-inline-link home-inline-link--default"
                 onClick={() => {
                   window.location.hash = "creative-work";
                   setRoute('work');
                   window.scrollTo(0, 0);
                 }}
                 style={{
                   fontFamily: 'var(--font-mono)', fontSize: 12,
                   letterSpacing: '0.08em', textTransform: 'uppercase',
                   backgroundColor: 'transparent', border: 0, cursor: 'pointer',
                   '--home-inline-link-color': 'var(--fg-primary)',
                   '--home-inline-link-rule': 'var(--rule-strong)',
                   padding: 0,
                   position: 'relative', top: -2,
                   borderBottom: '1px solid var(--home-inline-link-rule)', paddingBottom: 1,
                 }}>
                 View creative work →
               </button>
             </span>
          </p>
        </div>
      </section>

      {/* Closing CTA — same ink band as § II (inverts in dark mode) */}
      <section
        className="home-closing-cta home-surface-ink"
        style={{
        padding: 'clamp(64px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        background: 'var(--fg-primary)',
        color: 'var(--bg-canvas)',
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
          maxWidth: 'min(34ch, 100%)',
        }}>
          Send a note.{' '}
          <span style={{
            fontStyle: 'italic',
            color: 'color-mix(in srgb, var(--bg-canvas) 50%, transparent)',
          }}>
            I read{'\u00a0'}everything.
          </span>
        </div>
        <button
          type="button"
          onClick={() => { setRoute('contact'); window.scrollTo(0,0); }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            padding: '14px 28px',
            border: '1px solid var(--bg-canvas)',
            background: 'transparent',
            color: 'var(--bg-canvas)',
            cursor: 'pointer',
            transition: 'all 140ms cubic-bezier(0.2,0.6,0.2,1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-canvas)';
            e.currentTarget.style.color = 'var(--fg-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--bg-canvas)';
          }}
        >
          Get in touch →
        </button>
      </section>
    </main>
  );
}
