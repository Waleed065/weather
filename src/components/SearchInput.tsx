import React, { useRef, useState } from "react";
import "./css/SearchInput.css";

import Places from "./Places";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../store/slices/weatherSlice";
import { MdSearch } from "react-icons/md";

export default function SearchInput() {
  const [shouldShow, setShouldShow] = useState(false);
  const [value, setValue] = useState("");
  const searchOptionsRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onSubmit = async (e: any, val: string) => {
    e?.preventDefault();
    if (!value.length) return;

    dispatch(fetchWeather(val));
    setShouldShow(false);
  };



  return (
    <form
      id="search-input-container"
      ref={searchOptionsRef}
      onSubmit={(e) => onSubmit(e, value)}
    >
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        placeholder="Search a city by name or zipcode..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setShouldShow(true)}
      />

      <Places
        shouldShow={shouldShow}
        setShouldShow={setShouldShow}
        searchOptionsRef={searchOptionsRef}
        value={value}
        onSubmit={onSubmit}
      />
      <button onClick={(e) => onSubmit(e, value)}>
        <MdSearch size={20} color="var(--themeContrast)" />
      </button>
    </form>
  );
}
