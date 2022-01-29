import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "./VehicleDetails.css";
import { BackButton } from "../BackButton/BackButton";
import { Loader } from "../Loader/Loader";
import { DetailsItemRowProps } from "../DetailsItemRow/DetailsItemRow";
import { useVehicleDetails } from "../../queries/vehiclesQueries";

export const VehicleDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { error, loading, data } = useVehicleDetails(id || "");

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const {
    name,
    model,
    vehicleClass,
    manufacturers,
    costInCredits,
    length,
    crew,
    passengers,
    maxAtmospheringSpeed,
    MGLT,
    cargoCapacity,
    consumables,
  } = data.vehicle;

  const onBack = () => {
    history("/vehicles");
  };

  return (
    <div className="vehicle-details">
      <div className="vehicle-details-header">
        <BackButton onClick={onBack} />
        <h1>{name}</h1>
      </div>

      <div className="vehicle-details-info">
        <DetailsItemRowProps label="Model" info={model} />
        <DetailsItemRowProps label="Vehicle Class" info={vehicleClass} />
        <DetailsItemRowProps label="Manufactures" info={manufacturers} />
        <DetailsItemRowProps label="Cost" info={costInCredits} />
        <DetailsItemRowProps label="Lenght" info={length} />
        <DetailsItemRowProps label="Crew" info={crew} />
        <DetailsItemRowProps label="Passenger" info={passengers} />
        <DetailsItemRowProps
          label="Max Atmosphering Speed"
          info={maxAtmospheringSpeed}
        />
        <DetailsItemRowProps label="MGLT" info={MGLT} />
        <DetailsItemRowProps label="Cargo Capacity" info={cargoCapacity} />
        <DetailsItemRowProps label="Consumables" info={consumables} />
      </div>
    </div>
  );
};
