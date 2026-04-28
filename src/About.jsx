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
            I work across music, physical AI, and long-horizon worldbuilding. The mediums
            are different, but the underlying questions stay the same: how does something
            develop a coherent identity, how do systems improve over time, and what makes a
            project durable enough to matter years later?
          </p>
          <p className="t-body" style={bioP}>
            That throughline shows up in different forms. LightWrk is focused on structured
            human feedback systems for physical AI model improvement. Berby is the main home
            for my music and creative direction. Other projects explore narrative identity,
            aesthetic systems, and speculative worlds as long-term creative work.
          </p>
          <p className="t-body" style={bioP}>
            What connects them is not a branding exercise. It is a genuine point of view. I
            care about internal logic, atmosphere, evaluation, and the kinds of structures
            that let something become both functional and beautiful.
          </p>
          <p className="t-body" style={{ ...bioP, marginBottom: 0 }}>
            I am less interested in isolated outputs than in coherent worlds and systems that
            can evolve, compound, and hold their shape over time.
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
        <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ II · Connection</div>
        <div className="min-w-0" style={aboutContentCol}>
          <div className="headline-measure min-w-0" style={aboutSubheadStyle}>
            How my work connects across{' '}
            <span style={aboutSubheadItalic}>
               different fields.
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
                label: 'Music / Identity',
                body: 'Music is one way I work through identity, atmosphere, and coherence. With Berby and related projects, the goal is not just to make songs, but to build something with its own sound, visual language, and internal logic.',
              },
              {
                label: 'Creative Direction',
                body: 'Creative direction is where aesthetics become systems. Brand thinking, narrative structure, visual logic, and emotional tone all come down to the same question: does this feel coherent enough to hold together over time?',
              },
              {
                label: 'Physical AI',
                body: 'With LightWrk, those same instincts move into a technical domain. Evaluation only works when the system has clear structure. Ontologies, rubrics, and judgment pipelines are still acts of design, just aimed at making intelligence more legible, trainable, and useful in the real world.',
              },
              {
                label: 'Worldbuilding',
                body: 'Worldbuilding is the clearest thread running through all of it. Whether I am shaping a character, a company, or a speculative environment, the work starts with rules, identity, and internal consistency. The medium changes. The philosophy does not.',
              },
            ].map(({ label, body }) => (
              <div key={label} style={{ borderTop: '1px solid var(--rule)', paddingTop: 24 }}>
                <div className="t-caption" style={{ marginBottom: 12 }}>{label}</div>
                <p className="t-small" style={{ color: 'var(--fg-secondary)', lineHeight: 1.65 }}>{body}</p>
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
            How the philosophy shows up.{' '}
            <span style={aboutSubheadItalic}>
              Three fixed points.
            </span>
          </div>
          <ol style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {[
              ['01', 'Start with the world. The strongest work comes from a clear set of rules, not from chasing isolated deliverables.'],
              ['02', 'Build for long horizons. Projects worth doing usually take years to reveal what they are really becoming.'],
              ['03', 'The line between art and engineering matters less than people think. Both depend on understanding a system well enough to shape it with intention.'],
            ].map(([n, s]) => (
              <li key={n} className="about-philo-row" style={{
                display: 'grid', gridTemplateColumns: '48px 1fr',
                padding: '24px 0', borderTop: '1px solid var(--rule)',
                alignItems: 'baseline',
              }}>
                <span className="t-mono about-philo__num" style={{ color: 'var(--fg-tertiary)' }}>{n}</span>
                <span className="min-w-0" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  letterSpacing: '-0.015em', lineHeight: 1.35,
                }}>{s}</span>
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
