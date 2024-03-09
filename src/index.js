import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Work from "./content/Work";
import About from "./content/About";
import Contact from "./content/Contact";
import Nopage from "./content/Nopage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  </StrictMode>
);
