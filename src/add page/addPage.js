import React from "react";
import "./addPage.css";

const AddPage = (props) => (
  <div className="add-page-cont">
    <div className="add-left-cont">
      <div className="add-more-wrap">
        <span className="add-more-title">New charge</span>
        <label className="add-more-lable">
          Total
          <input className="add-more-inputs" />
        </label>
        <label className="add-more-lable">
          Description
          <input className="add-more-inputs" />
        </label>
        <label className="add-more-lable">
          Select category
          <input className="add-more-inputs" />
        </label>
        <label className="add-more-lable">
          Date
          <input className="add-more-inputs" />
        </label>
        <div className="btn-wrap">
          <button className="add-more-btn">Add new income</button>
        </div>
      </div>
    </div>
    <div className="add-rigth-cont">
      {" "}
      <div className="balance">
        <span className="balance-tittle">Balance</span>
        <span className="sum">${props.sum}</span>
      </div>
    </div>
  </div>
);
export default AddPage;
