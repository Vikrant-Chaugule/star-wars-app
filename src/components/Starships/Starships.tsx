import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_ALL_STARSHIPS } from "../../queries/starshipsQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Starships.css";

export const Starships = () => {
  const { error, loading, data } = useQuery(GET_ALL_STARSHIPS);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const films = data?.allStarships?.starships;
    setFilteredData(films);
    setData(films);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="starships">
      <div className="starships-header">
        <h1>Starships</h1>
        <input
          placeholder="Search Starship..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="starships-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(({ id, name, population }: any, index: number) => {
            return (
              <ListItem
                key={id}
                id={id}
                index={index}
                title={name}
                subTitle={`Population - ${population ?? "N/A"}`}
              />
            );
          })
        ) : (
          <ListItem id="" index={-1} title="Starship Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
