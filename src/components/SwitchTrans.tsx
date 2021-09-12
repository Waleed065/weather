import React, { useRef } from "react";
import "./css/SwitchTrans.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

interface schema {
  isActive: boolean;
  component1: JSX.Element;
  component2: JSX.Element;
}
export default function SwitchTrans({
  isActive,
  component1,
  component2,
}: schema) {
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode={"out-in"}>
      <CSSTransition
        key={isActive.toString()}
        classNames="convert-arrow-animation"
        timeout={300}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <div className="convert-arrow">
            {isActive ? component1 : component2}
          </div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
