import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="header__menu">
            <div className="logo">
              FOODIE
              {/* <img src="/img/logo.png" alt={'logo'} /> */}
            </div>
            <nav>
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">Reservation</a>
              <a href="#">News</a>
              <a href="#">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
