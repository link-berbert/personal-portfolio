# Lincoln Berbert — Design System

A personal design system for Lincoln Berbert, a multidisciplinary builder working across **music, design, worldbuilding, and physical AI**. The system is engineered to serve a portfolio that feels like a frontier research lab crossed with a premium creative studio — text-forward, cinematic, intellectually sharp.

> "Typography is the hero. Minimal graphics. Strong spacing. Quiet confidence, not loud futurism."

---

## Sources

- **GitHub repo:** [`link-berbert/personal-portfolio`](https://github.com/link-berbert/personal-portfolio) — the site will be built into this repo next. It was empty at the time this system was authored, so the system is generated from the written brief.
- **Reference sites studied:** a-star.co, afterquery.com, surgehq.ai, amilabs.xyz, pi.website, decart.ai, figure.ai, generalistai.com. Shared DNA: monochrome foundation, oversized display typography, tight mono labels, generous whitespace, minimal chrome.
- **No pre-existing brand assets, logo, or fonts were provided.** Everything here is a first principled draft for Lincoln to review, edit, and approve.

---

## Brand positioning

Lincoln is not a job title. He is a **practice**. The portfolio has to compress four disciplines — music, design, worldbuilding, physical AI — into a single coherent identity, so the system leans on *rigor* and *restraint* rather than diversity of visual language. Every page should feel like it was edited by the same hand.

**Tone:** intelligent, ambitious, visionary, refined, slightly mysterious. Not corporate. Not overly warm. Not personal-brand-guru. A founder/researcher/creative director with taste.

**Audience:** other high-taste operators — founders, researchers, directors, collaborators. The site is a filter as much as a showcase.

---

## Index

This folder is the manifest. The important files:

| Path | What it is |
|---|---|
| `README.md` | You are here. Brand context, content/visual/iconography fundamentals. |
| `SKILL.md` | Front-matter so this folder can be used as an Agent Skill in Claude Code. |
| `colors_and_type.css` | CSS variables for color, type, spacing, radii, motion, shadows. |
| `assets/` | Wordmark, monogram, favicon. |
| `preview/` | Design-system cards shown in the Design System tab. |
| `ui_kits/portfolio/` | Pixel-fidelity recreation of the portfolio site as a click-thru prototype. Open `ui_kits/portfolio/index.html`. |

---

## CONTENT FUNDAMENTALS

### Voice

Lincoln writes like a researcher who happens to also be an artist. Short, declarative, **confident without posturing**. He doesn't sell. He states.

- **First person singular**, used sparingly. "I build." not "Hey, I'm Lincoln! I love building cool stuff."
- **No second person.** The site never addresses the visitor as "you." It presents. The visitor overhears.
- **Present tense.** Work is a continuing practice, not a completed resume. "Building X" over "Built X."
- **Specific nouns, few adjectives.** "A real-time generative score for a film about extinction" beats "An amazing music project using AI."
- **Embrace the gap.** Leave space for the reader to do work. Don't over-explain. The best lines are 5–9 words.

### Casing

- **Sentence case** for everything: headlines, section labels, buttons. "Selected work," not "Selected Work" or "SELECTED WORK."
- **Exception:** small eyebrow labels over sections use `UPPERCASE` with wide letter-spacing (`0.18em`) as a typographic device. Rare. Reserved for ordering/structural cues ("SECTION 01 / INDEX").
- Never title case. Never ALL CAPS in body.

### Punctuation & conventions

- **Em dashes** (—) are welcome. Parenthetical thought is part of the voice.
- **Periods at the end of headlines** — full sentences, full stop. This is a signature move.
- **No exclamation marks.** Ever.
- **No emoji.** Never. Unicode symbols (⟶, ·, —, §) only when they earn their place as typographic ornament.
- **Numbers:** always numerals for years, project counts, and data (`2024`, `12 projects`). Spell out small numbers in prose ("three disciplines").
- **Lists over prose** for project metadata. Labels are mono-cased with subtle dim color.

### Sample copy (voice references)

- Hero: **"Building systems at the edge of music, intelligence, and myth."**
- Sub: **"A practice in four disciplines — one point of view."**
- Work intro: **"Selected work. Ongoing."**
- About lead: **"Lincoln Berbert is a multidisciplinary builder. He works on music, physical AI, and long-form worldbuilding — often at the same time."**
- Contact: **"Write. I read everything."** (not "Get in touch!")
- 404: **"Nothing here. Yet."**

### Things to avoid

- "Creative," "innovative," "passionate" — delete on sight.
- Any phrase that could appear on a SaaS pricing page.
- Motivational aphorisms. No Steve Jobs quotes.
- "Let's build something great together." The site does not beg.

---

## VISUAL FOUNDATIONS

### Color

**Strictly monochrome. No chromatic accent.**

The canvas is an off-white paper (`#F4F2EE` — warmer than `#FFFFFF`, feels printed rather than screen-native) and near-black ink (`#111110`). Dark mode inverts to `#0B0B0A` / `#ECEAE4`. The monochrome is *warm neutral*, never cool — the palette has a hint of paper, bone, graphite rather than cold blue-grey.

**Emphasis is ink, not hue.** Orange would read as Anthropic; any other accent would read as a lab-template cliché. The system refuses color entirely. Emphasis comes from:
- Type scale and weight
- Whitespace around an element
- Italic forms within the display serif
- A full-ink underline on hover
- Inversion (ink fill on paper surface, or paper text on ink surface)

**Full palette:** see `colors_and_type.css`. Semantic tokens: `--fg-primary`, `--fg-secondary`, `--fg-tertiary`, `--bg-canvas`, `--bg-elevated`, `--rule`, `--accent`, `--accent-hover`.

### Typography

**Typography is the product.** The system ships with three Tweak-able directions (see `ui_kits/portfolio/index.html` → Tweaks panel):

| Variation | Display | Body | Mono / Label |
|---|---|---|---|
| V1 · Editorial (default) | **Newsreader** (serif, optical-size display) | **Geist** | **Geist Mono** |
| V2 · Research lab | **Space Grotesk** | **Geist** | **Geist Mono** |
| V3 · Manifesto | **Instrument Serif** | **Geist** | **Geist Mono** |

**⚠ Font substitutions flagged.** No fonts were provided. Families selected from Google Fonts/open-source equivalents as stand-ins for the premium references the brief alludes to:
- *Newsreader* is the closest free analog to commercial display serifs (GT Sectra, Tiempos). It has genuine optical sizes which is essential for editorial display.
- *Instrument Serif* stands in for Freight Big / Plain Cream vibes.
- *Space Grotesk* replaces ABC Diatype / Neue Haas Grotesk.
- *Geist* (Vercel) is a modern, slightly-engineered neutral grotesk that reads as "frontier" without the Inter cliché.
- *Geist Mono* for all code, labels, metadata.

**If you want the premium versions, please provide the `.woff2` / `.otf` files and I will swap them in.**

**Type scale** (1.25 modular, with editorial liberties at the top):
- Display XL: 120px / 0.95 / -0.04em (hero)
- Display L: 80px / 1.0 / -0.03em
- Display M: 56px / 1.05 / -0.025em
- Heading: 32px / 1.15 / -0.02em
- Subhead: 22px / 1.35 / -0.01em
- Body: 17px / 1.55 / 0
- Small: 14px / 1.5 / 0
- Caption / label: 12px / 1.4 / 0.08em uppercase (mono)

Hanging punctuation and optical margin alignment are on for headlines (`text-wrap: balance` on h1–h3, `text-wrap: pretty` on body).

### Spacing

Based on a **4px grid** with eight significant stops: `4, 8, 12, 16, 24, 32, 48, 64, 96, 160`. Whitespace is *generous*. The page margin on desktop is 80px minimum; hero sections use 160–240px of vertical breathing room. Density is earned, not default.

### Layout

- **12-column grid** on desktop, 4-col on tablet, 4-col on mobile. Max content width 1440px; reading measure capped at 68ch.
- **Asymmetric composition.** Content almost never centers — it hangs off a baseline or column edge. The eye moves diagonally down the page.
- **Hairline rules** (1px `--rule` color) separate sections. No cards, no boxes, no drop shadows around content groups.
- **Fixed elements:** a thin top bar with wordmark + nav that fades on scroll down, returns on scroll up. No mega-menus, no hamburger.

### Backgrounds

- **Flat color only.** Canvas bg or one tier elevated. No gradients. No particle fields. No noise textures. No 3D.
- **Full-bleed imagery is allowed** when an image is the subject — reserved for project detail hero slots. Images are treated as *plates*: edge-to-edge, with a thin caption in mono beneath.
- **Optional:** a very faint 1% grain overlay on the canvas (off by default, available via Tweak) for an analog printed feel.

### Imagery mood

Warm-neutral, slightly desaturated. If color imagery is used, it skews **amber/bone** rather than cool blue. Black & white with gentle film grain is always acceptable. No stock photography. No AI-generated illustration.

### Motion

**Cinematic restraint.** Every transition is *slow and certain*.

- **Easing:** a single custom curve `cubic-bezier(0.2, 0.6, 0.2, 1.0)` for 99% of transitions. It's slightly overdamped — feels confident, never bouncy.
- **Duration:** 280ms for UI state, 480ms for page transitions, 800ms for entrance reveals.
- **No:** bounce, elastic, spring, parallax scroll hijacking, scroll-linked 3D.
- **Yes:** fade + 4px rise on entrance, text-masks for headline reveals, crossfade on route change.
- **Scroll:** native only. Smooth scroll polyfills are banned.

### Hover states

- **Links:** opacity 0.6 → 1.0 on hover, or the accent color applied to the first letter (a signature move). 140ms.
- **Nav items:** a 1px rule grows from 0 → 100% width under the label. 220ms.
- **Buttons (primary):** bg shifts one tier; no transforms, no shadows.
- **Project cards:** image scales 1.0 → 1.015 inside its frame (not the card itself). The label crossfades to a mono date.

### Press / active states

- **Buttons:** bg darkens one tier, no scale.
- **Links:** opacity 0.5 momentarily, no position change.
- Never use `scale(0.97)` click feedback — it reads as playful.

### Borders & rules

- **Default rule:** 1px, `--rule` color (very low-contrast on both modes).
- **Emphasized rule:** 1px `--fg-primary` for above-the-fold dividers.
- **No rounded corners on layout elements.** 0px default.
- **Radii** exist only on a few specific components: 2px on input fields and small controls (for tactility), 9999px on the one circular "scroll down" indicator. Cards do not have rounded corners.

### Shadows

- **There is no shadow system.** Depth comes from typography and whitespace, not elevation. A single optional subtle shadow exists for modal/overlay separation (`0 1px 2px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.10)`), used only when absolutely required.

### Transparency & blur

- **Sparingly.** The top nav uses `backdrop-filter: blur(20px) saturate(1.2)` over a 70% opacity canvas background when content has scrolled under it.
- **No frosted glass everywhere.** This is not a macOS widget gallery.

### Cards (what they actually look like)

**There are no "cards" in the SaaS sense.** Groupings are made with:
1. Typography hierarchy
2. A 1px hairline above the content
3. A generous top margin (`48–96px`)

When something must be card-like (e.g. a project in the index), it is: an image (no frame, no border, no shadow), the title below in display type, a mono caption for year + discipline, a thin hairline separating it from the next.

### Forms

Single-line inputs only. Borderless on top/left/right; one hairline on the bottom. Focus moves the rule to `--fg-primary` and shifts a mono label above the field into place. No box shadows, no rounded containers.

---

## ICONOGRAPHY

**The system is icon-minimal by design.** Most pages carry zero icons. When icons appear, they are:

1. **Typographic first.** A hairline arrow `↗` for external links. A middot `·` as a separator. Roman numerals (`§ II`) for section numbering. All set in the text font, not as SVG.
2. **Lucide (1.5px stroke, rounded caps) for UI affordances only** — closed states on menus, the arrow on a "next project" link, the expand caret on an FAQ. Loaded from CDN (`lucide@latest`). The choice is Lucide because its 1.5px geometry sits comfortably inside frontier-lab aesthetics.
3. **Never decorative.** An icon must carry function. No little flourishes in hero sections.

**No icon fonts are bundled.** Lucide is lazy-loaded from CDN (with a substitution flag — swap for your preferred set if desired).

**No emoji. No flat illustration. No hand-drawn icon style.** These would break voice.

### Logo / wordmark

Lincoln's name in the display face is the primary mark. A secondary monogram — `L·B` set in Geist Mono with a thin middot — acts as favicon and nav-bar mark. Both are typographic artifacts, not drawn lockups. See `assets/wordmark-*.svg`.

---

## How to use this system

1. If you're a human: read this file, then open `preview/*.html` or run the UI kit at `ui_kits/portfolio/index.html`.
2. If you're an agent: read `SKILL.md`, then `colors_and_type.css`, then the UI kit JSX components. Copy assets; don't hotlink.
3. Never invent colors, fonts, or icons outside this document. If something is missing, flag it and ask.
