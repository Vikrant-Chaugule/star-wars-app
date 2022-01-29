import { useParams } from "react-router";
import { useCharacterDetails } from "../../queries/characterQueries";
import { useNavigate } from "react-router-dom";

import "./CharacterDetails.css";
import { BackButton } from "../BackButton/BackButton";

export const CharacterDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useCharacterDetails(id || "");
  console.log(error, loading, data);

  if (error) return <p>Error</p>;

  if (loading) return <p>Loading...</p>;

  const {
    name,
    gender,
    birthYear,
    eyeColor,
    hairColor,
    height,
    mass,
    homeworld,
  } = data.person;

  const onBack = () => {
    history("/characters");
  };

  return (
    <div className="character-details ">
      <div className="character-details-header">
        <BackButton onClick={onBack} />
        <h1>
          {name} ({gender})
        </h1>
      </div>

      <div className="character-details-info">
        <CharacterItem label="BirthYear" info={birthYear} />
        <CharacterItem label="Eye Color" info={eyeColor} />
        <CharacterItem label="Hair Color" info={hairColor} />
        <CharacterItem label="Height" info={height} />
        <CharacterItem label="Mass" info={mass} />
        <CharacterItem label="Home World" info={homeworld.name} />
      </div>
    </div>
  );
};

const CharacterItem = ({ label, info }: any) => {
  return (
    <div className="character-item">
      <p className="characterlabel">{label}</p>
      <p className="character-info">{info}</p>
    </div>
  );
};
