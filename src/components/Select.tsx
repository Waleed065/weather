import React, { useRef } from "react";
import "./css/Select.css";

import TransitionHeight from "./TransitionHeight";

interface schema {
  heading: string;
  shouldShow: boolean;
  setShouldShow: (arg: boolean) => void;
  options: string[];
  leftIcon?: JSX.Element;
  title: string;

  onSelect: (arg: string) => void;
  optionsIcon?: JSX.Element;
  barStyle?: any;
  optionsContainerStyle?: any;
}
export default function Select({
  heading,
  options,
  optionsIcon,
  shouldShow,
  setShouldShow,
  leftIcon,
  title,

  onSelect,
  barStyle,
  optionsContainerStyle,
}: schema) {
  const selectRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <h3>{heading}</h3>
      <div
        ref={selectRef}
        className={"searchoptions-container global-no-select"}
      >
        <div
          className={`searchoptions-input`}
          onClick={() => {
            setShouldShow(!shouldShow);
          }}
          style={barStyle}
        >
          <div>{leftIcon}</div>

          <label>{title}</label>
        </div>

        <TransitionHeight
          shouldShow={shouldShow}
          setShouldShow={setShouldShow}
          onSelect={onSelect}
          options={options}
          optionsIcon={optionsIcon}
          searchOptionsRef={selectRef}
          optionsContainerStyle={optionsContainerStyle}
        />
      </div>
    </>
  );
}
