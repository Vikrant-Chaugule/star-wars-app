import banner from "../../assets/star-wars.png";
import "./HomePage.css";
import { Link } from "react-router-dom";

import films from "../../assets/films.jpg";
import characters from "../../assets/characters.jpg";
import plannets from "../../assets/planets.jpg";
import species from "../../assets/species.jpg";
import starships from "../../assets/starships.jpg";
import vehicles from "../../assets/vehicles.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="cards-container">
        <Link to="films" className="card">
          <img src={films} alt="Films" />
          <h2>Films</h2>
        </Link>
        <Link to="characters" className="card">
          <img src={characters} alt="Films" />
          <h2>Characters</h2>
        </Link>
        <Link to="planets" className="card">
          <img src={plannets} alt="Films" />
          <h2>Planets</h2>
        </Link>
        <Link to="starships" className="card">
          <img src={starships} alt="Films" />
          <h2>Starships</h2>
        </Link>
        <Link to="species" className="card">
          <img src={species} alt="Films" />
          <h2>Species</h2>
        </Link>
        <Link to="vehicles" className="card">
          <img src={vehicles} alt="Films" />
          <h2>Vehicles</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
