import React, { Component } from "react";
import ReactDOM from "react-dom";

class Experts extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="expert">
        <div className="container">
         Expert Chef 
        </div>
      </section>
    );
  }
}

export default Experts;
