import React, { useRef} from "react";
import Dots from "react-activity/dist/Dots";
import "./css/Navbar.css";

import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { StateType } from "../types";

export default function Overlay() {
  const loading = useSelector((state: StateType) => state.loading);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={loading}
      classNames={"overlay-transition"}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
    >
      <div id="overlay-container" ref={nodeRef}>
        <Dots animating={true} size={50} color={"var(--themeMain)"} />
      </div>
    </CSSTransition>
  );
}
