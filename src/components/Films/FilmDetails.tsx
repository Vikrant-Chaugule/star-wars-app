import { useParams } from "react-router";
import { useFilmDetails } from "../../queries/filmsQueries";
import { useNavigate } from "react-router-dom";

import "./FilmDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";

export const FilmDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useFilmDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const { title, releaseDate, openingCrawl, producers, director } = data.film;

  const onBack = () => {
    history("/films");
  };

  return (
    <div className="film-details">
      {/* Header */}
      <div className="film-details-header">
        <BackButton onClick={onBack} />
        <h1>{title}</h1>
      </div>

      {/* Details */}
      <div className="films-details-info">
        <DetailsItemRowProps label="Release Date" info={releaseDate} />
        <DetailsItemRowProps label="Description" info={openingCrawl} />
        <DetailsItemRowProps label="Director" info={director} />
        <DetailsItemRowProps label="Producers" info={producers} />
      </div>
    </div>
  );
};
