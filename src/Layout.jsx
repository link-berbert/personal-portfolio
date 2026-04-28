import { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";
import Tweaks from "./Tweaks.jsx";
import ScrollManager from "./ScrollManager.jsx";
import { HERO_PROFILE_PIC_SRC } from "./heroProfilePic.js";

const TWEAK_DEFAULTS = {
  typeVariation: "default",
  grain: false,
};

function readStoredTheme() {
  try {
    const raw = localStorage.getItem("lb-portfolio-theme");
    if (!raw) return "light";
    try {
      const v = JSON.parse(raw);
      if (v === "dark") return "dark";
      if (v === "light") return "light";
    } catch {
      if (raw === "dark") return "dark";
    }
  } catch {
    /* ignore */
  }
  return "light";
}

/* Re-mounts the page slot on each pathname change so the existing CSS-driven
   `.page-enter` → `.page-active` transition still plays exactly when it did
   before (between top-level routes only — switching ?cat= within /work does
   not retrigger it). Home keeps the `--instant` variant so the hero text is
   not held at opacity 0 while JS runs. */
function PageTransition() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div
      key={location.pathname}
      className={isHome ? "page-enter page-enter--instant" : "page-enter"}
      ref={(el) => {
        if (el) requestAnimationFrame(() => el.classList.add("page-active"));
      }}
    >
      <Outlet />
    </div>
  );
}

export default function Layout() {
  const location = useLocation();
  const [theme, setTheme] = useState(readStoredTheme);
  const [type, setType] = useState(TWEAK_DEFAULTS.typeVariation);
  const [grain, setGrain] = useState(TWEAK_DEFAULTS.grain);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("lb-portfolio-theme", JSON.stringify(theme));
  }, [theme]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }, [theme]);

  /* Warm the hero portrait in the HTTP cache while the user is on Work /
     About / Contact so returning to Home reuses it instantly. `index.html`
     already preloads it on full page load; this covers SPA navigations away
     from Home without a reload. */
  useEffect(() => {
    if (location.pathname === "/") return;
    const id = "lb-hero-profile-pic-preload";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preload";
    link.as = "image";
    link.href = HERO_PROFILE_PIC_SRC;
    link.setAttribute("fetchpriority", "low");
    document.head.appendChild(link);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.type = type === "default" ? "" : type;
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

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ScrollManager />
      <TopBar />
      <PageTransition />
      <Footer theme={theme} setTheme={setTheme} />

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
