import { useQuery } from "@apollo/client";
import { GET_ALL_PLANETS } from "../../queries/planetsQueries";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Planets.css";

export const Planets = () => {
  const { error, loading, data } = useQuery(GET_ALL_PLANETS);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  return (
    <div className="planets">
      <div className="films-header">
        <h1>Planets</h1>
        <input placeholder="Search Planets..." />
      </div>

      <div className="planets-list">
        {data.allPlanets.planets.map(
          ({ id, name, population }: any, index: number) => (
            <ListItem
              key={id}
              id={id}
              index={index}
              title={name}
              subTitle={`Population - ${population ?? "N/A"}`}
            />
          )
        )}
      </div>
    </div>
  );
};
