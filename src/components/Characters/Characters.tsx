import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../queries/characterQueries";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Characters.css";

export const Characters = () => {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  return (
    <div className="characters">
      <div className="characters-header">
        <h1>Characters</h1>
        <input placeholder="Search Character..." />
      </div>

      <div className="characters-list">
        {data.allPeople.people.map(
          ({ id, name, gender }: any, index: string) => (
            <ListItem
              key={id}
              id={id}
              index={index}
              title={name}
              subTitle={gender}
            />
          )
        )}
      </div>
    </div>
  );
};
