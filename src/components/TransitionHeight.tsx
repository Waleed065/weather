import React, { useRef } from "react";
import "./css/TransitionHeight.css";
import Dots from "react-activity/dist/Dots";
import { CSSTransition } from "react-transition-group";
import OptionsList from "./OptionsList";

// must use itemTitle and itemIcon if providing an array of objects
interface schema {
  shouldShow: boolean;
  optionsContainerStyle?: React.CSSProperties;
  searchOptionsRef: React.RefObject<HTMLDivElement>;
  setShouldShow: (arg: boolean) => void;
  onSelect: (val: any) => void;
  options: any[];
  itemTitle?: string;
  itemIcon?: string;
  optionsIcon?: JSX.Element;
  loading?: boolean;
}
export default function TransitionHeight({
  shouldShow,
  optionsContainerStyle,
  searchOptionsRef,
  setShouldShow,
  onSelect,
  options,
  optionsIcon,
  itemTitle,
  itemIcon,
  loading,
}: schema) {
  const optionsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CSSTransition
        in={shouldShow}
        classNames={"global-transition-height"}
        nodeRef={optionsRef}
        timeout={300}
        unmountOnExit
      >
        <div
          ref={optionsRef}
          className={"searchoptions-input-options-list global-no-select"}
          style={optionsContainerStyle}
        >
          <OptionsList
            searchOptionsRef={searchOptionsRef}
            shouldShow={shouldShow}
            setShouldShow={setShouldShow}
            onSelect={onSelect}
            options={options}
            itemTitle={itemTitle}
            itemIcon={itemIcon}
            optionsIcon={optionsIcon}
          />

          <Dots
            animating={loading ?? false}
            size={50}
            color={"var(--themeMain)"}
            style={{
              zIndex: 12,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </CSSTransition>
    </>
  );
}
