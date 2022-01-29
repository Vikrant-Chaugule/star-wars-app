import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Films } from "./components/Films/Films";
import { Characters } from "./components/Characters/Characters";
import { Planets } from "./components/Planets/Planets";
import { Species } from "./components/Species/Species";
import { Starships } from "./components/Starships/Starships";
import { Vehicles } from "./components/Vehicles/Vehicles";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/films" element={<Films />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/species" element={<Species />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
