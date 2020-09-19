import React from "react";
import Arrow from "./images/ar-icon.svg";
import "./header.css";
const Header = (props) => (
  <div className="header">
    <div className="header-left">
      <div className="header-top">
        <span className="header-charges">Charges</span>
        <span className="header-incomes">Incomes</span>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-wrapper">
          <span className="my-charges">My Charges /</span>
          <span className="weaks">this week</span>
          <img className="arrow-icon" src={Arrow} alt="arrow icon" />
        </div>
        <hr className="header-line" />
      </div>
    </div>

    <div className="balance">
      <span className="balance-tittle">Balance</span>
      <span className="sum">${props.sum}</span>
    </div>
  </div>
);

export default Header;
