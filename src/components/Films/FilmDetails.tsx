import { useParams } from "react-router";
import { useFilmDetails } from "../../queries/filmsQueries";
import { useNavigate } from "react-router-dom";

import "./FilmDetails.css";
import { BackButton } from "../BackButton/BackButton";

export const FilmDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useFilmDetails(id || "");
  console.log(error, loading, data);

  if (error) return <p>Error</p>;

  if (loading) return <p>Loading...</p>;

  const { title, releaseDate, openingCrawl, producers, director } = data.film;

  const onBack = () => {
    history("/films");
  };

  return (
    <div className="film-details">
      {/* Header */}
      <div className="film-details-header">
        <BackButton onClick={onBack} />
        <h1>
          {title} ({releaseDate})
        </h1>
      </div>

      {/* Details */}
      <div className="films-details-info">
        <FilmItem label="Description" info={openingCrawl} />
        <FilmItem label="Director" info={director} />
        <FilmItem label="Producers" info={producers} />
      </div>
    </div>
  );
};

const FilmItem = ({ label, info }: any) => {
  return (
    <div className="film-item">
      <p id="label">{label}</p>
      <p id="info">{info}</p>
    </div>
  );
};
