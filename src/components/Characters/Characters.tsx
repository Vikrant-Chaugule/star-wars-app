import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ALL_CHARACTERS } from "../../queries/characterQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Characters.css";

export const Characters = () => {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const characters = data?.allPeople?.people;
    setFilteredData(characters);
    setData(characters);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="characters">
      <div className="characters-header">
        <h1>Characters</h1>
        <input
          placeholder="Search Character..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="characters-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(({ id, name, gender }: any, index: number) => {
            return (
              <ListItem
                key={id}
                id={id}
                index={index}
                title={name}
                subTitle={gender}
              />
            );
          })
        ) : (
          <ListItem id="" index={-1} title="Character Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
