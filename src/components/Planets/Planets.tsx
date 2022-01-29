import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_ALL_PLANETS } from "../../queries/planetsQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Planets.css";

export const Planets = () => {
  const { error, loading, data } = useQuery(GET_ALL_PLANETS);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const films = data?.allPlanets?.planets;
    setFilteredData(films);
    setData(films);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="planets">
      <div className="films-header">
        <h1>Planets</h1>
        <input
          placeholder="Search Planets..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="planets-list">
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
          <ListItem id="" index={-1} title="Planet Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
