import React from "react";
import "./table.css";
import Dots from "./images/dots.svg";

const Table = (props) => (
  <div className="table-row">
    <div className="table-row-left">
      <img
        className="table-icon table-items first-icon"
        src={props.img}
        alt="icon"
      />
      <span className="table-items table-span row-title">{props.title}</span>
    </div>
    <div className="table-row-rigth">
      <span className="table-items table-span">Aug 12, 2019</span>
      <span className="table-items table-span">${props.charges}</span>
      <img
        className="table-icon table-items table-span last-icon"
        src={Dots}
        alt="icon"
      />
    </div>
  </div>
);
export default Table;
