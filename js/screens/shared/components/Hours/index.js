import React from "react";
import ReactDom, { render } from "react-dom";
import HoursContainer from "./components/HoursContainer";

let hoursContainer = document.getElementById("store-hours");

if (hoursContainer) {
  render(<HoursContainer />, hoursContainer);
}
