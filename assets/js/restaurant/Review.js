import React, { Component } from "react";
import ReactDOM from "react-dom";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sanusi"
    };
  }

  render() {
    return (
      <section className="review">
        <div className="container">
          <div className="review-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div className="details-box">
            <p className="text">
              Cattle. And was. Fourth be appear. Thing lesser replenish evening
              called void a, sea, blessed meat fourth called moveth place behold
              night own night third in they're abundantly
            </p>
            <img
              src="/img/d-line.png"
              className="stylish-line"
              alt={"stylish-line"}
            />
            <img
              src="/img/d-line.png"
              className="stylish-line"
              alt={"stylish-line"}
            />
            <h3>Joe Ma</h3>
            <div className=" dot-box">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Review;
