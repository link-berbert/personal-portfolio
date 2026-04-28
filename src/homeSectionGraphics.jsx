import React from "react";

const HIT = { pointerEvents: "fill" };

/* § II — PCB processor: straight-line traces with 45° routing.
   Bilaterally symmetric about x = 160. Traces draw in on first view, then a
   faint traveling pulse loops through each pathway. Hover a trace to
   illuminate it; hover the die to light the core. */

export function FunctionalFutureGraphic({ className = "" }) {
  const traces = [
    { n: 1,  d: "M144,126 L144,96 L112,64 L56,64",   ex: 56,  ey: 64,  delay: 0 },
    { n: 2,  d: "M176,126 L176,96 L208,64 L264,64",   ex: 264, ey: 64,  delay: 0 },
    { n: 3,  d: "M126,144 L88,144 L60,116",            ex: 60,  ey: 116, delay: 0.1 },
    { n: 4,  d: "M194,144 L232,144 L260,116",          ex: 260, ey: 116, delay: 0.1 },
    { n: 5,  d: "M126,160 L40,160",                    ex: 40,  ey: 160, delay: 0.2 },
    { n: 6,  d: "M194,160 L280,160",                   ex: 280, ey: 160, delay: 0.2 },
    { n: 7,  d: "M126,176 L88,176 L60,204",            ex: 60,  ey: 204, delay: 0.3 },
    { n: 8,  d: "M194,176 L232,176 L260,204",          ex: 260, ey: 204, delay: 0.3 },
    { n: 9,  d: "M144,194 L144,224 L112,256 L56,256",  ex: 56,  ey: 256, delay: 0.4 },
    { n: 10, d: "M176,194 L176,224 L208,256 L264,256", ex: 264, ey: 256, delay: 0.4 },
  ];

  const branches = [
    { d: "M112,64 L112,44",   ex: 112, ey: 44 },
    { d: "M208,64 L208,44",   ex: 208, ey: 44 },
    { d: "M112,256 L112,276", ex: 112, ey: 276 },
    { d: "M208,256 L208,276", ex: 208, ey: 276 },
  ];

  const pinXs = [138, 144, 152, 160, 168, 176, 182];
  const pinYs = [138, 144, 152, 160, 168, 176, 182];

  return (
    <div
      className={`home-section-graphic home-section-graphic--functional ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 320 320" className="home-section-graphic__svg" fill="none" overflow="visible">
        <defs>
          <filter id="ffg-pulse-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="ffg-logo-mask-threshold" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncR type="linear" slope="2.2" intercept="-0.65" />
              <feFuncG type="linear" slope="2.2" intercept="-0.65" />
              <feFuncB type="linear" slope="2.2" intercept="-0.65" />
            </feComponentTransfer>
          </filter>
          <mask
            id="ffg-die-logo-mask"
            maskUnits="userSpaceOnUse"
            x="150"
            y="150"
            width="20"
            height="20"
            style={{ maskType: "luminance" }}
          >
            <rect x="150" y="150" width="20" height="20" fill="black" />
            <use href="#ffg-die-logo-mask-source" transform="translate(1149 1149)"
              filter="url(#ffg-logo-mask-threshold)" />
          </mask>
        </defs>

        {/* Decorative branch stubs */}
        {branches.map((b, i) => (
          <g key={`br-${i}`}>
            <path d={b.d} stroke="currentColor" strokeOpacity="0.12"
              strokeWidth="0.75" strokeLinecap="square" />
            <circle cx={b.ex} cy={b.ey} r="1.5"
              fill="currentColor" fillOpacity="0.18" />
          </g>
        ))}

        {/* Main traces — 5 symmetric pairs, top → bottom */}
        {traces.map(({ n, d, ex, ey, delay }) => (
          <g key={n} className={`ffg-trace ffg-trace-${n}`}>
            <path d={d} stroke="transparent" strokeWidth="16"
              style={{ pointerEvents: "stroke" }} />
            <path d={d} pathLength="1" stroke="currentColor" strokeWidth="0.75"
              strokeLinecap="square" className="ffg-trace-line"
              style={{ animationDelay: `${delay}s` }} />
            <path d={d} pathLength="1" stroke="currentColor" strokeWidth="2"
              strokeLinecap="square" className="ffg-trace-pulse"
              filter="url(#ffg-pulse-glow)"
              style={{ animationDelay: `${2 + delay}s` }} />
            <path d={d} pathLength="1" stroke="currentColor" strokeWidth="3"
              strokeLinecap="square" className="ffg-trace-burst"
              filter="url(#ffg-pulse-glow)" />
            <circle cx={ex} cy={ey} r="3" stroke="currentColor"
              strokeOpacity="0.12" strokeWidth="0.75" fill="currentColor"
              fillOpacity="0.03" className="ffg-endpoint-ring"
              style={{ animationDelay: `${1.4 + delay}s` }} />
            <circle cx={ex} cy={ey} r="1.5" fill="currentColor"
              fillOpacity="0.3" className="ffg-endpoint-dot"
              style={{ animationDelay: `${1.4 + delay}s` }} />
          </g>
        ))}

        {/* Die — central processor */}
        <g className="ffg-die">
          <rect x="118" y="118" width="84" height="84" fill="transparent"
            style={{ pointerEvents: "fill" }} />
          <rect x="126" y="126" width="68" height="68" rx="3"
            fill="currentColor" fillOpacity="0.02"
            stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.75" />
          <rect x="140" y="140" width="40" height="40" rx="2"
            stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
          <image id="ffg-die-logo-mask-source" className="ffg-die-logo-source"
            href="data:image/png;base64,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"
            x="-999" y="-999" width="20" height="20" />
          <rect className="ffg-die-core" x="150" y="150" width="20" height="20"
            fill="currentColor" mask="url(#ffg-die-logo-mask)" />
          {pinXs.map((x) => (
            <React.Fragment key={`pin-tb-${x}`}>
              <line x1={x} y1={126} x2={x} y2={116}
                stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" />
              <line x1={x} y1={194} x2={x} y2={204}
                stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" />
            </React.Fragment>
          ))}
          {pinYs.map((y) => (
            <React.Fragment key={`pin-lr-${y}`}>
              <line x1={126} y1={y} x2={116} y2={y}
                stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" />
              <line x1={194} y1={y} x2={204} y2={y}
                stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" />
            </React.Fragment>
          ))}
        </g>
      </svg>
    </div>
  );
}

/* § III — Musical staff + notes → globe.
   Staff lines "pluck" on hover (fast displacement, slow return). Notes glow
   when hovered. Globe details intensify on hover. No looping animations
   except subtle sparkle twinkle. */

export function BeautifulFutureGraphic({ className = "" }) {
  return (
    <div
      className={`home-section-graphic home-section-graphic--beautiful ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 320"
        className="home-section-graphic__svg"
        fill="none"
        overflow="visible"
      >
        <defs>
          <linearGradient
            id="bfg-staff-grad"
            x1="-20"
            y1="148"
            x2="250"
            y2="148"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient
            id="bfg-globe-grad"
            x1="278"
            y1="96"
            x2="386"
            y2="204"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
          </linearGradient>
          <filter id="bfg-glow">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <circle cx="332" cy="148" r="77" fill="currentColor" opacity="0.04" filter="url(#bfg-glow)" />

        {/* Staff lines (hoverable — alternating pluck direction) */}
        {[
          [108, "down", "1"],
          [128, "up",   "2"],
          [148, "down", "3"],
          [168, "up",   "4"],
          [188, "down", "5"],
        ].map(([y, dir, n]) => (
          <g key={n} className={`bfg-staff-hit bfg-staff-hit--${dir}`}>
            <rect x="-24" y={y - 10} width="278" height="20" fill="transparent" style={HIT} />
            <line x1="-20" y1={y} x2="250" y2={y} stroke="url(#bfg-staff-grad)" strokeWidth="0.75" className={`bfg-staff bfg-staff-${n}`} />
          </g>
        ))}

        {/* Notes (hoverable — larger heads, proper stems) */}
        {[
          { cx: 40,  cy: 168, stemUp: true,  open: false, n: "1" },
          { cx: 80,  cy: 128, stemUp: false, open: false, n: "2" },
          { cx: 120, cy: 158, stemUp: true,  open: false, n: "3" },
          { cx: 160, cy: 108, stemUp: false, open: false, n: "4" },
          { cx: 200, cy: 148, stemUp: true,  open: true,  n: "5" },
        ].map(({ cx, cy, stemUp, open, n }) => {
          const sx = stemUp ? cx + 8 : cx - 8;
          const sy1 = stemUp ? cy - 2 : cy + 2;
          const sy2 = stemUp ? cy - 34 : cy + 34;
          return (
            <g key={n} className={`bfg-note-hit bfg-note bfg-note-${n}`}>
              <circle cx={cx} cy={cy} r="18" fill="transparent" style={HIT} />
              <ellipse
                cx={cx} cy={cy} rx="8.5" ry="6.5"
                transform={`rotate(-12 ${cx} ${cy})`}
                className="bfg-note-mask"
              />
              <ellipse
                cx={cx}
                cy={cy}
                rx="8"
                ry="6"
                transform={`rotate(-12 ${cx} ${cy})`}
                {...(open
                  ? { stroke: "currentColor", strokeOpacity: "0.4", strokeWidth: "1.1", fill: "none" }
                  : { fill: "currentColor", fillOpacity: "0.4" }
                )}
              />
              <line
                x1={sx} y1={sy1} x2={sx} y2={sy2}
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* Globe (hoverable) */}
        <g className="bfg-globe-hit" transform="translate(332,148) scale(1.2) translate(-332,-148)">
          <circle cx="332" cy="148" r="56" fill="transparent" style={HIT} />
          <circle cx="332" cy="148" r="52" stroke="url(#bfg-globe-grad)" strokeWidth="1.25" className="bfg-globe-ring" />
          <ellipse cx="332" cy="148" rx="20" ry="52" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.75" className="bfg-meridian bfg-meridian-1" />
          <ellipse cx="332" cy="148" rx="38" ry="52" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" className="bfg-meridian bfg-meridian-2" />
          <ellipse cx="332" cy="126" rx="46" ry="9" stroke="currentColor" strokeOpacity="0.04" strokeWidth="0.5" className="bfg-meridian bfg-meridian-3" />
          <ellipse cx="332" cy="148" rx="52" ry="16" stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.75" className="bfg-meridian bfg-meridian-4" />
          <ellipse cx="332" cy="170" rx="46" ry="9" stroke="currentColor" strokeOpacity="0.04" strokeWidth="0.5" className="bfg-meridian bfg-meridian-5" />
          {/* Continent masks — bg-colored fills to hide meridian lines */}
          {/* North America mask */}
          <path d="M299,110 C302,108 306,107 310,108 C314,109 318,108 321,110 C323,112 322,115 320,117 C318,119 316,122 314,126 C312,130 310,134 307,137 C305,139 303,142 302,145 C301,147 299,146 298,144 C297,141 296,137 295,133 C294,129 294,125 294,121 C294,117 296,113 299,110Z" className="bfg-continent-mask bfg-continent-mask-1" />
          {/* Greenland mask */}
          <path d="M316,102 C319,101 322,102 323,105 C323,107 321,108 319,108 C317,108 316,106 315,104 C315,103 315,102 316,102Z" className="bfg-continent-mask bfg-continent-mask-2" />
          {/* Central America mask */}
          <path d="M302,147 C303,149 304,152 304,154 C304,156 303,157 302,155 C301,153 301,150 301,148Z" className="bfg-continent-mask bfg-continent-mask-3" />
          {/* South America mask */}
          <path d="M304,157 C308,156 312,158 315,161 C317,164 318,168 318,172 C317,176 315,180 313,184 C311,187 308,189 306,190 C304,191 303,189 302,186 C301,183 302,179 303,175 C304,171 304,167 303,163 C302,160 303,158 304,157Z" className="bfg-continent-mask bfg-continent-mask-4" />
          {/* British Isles mask */}
          <path d="M332,113 C333,112 335,112 335,114 C335,116 333,116 332,115Z" className="bfg-continent-mask bfg-continent-mask-5" />
          {/* Afro-Eurasia mask — Mediterranean notch separates Europe from Africa
              visually; Asia bridges them on the right via a narrow Sinai neck */}
          <path d="M344,105 C351,103 360,106 366,112 C372,118 377,126 380,136 C382,144 381,150 379,154 C377,157 374,155 371,153 C369,152 367,153 365,155 C361,158 358,162 355,168 C351,174 348,182 345,188 C343,192 340,192 338,190 C336,186 334,178 333,170 C332,162 331,154 331,148 C330,142 331,136 333,133 C338,131 344,131 350,132 C352,129 350,126 347,124 C342,122 337,122 334,123 C333,120 335,116 338,112 C341,109 343,106 344,105Z" className="bfg-continent-mask bfg-continent-mask-6" />

          {/* Continent fills — visible landmasses */}
          {/* North America */}
          <path d="M299,110 C302,108 306,107 310,108 C314,109 318,108 321,110
                   C323,112 322,115 320,117 C318,119 316,122 314,126
                   C312,130 310,134 307,137 C305,139 303,142 302,145
                   C301,147 299,146 298,144 C297,141 296,137 295,133
                   C294,129 294,125 294,121 C294,117 296,113 299,110Z"
            fill="currentColor" fillOpacity="0.09" className="bfg-continent bfg-continent-1" />
          {/* Greenland */}
          <path d="M316,102 C319,101 322,102 323,105 C323,107 321,108 319,108
                   C317,108 316,106 315,104 C315,103 315,102 316,102Z"
            fill="currentColor" fillOpacity="0.06" className="bfg-continent bfg-continent-2" />
          {/* Central America */}
          <path d="M302,147 C303,149 304,152 304,154 C304,156 303,157 302,155
                   C301,153 301,150 301,148Z"
            fill="currentColor" fillOpacity="0.07" className="bfg-continent bfg-continent-3" />
          {/* South America */}
          <path d="M304,157 C308,156 312,158 315,161 C317,164 318,168 318,172
                   C317,176 315,180 313,184 C311,187 308,189 306,190
                   C304,191 303,189 302,186 C301,183 302,179 303,175
                   C304,171 304,167 303,163 C302,160 303,158 304,157Z"
            fill="currentColor" fillOpacity="0.08" className="bfg-continent bfg-continent-4" />
          {/* British Isles */}
          <path d="M332,113 C333,112 335,112 335,114 C335,116 333,116 332,115Z"
            fill="currentColor" fillOpacity="0.05" className="bfg-continent bfg-continent-5" />
          {/* Afro-Eurasia — Mediterranean notch on the left, narrow Sinai
              bridge on the right. Shifted down 4px, Africa to ~y=192. */}
          <path d="M344,105
                   C351,103 360,106 366,112
                   C372,118 377,126 380,136
                   C382,144 381,150 379,154
                   C377,157 374,155 371,153
                   C369,152 367,153 365,155
                   C361,158 358,162 355,168
                   C351,174 348,182 345,188
                   C343,192 340,192 338,190
                   C336,186 334,178 333,170
                   C332,162 331,154 331,148
                   C330,142 331,136 333,133
                   C338,131 344,131 350,132
                   C352,129 350,126 347,124
                   C342,122 337,122 334,123
                   C333,120 335,116 338,112
                   C341,109 343,106 344,105Z"
            fill="currentColor" fillOpacity="0.08" className="bfg-continent bfg-continent-6" />
        </g>

        {/* Sparkles (ambient twinkle only) */}
        {[[390, 98, 6], [298, 82, 4.75], [384, 208, 5.5]].map(([x, y, s], i) => (
          <g key={`sp-${i}`} className={`bfg-sparkle bfg-sparkle-${i + 1}`}>
            <line x1={x} y1={y - s} x2={x} y2={y + s} stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.85" />
            <line x1={x - s} y1={y} x2={x + s} y2={y} stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.85" />
          </g>
        ))}
      </svg>
    </div>
  );
}
