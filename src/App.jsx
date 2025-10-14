import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import Navbar from "./components/Navbar";

// Destination pages
import AttabadLake from "./pages/AttabadLake";
import HunzaValley from "./pages/HunzaValley";
import NaltarValley from "./pages/NaltarValley";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Destination Routes */}
        <Route path="/attabad-lake" element={<AttabadLake />} />
        <Route path="/hunza-valley" element={<HunzaValley />} />
        <Route path="/naltar-valley" element={<NaltarValley />} />
      </Routes>
    </Router>
  );
}

export default App;
