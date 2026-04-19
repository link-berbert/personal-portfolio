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

export default function App() {
  const [route, setRoute] = useState("home");
  const [type, setType] = useState(TWEAK_DEFAULTS.typeVariation);
  const [grain, setGrain] = useState(TWEAK_DEFAULTS.grain);
  const [editOpen, setEditOpen] = useState(false);
  const [pageKey, setPageKey] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("lb-portfolio-route");
    if (saved) {
      try {
        setRoute(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
  }, []);
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
    setPageKey((k) => k + 1);
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
        key={pageKey}
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
