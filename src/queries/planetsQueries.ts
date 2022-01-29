import { gql, useQuery } from "@apollo/client";

export const GET_ALL_PLANETS = gql`
  query {
    allPlanets {
      planets {
        id
        name
        population
      }
    }
  }
`;

export const GET_PLANET_DETAILS = gql`
  query GetPlanetDetails($id: ID!) {
    planet(id: $id) {
      id
      name
      population
      diameter
      gravity
      rotationPeriod
      orbitalPeriod
      climates
      terrains
      surfaceWater
    }
  }
`;

export const usePlanetDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_PLANET_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
