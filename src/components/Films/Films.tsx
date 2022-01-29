import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_ALL_FILMS } from "../../queries/filmsQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Films.css";

export const Films = () => {
  const { error, loading, data } = useQuery(GET_ALL_FILMS);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const films = data?.allFilms?.films;
    setFilteredData(films);
    setData(films);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="films">
      <div className="films-header">
        <h1>Films</h1>
        <input
          placeholder="Search Film..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="films-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(({ id, title, releaseDate }: any, index: number) => {
            return (
              <ListItem
                key={id}
                id={id}
                index={index}
                title={title}
                subTitle={releaseDate ? `Released on ${releaseDate}` : ""}
              />
            );
          })
        ) : (
          <ListItem id="" index={-1} title="Film Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
