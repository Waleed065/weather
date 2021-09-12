import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBy } from "../store/slices/sidebarSettingsSlice";
import { StateType } from "../types";
import Select from "./Select";

const options = ["Name", "Zip Code"];
export default function SearchBy() {
  const [shouldShow, setShouldShow] = useState(false);
  const dispatch = useDispatch();

  const searchBy = useSelector(
    (state: StateType) => state.sidebarSettings.searchBy
  );

  const onSelect = (val: string) => {
    dispatch(setSearchBy(val));
    setShouldShow(false);
  };

  return (
    <Select
      heading={"Search By"}
      onSelect={onSelect}
      options={options}
      setShouldShow={setShouldShow}
      shouldShow={shouldShow}
      title={searchBy}
    />
  );
}
