import banner from "../../assets/star-wars-title.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="cards-container">
        <div className="card">Films</div>
        <div className="card">Characters</div>
        <div className="card">Planets</div>
        <div className="card">Species</div>
        <div className="card">Starships</div>
        <div className="card">Vehicles</div>
      </div>
    </div>
  );
};

export default HomePage;
