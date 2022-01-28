import banner from "../../assets/star-wars-title.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="cards-container">
        <Link to="films" className="card">
          Films
        </Link>
        <Link to="characters" className="card">
          Characters
        </Link>
        <Link to="planets" className="card">
          Planets
        </Link>
        <Link to="species" className="card">
          Species
        </Link>
        <Link to="starships" className="card">
          Starships
        </Link>
        <Link to="vehicles" className="card">
          Vehicles
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
