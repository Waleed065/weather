import React, { useEffect } from "react";
import "./css/OptionsList.css";

interface optionsSchema {
  searchOptionsRef: React.RefObject<HTMLDivElement>;
  shouldShow: boolean;
  setShouldShow: (arg: boolean) => void;

  onSelect: (arg: string) => void;
  options: any[];
  optionsIcon?: JSX.Element;
  itemTitle?: string;
  itemIcon?: string;
}

export default function OptionsList({
  searchOptionsRef,
  shouldShow,
  setShouldShow,
  onSelect,
  options,
  optionsIcon,
  itemIcon,
  itemTitle
}: optionsSchema) {
  useEffect(() => {
    const listner = (e: any) => {
      if (shouldShow && !searchOptionsRef.current?.contains(e.target)) {
        setShouldShow(false);
      }
    };
    window.addEventListener("mouseup", listner);
    return () => window.removeEventListener("mouseup", listner);
    // eslint-disable-next-line
  }, [shouldShow]);

  return (
    <>
      {options.length ? (
        options.map((state, index) => (
          <span
            key={index}
            onClick={() => onSelect(state)}
            className={"searchoptions-input-option"}
          >
            {optionsIcon}
            {itemIcon ? state[itemIcon] : null}

            <label>{itemTitle ? state[itemTitle] : state}</label>
          </span>
        ))
      ) : (
        <span id={"optionslist-empty-container"}>

        </span>
      )}
    </>
  );
}
