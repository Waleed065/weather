import React from "react";
import "./css/TemperatureConvertor.css";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setIsCelsius } from "../store/slices/isCelsiusSlice";
import { StateType } from "../types";
import SwitchTrans from "./SwitchTrans";
import TempBox from "./TempBox";

export default function TemperatureConvertor() {
  const isCelsius = useSelector((state: StateType) => state.isCelsius);
  const dispatch = useDispatch();

  return (
    <div id="temperature-convertor">
      <TempBox
        title="Celsius"
        isActive={isCelsius}
        onClick={() => dispatch(setIsCelsius(true))}
      />
      <SwitchTrans
        isActive={isCelsius}
        component1={<ImArrowRight />}
        component2={<ImArrowLeft />}
      />
      <TempBox
        title="Fahrenheit"
        isActive={!isCelsius}
        onClick={() => dispatch(setIsCelsius(false))}
      />
    </div>
  );
}
