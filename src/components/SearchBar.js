import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [filterValue, setFilterValue] = useState([]);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div>
      <input
        className="input_style"
        type="search"
        onChange={handleSearch}
        placeholder="Search any Category"
      />

      <div className="searchList ">
        {filterValue.length !== 0 &&
          filterValue.map((e) => {
            return <p className="search-result">{e.title}</p>;
          })}
      </div>
    </div>
  );
};

export default SearchBar;
