import { useParams } from "react-router";
import { usePlanetDetails } from "../../queries/planetsQueries";
import { useNavigate } from "react-router-dom";

import "./PlanetDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";

export const PlanetDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = usePlanetDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const {
    name,
    population,
    diameter,
    gravity,
    rotationPeriod,
    orbitalPeriod,
    climates,
    terrains,
    surfaceWater,
  } = data.planet;

  const onBack = () => {
    history("/planets");
  };

  return (
    <div className="planet-details">
      {/* Header */}
      <div className="planet-details-header">
        <BackButton onClick={onBack} />
        <h1>{name}</h1>
      </div>

      {/* Details */}
      <div className="planets-details-info">
        <DetailsItemRowProps label="Population" info={population} />
        <DetailsItemRowProps label="Diameter" info={diameter} />
        <DetailsItemRowProps label="Gravity" info={gravity} />
        <DetailsItemRowProps label="Rotation Period" info={rotationPeriod} />
        <DetailsItemRowProps label="Orbital Period" info={orbitalPeriod} />
        <DetailsItemRowProps label="Climates" info={climates} />
        <DetailsItemRowProps label="Terrains" info={terrains} />
        <DetailsItemRowProps label="Surface Waters" info={surfaceWater} />
      </div>
    </div>
  );
};
