import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { OG_IMAGE_SRC } from "./src/heroProfilePic.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const disableHmr = process.env.DISABLE_VITE_HMR === "1";

const META_DESCRIPTION =
  "Lincoln Berbert — builder across music, creative direction, and physical AI. Founder of LightWrk.";
const META_TITLE = "Lincoln Berbert";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 1200;
/** Canonical host (apex redirects to www on Vercel — avoid redirect on og:image fetches). */
const DEFAULT_SITE_ORIGIN = "https://www.lincolnberbert.com";

function injectSiteMetaPlugin(siteOrigin) {
  const origin = siteOrigin.trim().replace(/\/$/, "");
  return {
    name: "inject-site-meta",
    transformIndexHtml(html) {
      const ogImage = origin ? `${origin}${OG_IMAGE_SRC}` : OG_IMAGE_SRC;
      const tags = [
        ...(origin
          ? [
              `<link rel="canonical" href="${origin}/" />`,
              `<meta property="og:url" content="${origin}/" />`,
            ]
          : []),
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="${META_TITLE}" />`,
        `<meta property="og:title" content="${META_TITLE}" />`,
        `<meta property="og:description" content="${META_DESCRIPTION}" />`,
        `<meta property="og:image" content="${ogImage}" />`,
        `<meta property="og:image:type" content="image/jpeg" />`,
        `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`,
        `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`,
        `<meta property="og:image:alt" content="${META_TITLE}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${META_TITLE}" />`,
        `<meta name="twitter:description" content="${META_DESCRIPTION}" />`,
        `<meta name="twitter:image" content="${ogImage}" />`,
      ];
      return html.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
    },
  };
}

// envDir must differ from project root so Vite does not register the same path twice with chokidar.
// Duplicate watch roots + macOS fsevents can produce bogus "file changed" events and random restarts
// even when nothing is editing files (see vitejs/vite#15347 and related chokidar issues).
// Put optional secrets in env/.env — not the repo root (see env/.gitkeep).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "env"), "");
  const siteOrigin = (
    env.VITE_SITE_ORIGIN ||
    process.env.VITE_SITE_ORIGIN ||
    DEFAULT_SITE_ORIGIN
  )
    .trim()
    .replace(/\/$/, "");

  return {
    envDir: path.resolve(__dirname, "env"),
    clearScreen: false,
    plugins: [react(), injectSiteMetaPlugin(siteOrigin)],
    server: {
      host: "::",
      port: 8080,
      hmr: disableHmr ? false : { overlay: false },
      watch: {
        ignored: [
          "**/Lincoln Berbert Design System/**",
          "**/dist/**",
          "**/.git/**",
        ],
        awaitWriteFinish: {
          stabilityThreshold: 300,
          pollInterval: 50,
        },
      },
    },
    preview: {
      host: "::",
      port: 8080,
    },
  };
});
