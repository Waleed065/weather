import React from "react";
import "./css/Searchbar.css";

import Country from "./Country";
import SearchInput from "./SearchInput";

export default function Searchbar() {
  return (
    <div id="searchbar-container">
      <Country />
      <SearchInput />
    </div>
  );
}
