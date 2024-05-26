"use client";

import { useState } from "react";

import SearchManufacturere from "./SearchManufacturere";

const SearchBar = () => {
  // ============ State ==============
  const [manufacturer, setManufacturer] = useState("");
  // ============ Function ==============
  const handleSearch = () => {};

  // ============ Rendering ==============
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturere
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
