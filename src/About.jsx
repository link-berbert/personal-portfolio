export default function About({ setRoute }) {
  const pm = 'clamp(20px, 5vw, 80px)';
  const aboutContentCol = { maxWidth: 900, width: '100%' };
  const bioP = {
    marginBottom: 22,
    color: 'var(--fg-secondary)',
    lineHeight: 1.7,
  };
  const aboutSubheadStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(24px, 3vw, 40px)',
    lineHeight: 1.2,
    letterSpacing: '-0.022em',
    maxWidth: '100%',
    marginBottom: 48,
  };
  const aboutSubheadItalic = { fontStyle: 'italic', color: 'var(--fg-secondary)' };

  return (
    <main>
      {/* Header */}
      <section style={{
        padding: `clamp(80px, 10vw, 160px) ${pm} clamp(40px, 5vw, 80px)`,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption" style={{
          marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12,
          color: 'var(--fg-secondary)',
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--fg-tertiary)', verticalAlign: 'middle' }}></span>
          About
        </div>
        <h1 className="t-display-l headline-measure" style={{ maxWidth: '18ch' }}>
          One philosophy.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            Infinite canvases.
          </span>
        </h1>
      </section>

      {/* Bio */}
      <section
        className="page-section--split"
        style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ I · Bio</div>
        <div className="min-w-0" style={aboutContentCol}>
          <div className="headline-measure min-w-0" style={aboutSubheadStyle}>
            Overview of my work {' '}
            <span style={aboutSubheadItalic}>
              and background.
            </span>
          </div>
          <p className="t-body" style={bioP}>
            I work across music, physical AI, and long-horizon worldbuilding. On paper,
            those fields can look unrelated. In practice, they are all ways of asking the
            same questions: how do you shape something with a real point of view, how do you
            improve it over time, and how do you build a future that is worth
            living in?
          </p>
          <p className="t-body" style={bioP}>
            I am drawn to work that feels internally true to itself. Things with enough structure,
            taste, and clarity to become timeless. Sometimes that manifests as
            a music project or narrative identity, other times it's a company, an evaluation
            framework, or a larger system meant to make intelligence more useful in the real
            world.
          </p>
          <p className="t-body" style={bioP}>
            What ties it all together is that I do not think function and beauty should be
            separated. If machine intelligence is going to shape the future, then that future
            should not only work. It should also feel considered, coherent, and human. The
            systems we build should be capable, but they should also reflect judgment, taste,
            and intention.
          </p>
          <p className="t-body" style={{ ...bioP, marginBottom: 0 }}>
            That is why I build on long horizons. I care less about isolated outputs
            than about worlds, systems, and identities that can evolve over time and still
            hold their shape. I want to build a future that is more intelligent, more
            usable, and more beautiful at the same time.
          </p>
        </div>
      </section>

      {/* How disciplines connect */}
      <section
        className="page-section--split"
        style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ II · Disciplines</div>
        <div className="min-w-0" style={aboutContentCol}>
          <div className="headline-measure min-w-0" style={aboutSubheadStyle}>
            How my pursuits{' '}
            <span style={aboutSubheadItalic}>
               connect.
            </span>
          </div>

          <div
            className="about-connection-grid"
            style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 40,
          }}
          >
            {[
              {
                label: 'Music',
                body: 'Music is one way I work through identity, atmosphere, and coherence. With Berby and related projects, the goal is not just to make songs, but to build something with its own sound, visual language, and internal logic.',
              },
              {
                label: 'Entrepreneurship',
                body: 'Entrepreneurship is how I build durability. It is where vision becomes structure, judgment turns into systems, and ideas are forced to prove themselves in the real world. The goal is not just to start things, but to build something that stands the test of time.',
              },
              {
                label: 'Physical AI',
                body: 'With LightWrk, I am applying my philosophy to a technical domain. Evaluation only works when the system has clear structure. Ontologies, rubrics, and judgment pipelines are still acts of design, just aimed at making intelligence more legible, trainable, and useful in the real world.',
              },
              {
                label: 'Worldbuilding',
                body: 'Worldbuilding is the clearest thread running through all of my work. Whether I am shaping a character, a company, or a speculative environment, the work starts with rules, identity, and internal consistency. The medium may change but the philosophy does not.',
              },
            ].map(({ label, body }) => (
              <div key={label} style={{ borderTop: '1px solid var(--rule)', paddingTop: 24 }}>
                <div className="t-caption" style={{ marginBottom: 12 }}>{label}</div>
                <p className="t-body" style={{ color: 'var(--fg-secondary)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="page-section--split"
        style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr',
        gap: 48,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ III · Principles</div>
        <div className="min-w-0" style={aboutContentCol}>
          <div className="headline-measure min-w-0" style={aboutSubheadStyle}>
            My{' '}
            <span style={aboutSubheadItalic}>
              core principles.
            </span>
          </div>
          <ol style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {[
              ['01', 'Stay curious', "Better questions matter more than quick answers."],
              ['02', 'Edit ruthlessly', "Good work gets sharper through removal. Trust your taste."],
              ['03', 'Build for long horizons', "All projects worth doing take years. Don't chase the quick win."],
            ].map(([n, title, s]) => (
              <li key={n} className="about-philo-row" style={{
                display: 'grid', gridTemplateColumns: '48px 1fr',
                padding: '24px 0', borderTop: '1px solid var(--rule)',
                alignItems: 'baseline',
              }}>
                <span className="t-mono about-philo__num" style={{ color: 'var(--fg-tertiary)' }}>{n}</span>
                <span className="min-w-0" style={{ display: 'block' }}>
                  <span style={{
                    display: 'block',
                    marginBottom: 10,
                    color: 'var(--fg-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.2vw, 26px)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.35,
                  }}>
                    {title}
                  </span>
                  <span className="t-body" style={{ color: 'var(--fg-secondary)', lineHeight: 1.7 }}>
                    {s}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA — ink band (matches home closing; inverts in dark mode) */}
      <section
        className="page-cta-row home-surface-ink"
        style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        background: 'var(--fg-primary)',
        color: 'var(--bg-canvas)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
        width: '100%',
        boxSizing: 'border-box',
      }}
      >
        <div className="headline-measure min-w-0" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 3vw, 40px)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          maxWidth: '24ch',
        }}>
          If any of this is relevant to what you're building —
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
          Write me →
        </button>
      </section>
    </main>
  );
}
