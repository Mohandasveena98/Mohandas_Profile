import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Work from "./content/Work";
import About from "./content/About";
import Contact from "./content/Contact";
import Nopage from "./content/Nopage";
import { Routes, Route, HashRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Mohandas_Profile" element={<App />} exact />
        <Route path="/Mohandas_Profile/work" element={<Work />} />
        <Route path="/Mohandas_Profile/about" element={<About />} />
        <Route path="/Mohandas_Profile/contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  </StrictMode>
);
