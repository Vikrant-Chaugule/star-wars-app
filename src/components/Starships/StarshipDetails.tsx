import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "./StarshipDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";
import { useStarshipDetails } from "../../queries/starshipsQueries";

export const StarshipDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useStarshipDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const {
    name,
    model,
    starshipClass,
    manufacturers,
    costInCredits,
    length,
    crew,
    passengers,
    maxAtmospheringSpeed,
    hyperdriveRating,
    MGLT,
    cargoCapacity,
    consumables,
  } = data.starship;

  const onBack = () => {
    history("/starships");
  };

  return (
    <div className="starship-details">
      {/* Header */}
      <div className="starship-details-header">
        <BackButton onClick={onBack} />
        <h1>{name}</h1>
      </div>

      {/* Details */}
      <div className="starship-details-info">
        <DetailsItemRowProps label="Model" info={model} />
        <DetailsItemRowProps label="Starship Class" info={starshipClass} />
        <DetailsItemRowProps label="Manufactures" info={manufacturers} />
        <DetailsItemRowProps label="Cost" info={costInCredits} />
        <DetailsItemRowProps label="Lenght" info={length} />
        <DetailsItemRowProps label="Crew" info={crew} />
        <DetailsItemRowProps label="Passenger" info={passengers} />
        <DetailsItemRowProps
          label="Max Atmosphering Speed"
          info={maxAtmospheringSpeed}
        />
        <DetailsItemRowProps
          label="Higher Drive Rating"
          info={hyperdriveRating}
        />
        <DetailsItemRowProps label="MGLT" info={MGLT} />
        <DetailsItemRowProps label="Cargo Capacity" info={cargoCapacity} />
        <DetailsItemRowProps label="Consumables" info={consumables} />
      </div>
    </div>
  );
};
