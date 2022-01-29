import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_CHARACTERS } from "../../queries/characterQueries";
import "./Characters.css";

export const Characters = () => {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS);

  console.log(error, loading, data);

  if (error) return <p>Error</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div className="films">
      <div className="films-header">
        <h1>Characters</h1>
        <input placeholder="Search Character..." />
      </div>

      <div className="films-list">
        {data.allPeople.people.map(
          ({ id, name, gender }: any, index: string) => (
            <CharacterItem
              key={id}
              id={id}
              index={index}
              name={name}
              gender={gender}
            />
          )
        )}
      </div>
    </div>
  );
};

interface ICharacterItemProp {
  id: string;
  name: string;
  // birthYear: string;
  // eyeColor: string;
  gender: string;
  index: string;
  // hairColor: string;
  // height: string;
  // mass: string;
  // homeworld: {
  //   name: string;
  //   population: string;
  // };
}

const CharacterItem = ({
  id,
  name,
  gender,
  index,
}: // birthYear,
// eyeColor,
// hairColor,
// height,
// mass,
// homeworld,
ICharacterItemProp) => {
  return (
    <Link to={`${id}`} className="films-list-item">
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{gender}</div>
    </Link>
  );
};
