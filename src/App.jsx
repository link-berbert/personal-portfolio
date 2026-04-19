import { useState, useEffect } from "react";
import TopBar from "./TopBar.jsx";
import Home from "./Home.jsx";
import { HERO_PROFILE_PIC_SRC } from "./heroProfilePic.js";
import Work from "./Work.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Tweaks from "./Tweaks.jsx";

const TWEAK_DEFAULTS = {
  typeVariation: "default",
  grain: false,
};

const ROUTES = new Set(["home", "work", "about", "contact"]);

function readStoredRoute() {
  try {
    const raw = localStorage.getItem("lb-portfolio-route");
    if (!raw) return "home";
    const v = JSON.parse(raw);
    if (typeof v === "string" && ROUTES.has(v)) return v;
  } catch {
    /* ignore */
  }
  return "home";
}

export default function App() {
  const [route, setRoute] = useState(readStoredRoute);
  const [type, setType] = useState(TWEAK_DEFAULTS.typeVariation);
  const [grain, setGrain] = useState(TWEAK_DEFAULTS.grain);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("lb-portfolio-route", JSON.stringify(route));
  }, [route]);

  /* Warm the hero portrait in the HTTP cache while the user is on Work /
     About / Contact so returning to Home reuses it instantly. `index.html`
     already preloads it on full page load; this covers SPA navigations away
     from Home without a reload. */
  useEffect(() => {
    if (route === "home") return;
    const id = "lb-hero-profile-pic-preload";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preload";
    link.as = "image";
    link.href = HERO_PROFILE_PIC_SRC;
    link.setAttribute("fetchpriority", "low");
    document.head.appendChild(link);
  }, [route]);

  useEffect(() => {
    document.documentElement.dataset.type = type === "default" ? "" : type;
    document.documentElement.removeAttribute("data-theme");
  }, [type]);

  useEffect(() => {
    document.getElementById("grain").classList.toggle("on", grain);
  }, [grain]);

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setEditOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setEditOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  /* Temporarily disable expensive paint effects (backdrop-filter, large
     text-shadow) while the window is actively being resized. Chromium re-
     rasterizes these on every resize frame which causes visible lag in
     Chromium-based browsers (Arc, Dia, Comet). Safari/WebKit is unaffected
     because its backdrop-filter path is hardware accelerated differently,
     but this class is safe to apply there too. */
  useEffect(() => {
    const root = document.documentElement;
    let timer = 0;
    const onResize = () => {
      root.classList.add("is-resizing");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        root.classList.remove("is-resizing");
        timer = 0;
      }, 160);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (timer) window.clearTimeout(timer);
      root.classList.remove("is-resizing");
    };
  }, []);

  const saveToFile = (edits) => {
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
  };

  const navigate = (r) => {
    setRoute(r);
    window.scrollTo(0, 0);
  };

  let screen;
  switch (route) {
    case "work":
      screen = <Work setRoute={navigate} />;
      break;
    case "about":
      screen = <About setRoute={navigate} />;
      break;
    case "contact":
      screen = <Contact />;
      break;
    default:
      screen = <Home setRoute={navigate} />;
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <TopBar route={route} setRoute={navigate} />
      <div
        key={route}
        className={
          route === "home" ? "page-enter page-enter--instant" : "page-enter"
        }
        ref={(el) => {
          if (el) requestAnimationFrame(() => el.classList.add("page-active"));
        }}
        style={{ flex: 1 }}
      >
        {screen}
      </div>
      <Footer setRoute={navigate} />

      <Tweaks
        open={editOpen}
        onClose={() => setEditOpen(false)}
        type={type}
        setType={setType}
        grain={grain}
        setGrain={setGrain}
        saveToFile={saveToFile}
      />
    </div>
  );
}
