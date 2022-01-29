import { gql, useQuery } from "@apollo/client";

export const GET_ALL_SPECIES = gql`
  query {
    allSpecies {
      species {
        id
        name
        language
      }
    }
  }
`;

export const GET_SPECIES_DETAILS = gql`
  query GetSpeciesDetails($id: ID!) {
    species(id: $id) {
      name
      classification
      designation
      averageHeight
      averageLifespan
      eyeColors
      hairColors
      skinColors
      language
      homeworld {
        name
      }
    }
  }
`;

export const useSpeciesDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_SPECIES_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
