import React from "react";
import "./css/TempBox.css";

interface schema {
  title: string;
  isActive: boolean;
  onClick: () => void;
}
export default function TempBox({ title, isActive, onClick }: schema) {

  return (
    <div
      className={`temp-box ${isActive ? "temp-box-active" : undefined}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
}
