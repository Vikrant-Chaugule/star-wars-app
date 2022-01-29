import { useQuery } from "@apollo/client";
import { GET_ALL_STARSHIPS } from "../../queries/starshipsQueries";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Starships.css";

export const Starships = () => {
  const { error, loading, data } = useQuery(GET_ALL_STARSHIPS);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  return (
    <div className="starships">
      <div className="starships-header">
        <h1>Starships</h1>
        <input placeholder="Search Starship..." />
      </div>

      <div className="starships-list">
        {data.allStarships.starships.map(
          ({ id, name, model }: any, index: number) => (
            <ListItem
              key={id}
              id={id}
              index={index}
              title={name}
              subTitle={`Model - ${model ?? "N/A"}`}
            />
          )
        )}
      </div>
    </div>
  );
};
