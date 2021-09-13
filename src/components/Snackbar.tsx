import React, { useEffect, useRef } from "react";
import "./css/Snackbar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { StateType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { clearSnackBar } from "../store/slices/snackBarSlice";

export default function Snackbar() {
  const { show, message } = useSelector((state: StateType) => state.snackBar);
  const dispatch = useDispatch();
  const nodeRef = useRef<HTMLDivElement>(null);

  const timer = useRef<any>(null);
  useEffect(() => {
    clearTimeout(timer.current);

    if (!show) return;
    let mounted = true;
    if (!mounted) return;

    timer.current = setTimeout(() => {
      hideSnack();
    }, 5000);

    return () => {
      clearTimeout(timer.current);
      mounted = false;
    };

    // eslint-disable-next-line
  }, [show, message]);

  const hideSnack = () => {
    dispatch(clearSnackBar());
  };

  return (
    <CSSTransition
      in={show}
      classNames={"snackbar-transition"}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
    >
      <div id="snackbar-container" ref={nodeRef}>
        <strong>{message}</strong>
        <span>
          <AiOutlineCloseCircle
            size={20}
            className="global-button"
            onClick={hideSnack}
          />
        </span>
      </div>
    </CSSTransition>
  );
}
