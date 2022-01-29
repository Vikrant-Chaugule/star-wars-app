import { useState } from "react";

export const useSearchData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string) => {
    if (value !== "") {
      const result = data.filter((info: any) =>
        info?.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(result);
    } else {
      setFilteredData(filteredData);
    }

    setSearchValue(value);
  };

  return {
    setData,
    setSearchValue,
    onSearch,
    filteredData,
    setFilteredData,
    searchValue,
  };
};
