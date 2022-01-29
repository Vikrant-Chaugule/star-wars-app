import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_FILMS } from "../../queries/filmsQueries";
import "./Films.css";

export const Films = () => {
  const { error, loading, data } = useQuery(GET_ALL_FILMS);

  console.log(error, loading, data);

  if (error) return <p>Error</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="films">
      {/* Header */}
      <div className="films-header">
        <h1>Films</h1>
        <input placeholder="Search Film..." />
      </div>

      {/* List */}
      <div className="films-list">
        {/* List Item */}
        {data.allFilms.films.map(
          ({ id, title, releaseDate }: any, index: string) => (
            <FilmItem
              key={id}
              id={id}
              index={index}
              title={title}
              releaseDate={releaseDate}
            />
          )
        )}
      </div>
    </div>
  );
};

interface IFilmItemProp {
  id: string;
  title: string;
  releaseDate: string;
  index: string;
}

const FilmItem = ({ id, title, releaseDate, index }: IFilmItemProp) => {
  return (
    <Link to={`${id}`} className="films-list-item">
      <div className="title">
        <div>{index + 1}</div>
        <div>{title}</div>
      </div>
      <div className="sub-title">Released On {releaseDate}</div>
    </Link>
  );
};
