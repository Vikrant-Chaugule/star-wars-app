import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "../../queries/filmsQueries";
import { ListItem } from "../ListItem/ListItem";
import "./Films.css";

export const Films = () => {
  const { error, loading, data } = useQuery(GET_ALL_FILMS);

  if (error) return <p>Error</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="films">
      <div className="films-header">
        <h1>Films</h1>
        <input placeholder="Search Film..." />
      </div>

      <div className="films-list">
        {data.allFilms.films.map(
          ({ id, title, releaseDate }: any, index: string) => (
            <ListItem
              key={id}
              id={id}
              index={index}
              title={title}
              subTitle={`Released on ${releaseDate}`}
            />
          )
        )}
      </div>
    </div>
  );
};
