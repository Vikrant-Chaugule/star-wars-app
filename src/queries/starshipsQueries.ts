import { gql, useQuery } from "@apollo/client";

export const GET_ALL_STARSHIPS = gql`
  query {
    allStarships {
      starships {
        id
        name
        model
      }
    }
  }
`;

export const GET_STARSHIP_DETAILS = gql`
  query GetStarshipDetails($id: ID!) {
    starship(id: $id) {
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
    }
  }
`;

export const useStarshipDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_STARSHIP_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
