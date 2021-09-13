import React, { useRef, useState } from "react";
import "./css/Country.css";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../store/slices/countrySlice";
import { countryType, StateType } from "../types";
import { countries } from "../utils/countries";
import TransitionHeight from "./TransitionHeight";

export default function Country() {
  const { name, emoji } = useSelector((state: StateType) => state.country);
  const [shouldShow, setShouldShow] = useState(false);
  const searchOptionsRef = useRef(null);

  const dispatch = useDispatch();

  const onSelect = (val: countryType) => {
    dispatch(setCountry(val));
    setShouldShow(false);
  };

  return (
    <div ref={searchOptionsRef} style={{ position: "relative" }}>
      <div
        className="global-button"
        id={"country-button"}
        onClick={() => setShouldShow(!shouldShow)}
      >
        <label>
          {emoji} {name}
        </label>
      </div>
      <TransitionHeight
        shouldShow={shouldShow}
        setShouldShow={setShouldShow}
        onSelect={onSelect}
        options={countries}
        itemTitle={"name"}
        itemIcon={"emoji"}
        searchOptionsRef={searchOptionsRef}
      />
    </div>
  );
}


