import React, { memo } from "react";
import "./css/Option.css";

interface schema {
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  index: number;
  onClick: (title: string, index: number) => void;
}
const Option = ({ title, icon, isActive, index, onClick }: schema) => {

  return (
    <div
      className={`option-container global-button ${
        isActive ? "option-container-active" : undefined
      }`}
      onClick={() => onClick(title, index)}
    >
      <span>{icon}</span>
      <label>{title}</label>
    </div>
  );
};

export default memo(Option);
