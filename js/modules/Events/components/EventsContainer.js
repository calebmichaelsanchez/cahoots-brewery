import React, { Component } from "react";
import axios from "axios";
import EventsList from "./EventsList";

class EventsContainer extends Component {
  constructor() {
    super();
    this.state = {
      upcoming: [],
      past: [],
      title: ""
    }
  }
  componentDidMount() {
    axios("/events?format=json")
      .then((response) => {
        console.log(response);
        this.setState({
          upcoming: response.data.upcoming,
          past: response.data.past,
          title: response.data.collection.title
        });
      })
      .catch((response) => {
        console.log(response);
        console.error("Request for collection failed");
      });
  }
  render() {
    return (
      <EventsList {...this.state} />
    );
  }
}

export default EventsContainer;
