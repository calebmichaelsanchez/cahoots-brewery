import React from "react";
import ReactDOM, { render } from "react-dom";
import EventsContainer from "./components/EventsContainer";

let eventsContainer = document.getElementById("events");

if (eventsContainer) {
  render(<EventsContainer />, eventsContainer);
}
