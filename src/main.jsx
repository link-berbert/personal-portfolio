import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./colors_and_type.css";
import "./shell.css";

/* Hero uses `ch` + Newsreader; fallback metrics differ, so text "snapped" after
   the webfont arrived. Wait for Newsreader (default display) before paint so
   wrapping matches the post-swap state. Tweaks "manifesto" / "research" swap
   display families after load — only the default path is gated here. */
void (async () => {
  const fontsReady = Promise.all([
    document.fonts.load("400 88px Newsreader"),
    document.fonts.load("italic 400 88px Newsreader"),
  ]).catch(() => {});
  try {
    await Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2500))]);
  } catch {
    /* unsupported */
  }
  createRoot(document.getElementById("root")).render(<App />);
})();
