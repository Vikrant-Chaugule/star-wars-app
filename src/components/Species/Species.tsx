import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_ALL_SPECIES } from "../../queries/speciesQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Species.css";

export const Species = () => {
  const { error, loading, data } = useQuery(GET_ALL_SPECIES);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const species = data?.allSpecies?.species;
    setFilteredData(species);
    setData(species);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="species">
      <div className="species-header">
        <h1>Species</h1>
        <input
          placeholder="Search Species..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="species-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(({ id, name, language }: any, index: number) => {
            return (
              <ListItem
                key={id}
                id={id}
                index={index}
                title={name}
                subTitle={language ? `Language - ${language}` : ""}
              />
            );
          })
        ) : (
          <ListItem id="" index={-1} title="Species Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
