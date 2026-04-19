# Lincoln Berbert — Portfolio UI Kit

A pixel-fidelity recreation of the portfolio as a click-thru prototype. Built as small, factored JSX components that can be reassembled for production.

## Screens

- **Home / manifesto** (`/`) — hero line, selected work, writing, footer
- **Work index** (`/work`) — all projects, filterable by discipline
- **Project detail** (`/work/:id`) — case study with hero plate, meta, essay
- **About** (`/about`) — bio, practice, collaborators
- **Contact** (`/contact`) — single form, one line of copy

## Components

| File | Purpose |
|---|---|
| `TopBar.jsx` | Wordmark · nav · theme toggle (fades on scroll down) |
| `Hero.jsx` | Display type hero with mono sub-label |
| `WorkIndex.jsx` | List of projects, hairline separated |
| `ProjectRow.jsx` | One row in the work index |
| `ProjectDetail.jsx` | Case-study layout |
| `MetaList.jsx` | Key/value metadata block |
| `Writing.jsx` | Essay list |
| `About.jsx` | Long-form bio |
| `Contact.jsx` | Form + one line |
| `Footer.jsx` | Colophon + secondary nav |
| `Tweaks.jsx` | In-design tweak panel (type variation, mode, accent) |

## Tweaks

Toggle the **Tweaks** button in the toolbar to:
- Switch between **V1 Editorial / V2 Research lab / V3 Manifesto** type directions
- Toggle **light / dark** mode
- Toggle a 1% **grain** overlay for that printed feel
