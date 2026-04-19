function Work({ setRoute }) {
  const [section, setSection] = React.useState('creative'); // 'creative' | 'ai'

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
          Work · 2021 —
        </div>
        <h1 className="t-display-l" style={{ maxWidth: '18ch' }}>
          Selected work.{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--fg-secondary)' }}>Ongoing.</span>
        </h1>
      </section>

      {/* Section tabs */}
      <div style={{
        display: 'flex', gap: 0,
        padding: `0 ${pm}`,
        borderBottom: '1px solid var(--fg-primary)',
      }}>
        {[['creative', 'Creative'], ['ai', 'AI / Companies']].map(([k, label]) => (
          <button key={k}
            onClick={() => setSection(k)}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 0', marginRight: 40,
              border: 0, background: 'none', cursor: 'pointer',
              color: section === k ? 'var(--fg-primary)' : 'var(--fg-tertiary)',
              borderBottom: section === k ? '1px solid var(--fg-primary)' : '1px solid transparent',
              marginBottom: -1,
              transition: 'color var(--dur-ui) var(--ease)',
            }}>
            {label}
          </button>
        ))}
      </div>

      {/* Creative section */}
      {section === 'creative' && (
        <div style={{ padding: `0 ${pm}` }}>
          <div style={{
            padding: 'clamp(32px, 4vw, 64px) 0 24px',
            display: 'grid', gridTemplateColumns: '120px 1fr', gap: 48,
            maxWidth: 1000, borderBottom: '1px solid var(--rule)',
          }}>
            <div className="t-caption" style={{ paddingTop: 4 }}>§ I · Overview</div>
            <p className="t-body-l" style={{ color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65 }}>
              Music, identity systems, and long-form worldbuilding. Projects that take years
              to develop, resist easy categorization, and share a commitment to internal logic
              and atmospheric coherence.
            </p>
          </div>

          {window.CREATIVE_WORK.map((item, i) => (
            <CreativeRow key={item.id} item={item} isLast={i === window.CREATIVE_WORK.length - 1} />
          ))}
        </div>
      )}

      {/* AI / Companies section */}
      {section === 'ai' && (
        <div style={{ padding: `0 ${pm}` }}>
          <div style={{
            padding: 'clamp(32px, 4vw, 64px) 0 24px',
            display: 'grid', gridTemplateColumns: '120px 1fr', gap: 48,
            maxWidth: 1000, borderBottom: '1px solid var(--rule)',
          }}>
            <div className="t-caption" style={{ paddingTop: 4 }}>§ I · Overview</div>
            <p className="t-body-l" style={{ color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65 }}>
              Company building and systems thinking at the frontier of physical AI.
              The goal is infrastructure — the evaluation and feedback layer that makes
              intelligent machines genuinely trainable.
            </p>
          </div>

          {/* LightWrk feature — expanded treatment */}
          <div style={{
            padding: 'clamp(40px, 5vw, 80px) 0',
            borderBottom: '1px solid var(--rule)',
            display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24,
            maxWidth: 1200,
          }}>
            <span className="t-mono" style={{ color: 'var(--fg-tertiary)', paddingTop: 6 }}>01</span>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  letterSpacing: '-0.025em', lineHeight: 1.1,
                }}>LightWrk.</h2>
                <span className="t-mono" style={{ color: 'var(--fg-tertiary)' }}>2024 —</span>
              </div>
              <div style={{ marginBottom: 16 }}>
                {['Company · Physical AI', 'Founder'].map((t, i) => (
                  <span key={i} className="t-mono" style={{
                    fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--fg-tertiary)', marginRight: 20,
                  }}>{t}</span>
                ))}
              </div>
              <p className="t-body-l" style={{ color: 'var(--fg-secondary)', maxWidth: '56ch', lineHeight: 1.65, marginBottom: 24 }}>
                {window.AI_WORK[0].summary}
              </p>
              <p className="t-body" style={{ color: 'var(--fg-secondary)', maxWidth: '56ch', lineHeight: 1.65, marginBottom: 40 }}>
                {window.AI_WORK[0].extended}
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 32, maxWidth: 800,
                paddingTop: 32, borderTop: '1px solid var(--rule)',
              }}>
                {[
                  ['Ontology design', 'Structured failure taxonomies for embodied AI systems — the vocabulary that makes evaluation possible.'],
                  ['Rubric development', 'Scored, repeatable judgment frameworks. Human expertise made consistent enough to train on.'],
                  ['Evaluation pipelines', 'End-to-end infrastructure connecting human assessors to model improvement loops.'],
                  ['Failure taxonomy', 'Systematized categories of robot failure, designed to surface actionable training signal.'],
                ].map(([label, desc]) => (
                  <div key={label}>
                    <div className="t-caption" style={{ marginBottom: 8 }}>{label}</div>
                    <p className="t-small" style={{ color: 'var(--fg-secondary)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Physical AI thinking entry */}
          <div style={{
            padding: 'clamp(32px, 4vw, 56px) 0',
            borderBottom: '1px solid var(--rule)',
            display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24,
            maxWidth: 1200,
          }}>
            <span className="t-mono" style={{ color: 'var(--fg-tertiary)', paddingTop: 6 }}>02</span>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 3vw, 38px)',
                  letterSpacing: '-0.02em', lineHeight: 1.15,
                }}>{window.AI_WORK[1].title}</h2>
                <span className="t-mono" style={{ color: 'var(--fg-tertiary)' }}>{window.AI_WORK[1].year}</span>
              </div>
              <div style={{ marginBottom: 14 }}>
                <span className="t-mono" style={{
                  fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--fg-tertiary)', marginRight: 20,
                }}>{window.AI_WORK[1].discipline}</span>
              </div>
              <p className="t-body" style={{ color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65 }}>
                {window.AI_WORK[1].summary}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

function CreativeRow({ item, isLast }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(28px, 3.5vw, 52px) 0',
        borderBottom: isLast ? 'none' : '1px solid var(--rule)',
        display: 'grid', gridTemplateColumns: '56px 1fr auto',
        gap: 24, alignItems: 'start', maxWidth: 1200,
        transition: 'opacity var(--dur-micro) var(--ease)',
        opacity: hovered ? 1 : 0.88,
      }}>
      <span className="t-mono" style={{ color: 'var(--fg-tertiary)', paddingTop: 6 }}>
        {item.num}
      </span>
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 3vw, 42px)',
          letterSpacing: '-0.02em', lineHeight: 1.15,
          marginBottom: 12,
        }}>
          {item.title}
        </h2>
        <div style={{ marginBottom: 14 }}>
          {item.tags && item.tags.map(t => (
            <span key={t} className="t-mono" style={{
              fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--fg-tertiary)', marginRight: 18,
            }}>{t}</span>
          ))}
        </div>
        <p className="t-body" style={{
          color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65,
        }}>{item.summary}</p>
        <div className="t-small" style={{ marginTop: 10, color: 'var(--fg-tertiary)' }}>
          {item.role}
        </div>
      </div>
      <span className="t-mono" style={{
        color: 'var(--fg-tertiary)', fontSize: 12, whiteSpace: 'nowrap', paddingTop: 6,
      }}>{item.year}</span>
    </div>
  );
}

window.Work = Work;
