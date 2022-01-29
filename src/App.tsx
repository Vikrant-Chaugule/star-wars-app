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
import { FilmDetails } from "./components/Films/FilmDetails";
import { CharacterDetails } from "./components/Characters/CharacterDetails";
import { PlanetDetails } from "./components/Planets/PlanetDetails";
import { StarshipDetails } from "./components/Starships/StarshipDetails";
import { Footer } from "./components/Footer/Footer";
import { SpeciesDetails } from "./components/Species/SpeciesDetails";
import { VehicleDetails } from "./components/Vehicles/VehicleDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<StarshipDetails />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<SpeciesDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />

          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
