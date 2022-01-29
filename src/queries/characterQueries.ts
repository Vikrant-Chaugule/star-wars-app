import { gql, useQuery } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query {
    allPeople {
      people {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        homeworld {
          name
          population
        }
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      homeworld {
        name
      }
    }
  }
`;

export const useCharacterDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
