import React, { Component } from "react";
import ReactDOM from "react-dom";

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="discover">
        <div className="container">
          <div className="discover__box">
            <div className="discover-info">
              <h3>Discover</h3>
              <h2>The Restaurant</h2>
              <img
                src="/img/d-line.png"
                className="stylish-line"
                alt={"stylish-line"}
              />
              <p>
                We love food, lots of different food, just like you. We promise
                an intimate and relaxed dining experience that offers different
                to local and foreign patrons .
              </p>
              <p>
                Pick up at the restaurant at your convenience, 7 days a week.
                Available for orders of $100 or more, Monday - Friday until
                4P.M. Delivery and Set-Up Fee of $25..
              </p>
              <img
                src="/img/d-signature.png"
                className="signature"
                alt={"signature"}
              />
            </div>
            <div className="discover-images">
              <img
                src="/img/d-foodie-basket.png"
                className="foodie-basket"
                alt={"foodie-basket"}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
