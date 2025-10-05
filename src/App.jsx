import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Learning from "./components/pages/Learning";
import Date from "./components/Date";
import Kana from "./components/Kanal";
import Number from "./components/Number";
import Hiragana from "./components/Hiragan";
import Katakana from "./components/Katakana";
import Grammer from "./components/Grammer";

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/date" element={<Date />} />
        <Route path="/kana" element={<Kana />} />
        <Route path="/number" element={<Number />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/katakana" element={<Katakana />} />
        <Route path="/grammer" element={<Grammer />} />
      </Routes>
    </div>
  );
};

export default App;
