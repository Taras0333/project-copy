import React, { Component } from "react";
import "./homePage.css";
import Header from "./header";
import Menu from "./menu";
import "./menu.css";
import Table from "./table";
import Smile from "./images/smile.svg";
import Pet from "./images/pet.svg";
import Food from "./images/food.svg";
import Clothes from "./images/clothes.svg";
import Health from "./images/health.svg";
import Restoraunts from "./images/restor.svg";
import Transport from "./images/transport.svg";
import Utility from "./images/utility.svg";
import Other from "./images/other.svg";
import AddPage from "../add page/addPage";
class HomePage extends Component {
  state = {
    char: [
      {
        fun: 30,
        pets: 65,
        food: 200.9,
        clothes: 154,
        health: 85,
        restoraunts: 86.57,
        transport: 51,
        bils: 134.5,
        other: 90,
      },
    ],
    sum: 0,
    titles: 4,
    icons: [],
    isActive: true,
  };

  componentDidMount() {
    this.sum();
    this.getIcons();
    this.eachTitle();
  }
  getIcons = () => {
    this.setState({
      icons: [
        Smile,
        Pet,
        Food,
        Clothes,
        Health,
        Restoraunts,
        Transport,
        Utility,
        Other,
      ],
    });
  };
  sum = () => {
    let sum = 0;
    this.state.char.forEach((el) => {
      Object.values(el).map((e) => {
        sum += e;
      });
    });
    this.setState({
      sum: sum,
    });
  };
  eachCharge = () => {
    let arr = [];
    this.state.char.map((el) => {
      arr = Object.values(el);
    });
    return arr;
  };
  eachTitle = () => {
    let arr = [];
    this.state.char.map((el) => {
      arr = Object.keys(el);
    });
    this.setState({
      titles: arr,
    });
  };
  hideHomePage = () => {
    this.setState({
      isActive: false,
    });
    console.log(this.state.isActive);
  };

  render() {
    return (
      <div className="home-page">
        {this.state.isActive && (
          <>
            <Header sum={this.state.sum} />
            <Menu btn={this.hideHomePage} />
            <div className="table-cont">
              {this.eachCharge().map((el, i) => (
                <Table
                  charges={el}
                  title={this.state.titles[i]}
                  img={this.state.icons[i]}
                />
              ))}
            </div>
          </>
        )}
        {!this.state.isActive && <AddPage sum={this.state.sum} />}
      </div>
    );
  }
}
export default HomePage;
