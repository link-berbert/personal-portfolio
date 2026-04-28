import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Work from "./Work.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Anything else lands back on Home rather than a blank screen. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
