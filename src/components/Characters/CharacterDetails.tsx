import { useParams } from "react-router";
import { useCharacterDetails } from "../../queries/characterQueries";
import { useNavigate } from "react-router-dom";

import "./CharacterDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";

export const CharacterDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useCharacterDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

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
        <DetailsItemRowProps label="BirthYear" info={birthYear} />
        <DetailsItemRowProps label="Eye Color" info={eyeColor} />
        <DetailsItemRowProps label="Hair Color" info={hairColor} />
        <DetailsItemRowProps label="Height" info={height} />
        <DetailsItemRowProps label="Mass" info={mass} />
        <DetailsItemRowProps label="Home World" info={homeworld.name} />
      </div>
    </div>
  );
};
