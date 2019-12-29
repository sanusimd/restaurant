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
          <div className="menu--items">
            <div className="menu--item">
              <img
                src="/img/menu-image-2.jpg"
                className="menu-image"
                alt={"cooking"}
              />
              <div className="price-box">
                <h2 className="item__price">$30</h2>
                <i className="fas fa-cart-plus"></i>
              </div>

              <p className="item--details">
                Various seafood can be used to prepare the dish, such as fish
              </p>
            </div>

            <div className="menu--item">
              <img
                src="/img/menu-image-2.jpg"
                className="menu-image"
                alt={"cooking"}
              />
              <div className="price-box">
                <h2 className="item__price">$30</h2>
                <i className="fas fa-cart-plus"></i>
              </div>

              <p className="item--details">
                Various seafood can be used to prepare the dish, such as fish
              </p>
            </div>

            <div className="menu--item">
              <img
                src="/img/menu-image-2.jpg"
                className="menu-image"
                alt={"cooking"}
              />
              <div className="price-box">
                <h2 className="item__price">$30</h2>
                <i className="fas fa-cart-plus"></i>
              </div>

              <p className="item--details">
                Various seafood can be used to prepare the dish, such as fish
              </p>
            </div>
          </div>

          <div className="btn">
            <a href="#" className="btn-red">View Menu</a>
          </div>
        </div>
      </section>
    );
  }
}

export default OurMenu;
