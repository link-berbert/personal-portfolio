function About({ setRoute }) {
  const pm = 'clamp(20px, 5vw, 80px)';

  return (
    <main>
      {/* Header */}
      <section style={{
        padding: `clamp(80px, 10vw, 160px) ${pm} clamp(40px, 5vw, 80px)`,
        maxWidth: 1000,
      }}>
        <div className="t-caption" style={{
          marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12,
          color: 'var(--fg-secondary)',
        }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--fg-tertiary)', verticalAlign: 'middle' }}></span>
          About
        </div>
        <h1 className="t-display-l" style={{ maxWidth: '18ch' }}>
          A practice.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
            Not a portfolio.
          </span>
        </h1>
      </section>

      {/* Bio */}
      <section style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 4 }}>§ I · Bio</div>
        <div style={{ maxWidth: '60ch' }}>
          <p className="t-body-l" style={{ marginBottom: 28, lineHeight: 1.7 }}>
            Lincoln Berbert builds across music, physical AI, and long-form worldbuilding.
          </p>
          <p className="t-body" style={{ marginBottom: 22, color: 'var(--fg-secondary)', lineHeight: 1.7 }}>
            The disciplines are different. The questions are not: how does something
            develop a coherent identity? How do you build systems that compound over time?
            These run through music, brand thinking, company building, and AI evaluation alike.
          </p>
          <p className="t-body" style={{ marginBottom: 22, color: 'var(--fg-secondary)', lineHeight: 1.7 }}>
            He is the founder of LightWrk — building structured human feedback infrastructure
            for physical AI model improvement. He records under the name Berby. Years of
            work on narrative identity systems: characters, mythologies, aesthetic grammars.
          </p>
          <p className="t-body" style={{ color: 'var(--fg-tertiary)', lineHeight: 1.7 }}>
            The connection is not positioning. Worldbuilding is a methodology.
            It works whether you are making a record or designing an evaluation rubric for a robot arm.
          </p>
        </div>
      </section>

      {/* How disciplines connect */}
      <section style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 4 }}>§ II · Connection</div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 3vw, 40px)',
            lineHeight: 1.2, letterSpacing: '-0.022em',
            maxWidth: '28ch', marginBottom: 48,
          }}>
            Worldbuilding is the method.{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>
              The medium changes.
            </span>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 40, maxWidth: 900,
          }}>
            {[
              {
                label: 'Music · Berby',
                body: 'Music as a practice in identity and atmosphere. Berby is a world before it is a sound — the sound follows from the world. Years-long projects, not singles. Characters, not songs.',
              },
              {
                label: 'Creative direction',
                body: 'Brand thinking, visual logic, narrative structure. The same questions as music, applied to organizations and ideas. Who are you? What do you look like? What is the internal logic?',
              },
              {
                label: 'Physical AI',
                body: 'LightWrk is building evaluation infrastructure for physical AI — the ontologies, rubrics, and judgment pipelines that make robot behavior trainable. Systems thinking in a technical domain.',
              },
              {
                label: 'Worldbuilding',
                body: 'A methodology as much as a medium. The ability to design a coherent world — with its own rules, aesthetics, and internal logic — is useful everywhere. It is the core skill.',
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
      <section style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 4 }}>§ III · How I work</div>
        <div>
          <ol style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {[
              ['01', 'Start with the world, not the deliverable.'],
              ['02', 'The interesting work sits at the seam between disciplines.'],
              ['03', 'Restraint is a feature. The best systems are specific about what they do and ruthless about what they don\'t.'],
              ['04', 'Long time horizons. Taste compounds.'],
              ['05', 'The gap between art and engineering is a bureaucratic fiction.'],
            ].map(([n, s]) => (
              <li key={n} style={{
                display: 'grid', gridTemplateColumns: '48px 1fr',
                padding: '24px 0', borderTop: '1px solid var(--rule)',
                alignItems: 'baseline',
              }}>
                <span className="t-mono" style={{ color: 'var(--fg-tertiary)' }}>{n}</span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  letterSpacing: '-0.015em', lineHeight: 1.35,
                }}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Background */}
      <section style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, maxWidth: 1200,
      }}>
        <div className="t-caption" style={{ paddingTop: 4 }}>§ IV · Background</div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 32, maxWidth: 800,
        }}>
          {[
            ['Companies', ['LightWrk (founder) · 2024 —']],
            ['Creative', ['Berby (artist) · 2021 —', 'James Judas · 2023 —', 'The Future is Bright · 2024']],
            ['Focus areas', ['Physical AI evaluation', 'Structured human feedback', 'Creative direction', 'Worldbuilding · narrative identity']],
            ['Interests', ['World models', 'Embodied AI', 'Frontier systems', 'Long-form narrative', 'Aesthetic systems']],
          ].map(([k, items]) => (
            <div key={k}>
              <div className="t-caption" style={{
                paddingBottom: 12, borderBottom: '1px solid var(--rule)', marginBottom: 12,
              }}>{k}</div>
              {items.map(it => (
                <div key={it} className="t-small" style={{
                  padding: '5px 0', color: 'var(--fg-primary)', lineHeight: 1.5,
                }}>{it}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: `clamp(48px, 6vw, 96px) ${pm}`,
        borderTop: '1px solid var(--fg-primary)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 3vw, 40px)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          maxWidth: '24ch',
        }}>
          If any of this is relevant to what you're building —
        </div>
        <button
          onClick={() => { setRoute('contact'); window.scrollTo(0,0); }}
          style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            padding: '14px 28px',
            border: '1px solid var(--fg-primary)',
            background: 'none', color: 'var(--fg-primary)',
            cursor: 'pointer',
            transition: 'all 140ms cubic-bezier(0.2,0.6,0.2,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--fg-primary)'; e.currentTarget.style.color = 'var(--bg-canvas)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--fg-primary)'; }}>
          Write →
        </button>
      </section>
    </main>
  );
}

window.About = About;
