import { useState } from "react";

export const useSearchData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string) => {
    if (value !== "") {
      const result = data.filter((info: any) => {
        const key = info.name || info.title;
        return key.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredData(result);
    } else {
      setFilteredData(data);
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
