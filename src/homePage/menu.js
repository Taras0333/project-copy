import React from "react";

const Menu = (props) => (
  <div className="menu-cont">
    <div className="menu-wrapper">
      <span className="menu-items">Category</span>
      <span className="menu-items">Description</span>
      <span className="menu-items">Date</span>
      <span className="menu-items">Money</span>
      <span className="menu-items">Action</span>
      <button className="menu-btn" onClick={props.btn}>
        Add more
      </button>
    </div>

    <hr className="menu-line" />
  </div>
);

export default Menu;
