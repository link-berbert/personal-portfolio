/** Paths under /public/assets/Logos for Portfolio — shared by hero marquee + Work page */
const DIR = "/assets/Logos for Portfolio";

const RAW = [
  { id: "unnamed-holdings", file: "1.png", alt: "Unnamed Holdings Co." },
  { id: "final-hour", file: "2.png", alt: "Final Hour" },
  { id: "james-judas", file: "3.png", alt: "James Judas", size: "judas" },
  { id: "creators-catalyst", file: "4.png", alt: "The Creator's Catalyst" },
  { id: "lightwrk", file: "5.png", alt: "LightWrk", size: "lightwrk" },
  { id: "ghost-project-ix", file: "6.png", alt: "Ghost Project IX", size: "ghost" },
];

/** Marquee order + metadata (greyscale treatment applied in CSS via `.logo-marquee__img`) */
export const WORK_LOGOS = RAW.map(({ file, alt, size, id }) => ({
  id,
  src: encodeURI(`${DIR}/${file}`),
  alt,
  size,
}));

export function getWorkLogoByProjectId(projectId) {
  return WORK_LOGOS.find((l) => l.id === projectId) ?? null;
}

export function logoMarqueeCellClass(logo) {
  let c = "logo-marquee__cell";
  if (!logo) return c;
  if (logo.size === "judas") c += " logo-marquee__cell--judas";
  if (logo.size === "ghost") c += " logo-marquee__cell--ghost";
  if (logo.size === "lightwrk") c += " logo-marquee__cell--lightwrk";
  return c;
}
