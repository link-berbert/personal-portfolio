import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const disableHmr = process.env.DISABLE_VITE_HMR === "1";

// envDir must differ from project root so Vite does not register the same path twice with chokidar.
// Duplicate watch roots + macOS fsevents can produce bogus "file changed" events and random restarts
// even when nothing is editing files (see vitejs/vite#15347 and related chokidar issues).
// Put optional secrets in env/.env — not the repo root (see env/.gitkeep).
export default defineConfig({
  envDir: path.resolve(__dirname, "env"),
  clearScreen: false,
  plugins: [react()],
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
});
