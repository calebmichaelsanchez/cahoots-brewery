import React from "react";
import ReactDOM, { render } from "react-dom";
import JobsContainer from "./container/JobsContainer";

let jobsContainer = document.getElementById("jobs");

if (jobsContainer) {
  render(<JobsContainer />, jobsContainer);
}
