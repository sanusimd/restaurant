import React, { Component } from "react";
import ReactDOM from "react-dom";

class OurMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="our-menu">
        <div className="container">
          <div className="info">
            <h3>Our Menu</h3>
            <h2>Choose Your Dish</h2>
            <img
              src="/img/d-line.png"
              className="stylish-line"
              alt={"stylish-line"}
            />
          </div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default OurMenu;
