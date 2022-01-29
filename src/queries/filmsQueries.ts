import { gql, useQuery } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

export const GET_FILM_DETAILS = gql`
  query GetFilmDetails($id: ID!) {
    film(id: $id) {
      id
      title
      director
      producers
      releaseDate
      openingCrawl
    }
  }
`;

export const useFilmDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_FILM_DETAILS, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
