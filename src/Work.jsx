import { useState } from "react";
import { CREATIVE_WORK, AI_WORK } from "./data.js";
import { getWorkLogoByProjectId, logoMarqueeCellClass } from "./workLogos.js";

const NE_ARROW = "\u2197";

/** Role string → same chips as former category tags (split on commas). */
function workRoleAsTags(role) {
  if (!role || typeof role !== "string") return [];
  return role.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
}

function WorkExternalLink({ href, label }) {
  const trimmed = label.trimEnd();
  const endsWithArrow = trimmed.endsWith(NE_ARROW);
  const textBeforeArrow = endsWithArrow ? trimmed.slice(0, -1).trimEnd() : trimmed;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="work-external-link"
    >
      {endsWithArrow ? (
        <>
          {textBeforeArrow}
          {" "}
          <span className="work-external-link__arrow" aria-hidden>
            {NE_ARROW}
          </span>
        </>
      ) : (
        label
      )}
    </a>
  );
}

function WorkPageLogo({ projectId }) {
  const logo = getWorkLogoByProjectId(projectId);
  if (!logo) return null;
  return (
    <div className="work-entry__logo" data-logo-id={projectId}>
      <div className={logoMarqueeCellClass(logo)}>
        <img
          src={logo.src}
          alt=""
          className="logo-marquee__img"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default function Work({ setRoute }) {
  const [section, setSection] = useState("creative"); // 'creative' | 'ai'

  const pm = 'clamp(20px, 5vw, 80px)';

  const workTabs = [
    ['creative', 'Creative', 'Music, identity, worldbuilding'],
    ['ai', 'AI / Companies', 'Physical AI & company building'],
  ];

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
          Work · 2022 —
        </div>
        <h1 className="t-display-l headline-measure" style={{ maxWidth: '18ch' }}>
          Selected work.
        </h1>
      </section>

      {/* Section tabs — segmented control + hints */}
      <div style={{
        padding: `0 ${pm} clamp(28px, 4vw, 48px)`,
        borderBottom: '1px solid var(--rule)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div className="t-caption" style={{
          marginBottom: 14,
          color: 'var(--fg-secondary)',
        }}>
          Browse by category
        </div>
        <div
          role="tablist"
          aria-label="Work categories"
          style={{
            display: 'flex',
            width: 'min(380px, 100%)',
            maxWidth: '100%',
            background: 'var(--rule)',
            gap: 1,
            padding: 1,
          }}
        >
          {workTabs.map(([k, label, hint]) => {
            const active = section === k;
            return (
              <button
                key={k}
                type="button"
                role="tab"
                className="work-section-tab"
                aria-selected={active}
                aria-label={`${label}. ${hint}`}
                id={`work-tab-${k}`}
                onClick={() => setSection(k)}
                style={{
                  flex: '1 1 0',
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  gap: 4,
                  padding: '9px 12px',
                  border: 0,
                  cursor: 'pointer',
                  textAlign: 'left',
                  background: active ? 'var(--fg-primary)' : 'var(--bg-canvas)',
                  color: active ? 'var(--fg-inverse)' : 'var(--fg-secondary)',
                  transition: 'background var(--dur-ui) var(--ease), color var(--dur-ui) var(--ease)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    fontWeight: active ? 500 : 400,
                    width: '100%',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    letterSpacing: 0,
                    textTransform: 'none',
                    fontWeight: 400,
                    lineHeight: 1.35,
                    width: '100%',
                    color: active
                      ? 'color-mix(in oklab, var(--fg-inverse) 78%, transparent)'
                      : 'var(--fg-tertiary)',
                    transition: 'color var(--dur-ui) var(--ease)',
                  }}
                >
                  {hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Creative section */}
      {section === 'creative' && (
        <div role="tabpanel" id="work-panel-creative" aria-labelledby="work-tab-creative" style={{ padding: `0 ${pm}` }}>
          <div
            className="page-section--split"
            style={{
            padding: 'clamp(32px, 4vw, 64px) 0 24px',
            display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr', gap: 48,
            width: '100%',
            boxSizing: 'border-box',
            borderBottom: '1px solid var(--rule)',
          }}
          >
            <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ I · Overview</div>
            <p className="t-body min-w-0" style={{ color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65 }}>
              Music, identity systems, and long-form worldbuilding. Projects that take years
              to develop, resist easy categorization, and share a commitment to internal logic
              and atmospheric coherence.
            </p>
          </div>

          {CREATIVE_WORK.map((item, i) => (
            <CreativeRow key={item.id} item={item} isLast={i === CREATIVE_WORK.length - 1} />
          ))}
        </div>
      )}

      {/* AI / Companies section */}
      {section === 'ai' && (
        <div role="tabpanel" id="work-panel-ai" aria-labelledby="work-tab-ai" style={{ padding: `0 ${pm}` }}>
          <div
            className="page-section--split"
            style={{
            padding: 'clamp(32px, 4vw, 64px) 0 24px',
            display: 'grid', gridTemplateColumns: 'var(--page-split-label-width) 1fr', gap: 48,
            width: '100%',
            boxSizing: 'border-box',
            borderBottom: '1px solid var(--rule)',
          }}
          >
            <div className="t-caption page-section__label" style={{ paddingTop: 4 }}>§ I · Overview</div>
            <p className="t-body min-w-0" style={{ color: 'var(--fg-secondary)', maxWidth: '52ch', lineHeight: 1.65 }}>
              Companies and creative structures — physical AI infrastructure, multidisciplinary
              studios, and advisory practice — built for long-horizon work and coherent systems.
            </p>
          </div>

          {/* LightWrk — same row/grid + type scale as Creative */}
          <div
            className="work-entry-row"
            style={{
            padding: 'clamp(28px, 3.5vw, 52px) 0',
            borderBottom: '1px solid var(--rule)',
            width: '100%',
            boxSizing: 'border-box',
          }}
          >
            <div className="work-entry__rail">
              <div className="work-entry__brand">
                <WorkPageLogo projectId="lightwrk" />
                <h2 className="sr-only">LightWrk.</h2>
              </div>
            </div>
            <div className="work-entry__body min-w-0">
              <div className="work-entry__main-text">
                <div className="work-entry__tags" style={{ marginBottom: 14 }}>
                  {workRoleAsTags(AI_WORK[0].role).map((t, i) => (
                    <span key={`${i}-${t}`} className="t-mono" style={{
                      fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--fg-tertiary)', marginRight: 18,
                    }}>{t}</span>
                  ))}
                </div>
                <p className="t-body min-w-0" style={{ color: 'var(--fg-secondary)', lineHeight: 1.65 }}>
                  {AI_WORK[0].summary}
                </p>
                <p className="t-body min-w-0" style={{
                  color: 'var(--fg-secondary)', lineHeight: 1.65, marginTop: 16,
                }}>
                  {AI_WORK[0].extended}
                </p>
              </div>
              <div className="work-entry__tail">
                {AI_WORK[0].capabilities.map(([label, desc]) => (
                  <div key={label}>
                    <div className="t-caption" style={{ marginBottom: 8 }}>{label}</div>
                    <p className="t-body min-w-0" style={{ color: 'var(--fg-secondary)', lineHeight: 1.65 }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
              {AI_WORK[0].externalLink && (
                <div className="work-entry__main-text work-entry__main-text--after-capabilities min-w-0">
                  <WorkExternalLink
                    href={AI_WORK[0].externalLink.href}
                    label={AI_WORK[0].externalLink.label}
                  />
                </div>
              )}
            </div>
            <span className="t-mono work-entry__year" style={{
              color: 'var(--fg-tertiary)', fontSize: 12, whiteSpace: 'nowrap',
            }}>{AI_WORK[0].year}</span>
          </div>

          {AI_WORK.slice(1).map((item, i, arr) => (
            <CreativeRow
              key={item.id}
              item={item}
              isLast={i === arr.length - 1}
            />
          ))}
        </div>
      )}

    </main>
  );
}

function CreativeRow({ item, isLast }) {
  const [hovered, setHovered] = useState(false);
  const hasLogo = !!getWorkLogoByProjectId(item.id);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="work-entry-row"
      style={{
        padding: 'clamp(28px, 3.5vw, 52px) 0',
        borderBottom: isLast ? 'none' : '1px solid var(--rule)',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'opacity var(--dur-micro) var(--ease)',
        opacity: hovered ? 1 : 0.88,
      }}>
      <div className="work-entry__rail">
        <div className="work-entry__brand">
          <WorkPageLogo projectId={item.id} />
          <h2
            className={hasLogo ? "sr-only" : undefined}
            style={hasLogo ? undefined : {
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 42px)',
              letterSpacing: '-0.02em', lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            {item.title}
          </h2>
        </div>
      </div>
      <div className="work-entry__body min-w-0">
        <div className="work-entry__main-text">
          <div className="work-entry__tags" style={{ marginBottom: 14 }}>
            {workRoleAsTags(item.role).map((t, i) => (
              <span key={`${i}-${t}`} className="t-mono" style={{
                fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--fg-tertiary)', marginRight: 18,
              }}>{t}</span>
            ))}
          </div>
          <p className="t-body min-w-0" style={{
            color: 'var(--fg-secondary)', lineHeight: 1.65,
          }}>{item.summary}</p>
          {item.externalLink && (
            <WorkExternalLink
              href={item.externalLink.href}
              label={item.externalLink.label}
            />
          )}
        </div>
      </div>
      <span className="t-mono work-entry__year" style={{
        color: 'var(--fg-tertiary)', fontSize: 12, whiteSpace: 'nowrap',
      }}>{item.year}</span>
    </div>
  );
}
