function Tweaks({ open, onClose, type, setType, theme, setTheme, grain, setGrain, saveToFile }) {
  if (!open) return null;

  const row = (label, control) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 0', borderBottom: '1px solid var(--rule)',
    }}>
      <span className="t-mono" style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{label}</span>
      {control}
    </div>
  );

  const segmented = (options, value, onChange) => (
    <div style={{ display: 'flex', border: '1px solid var(--rule)' }}>
      {options.map(([k, l]) => (
        <button key={k} onClick={() => onChange(k)} style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em',
          textTransform: 'uppercase', padding: '5px 10px',
          background: value === k ? 'var(--fg-primary)' : 'transparent',
          color: value === k ? 'var(--bg-canvas)' : 'var(--fg-tertiary)',
          border: 0, cursor: 'pointer',
        }}>{l}</button>
      ))}
    </div>
  );

  return (
    <div style={{
      position: 'fixed', bottom: 80, right: 24, zIndex: 100,
      width: 280, background: 'var(--bg-canvas)',
      border: '1px solid var(--rule)', boxShadow: 'var(--shadow-overlay)',
      padding: '20px 20px 16px',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 16,
      }}>
        <span className="t-caption">Tweaks</span>
        <button onClick={onClose} style={{
          background: 'none', border: 0, cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-tertiary)',
        }}>✕</button>
      </div>

      {row('Type style', segmented(
        [['default', 'V1'], ['research', 'V2'], ['manifesto', 'V3']],
        type,
        v => { setType(v); saveToFile({ typeVariation: v }); }
      ))}

      {row('Theme', segmented(
        [['light', 'Light'], ['dark', 'Dark']],
        theme,
        v => { setTheme(v); saveToFile({ theme: v }); }
      ))}

      {row('Grain overlay', (
        <button onClick={() => { setGrain(!grain); saveToFile({ grain: !grain }); }} style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em',
          textTransform: 'uppercase', padding: '5px 10px',
          border: '1px solid var(--rule)',
          background: grain ? 'var(--fg-primary)' : 'transparent',
          color: grain ? 'var(--bg-canvas)' : 'var(--fg-tertiary)',
          cursor: 'pointer',
        }}>{grain ? 'On' : 'Off'}</button>
      ))}

      <div style={{
        marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--rule)',
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-tertiary)',
        letterSpacing: '0.05em',
      }}>
        V1 Editorial · Lincoln Berbert Design System
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
