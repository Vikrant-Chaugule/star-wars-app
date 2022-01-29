import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ALL_VEHICLES } from "../../queries/vehiclesQueries";
import { useSearchData } from "../Hooks/useSearchData";
import { ListItem } from "../ListItem/ListItem";
import { Loader } from "../Loader/Loader";
import "./Vehicles.css";

export const Vehicles = () => {
  const { error, loading, data } = useQuery(GET_ALL_VEHICLES);

  const { onSearch, filteredData, setData, searchValue, setFilteredData } =
    useSearchData();

  useEffect(() => {
    const vehicles = data?.allVehicles?.vehicles;
    setFilteredData(vehicles);
    setData(vehicles);
  }, [data, setFilteredData, setData]);

  if (error) return <p>Error</p>;

  if (loading) return <Loader />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="vehicles">
      <div className="vehicles-header">
        <h1>Vehicles</h1>
        <input
          placeholder="Search Vehicle..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="vehicles-list">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(({ id, name, model }: any, index: number) => {
            return (
              <ListItem
                key={id}
                id={id}
                index={index}
                title={name}
                subTitle={`Model - ${model ?? "N/A"}`}
              />
            );
          })
        ) : (
          <ListItem id="" index={-1} title="Vehicle Found" subTitle="" />
        )}
      </div>
    </div>
  );
};
