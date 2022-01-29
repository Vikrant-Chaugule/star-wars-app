import { gql, useQuery } from "@apollo/client";

export const GET_ALL_VEHICLES = gql`
  query {
    allVehicles {
      vehicles {
        id
        name
        model
      }
    }
  }
`;

export const GET_VEHICLE_DETAILS = gql`
  query GetVehicleDetails($id: ID!) {
    vehicle(id: $id) {
      name
      model
      vehicleClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      cargoCapacity
      consumables
    }
  }
`;

export const useVehicleDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_VEHICLE_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
