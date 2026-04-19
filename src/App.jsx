import { useState, useEffect } from "react";
import TopBar from "./TopBar.jsx";
import Home from "./Home.jsx";
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
        className="page-enter"
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
