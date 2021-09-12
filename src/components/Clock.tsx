import React, { memo } from "react";
import "./css/Clock.css";
import moment from "moment";
import { MdDateRange } from "react-icons/md";

interface schema {
  dt: number;
}
const Clock = ({ dt }: schema) => {
  return (
    <div id="clock-container">

      <div className="clock-flex">
        <h1>{moment(dt * 1000).format("ll")}</h1>
        <span>
          <MdDateRange />
        </span>
      </div>
    </div>
  );
};

export default memo(Clock);
