import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "./SpeciesDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";
import { useSpeciesDetails } from "../../queries/speciesQueries";

export const SpeciesDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useSpeciesDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const {
    name,
    classification,
    designation,
    averageHeight,
    averageLifespan,
    eyeColors,
    hairColors,
    skinColors,
    language,
    homeworld,
  } = data.species;

  const onBack = () => {
    history("/species");
  };

  return (
    <div className="species-details ">
      <div className="species-details-header">
        <BackButton onClick={onBack} />
        <h1>{name}</h1>
      </div>

      <div className="species-details-info">
        <DetailsItemRowProps label="Classification" info={classification} />
        <DetailsItemRowProps label="Designation" info={designation} />
        <DetailsItemRowProps label="Average Height" info={averageHeight} />
        <DetailsItemRowProps label="Average Lifespan" info={averageLifespan} />
        <DetailsItemRowProps label="Eye Colors" info={eyeColors} />
        <DetailsItemRowProps label="Hair Colors" info={hairColors} />
        <DetailsItemRowProps label="Skin Colors" info={skinColors} />
        <DetailsItemRowProps label="Language" info={language} />
        <DetailsItemRowProps label="Homeworld" info={homeworld.name} />
      </div>
    </div>
  );
};
