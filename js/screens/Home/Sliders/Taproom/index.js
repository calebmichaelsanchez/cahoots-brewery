import React, { Component } from "react";
import ReactDOM from "react-dom";
import SliderContainer from "../components/SliderContainer";

class Taproom extends Component {
  render() {
    return (
      <SliderContainer url="/taproom" />
    );
  }
}

let TaproomContainer = document.getElementById("taproom");

if (TaproomContainer) {
  ReactDOM.render(<Taproom />, TaproomContainer);
}
