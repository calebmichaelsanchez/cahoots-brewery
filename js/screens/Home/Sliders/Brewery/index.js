import React, { Component } from "react";
import ReactDOM from "react-dom";
import SliderContainer from "../components/SliderContainer";

class Brewery extends Component {
  render() {
    return (
      <SliderContainer url="/brewery" />
    );
  }
}

let BreweryContainer = document.getElementById("brewery");

if (BreweryContainer) {
  ReactDOM.render(<Brewery />, BreweryContainer);
}
