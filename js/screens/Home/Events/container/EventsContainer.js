import React, { Component } from "react";
import axios from "axios";
import EventsList from "../components/EventsList";

class EventsContainer extends Component {
  constructor() {
    super();
    this.state = {
      upcoming: [],
      title: ""
    }
  }
  componentDidMount() {
    axios("/events?format=json")
      .then((response) => {
        this.setState({
          upcoming: response.data.upcoming ? response.data.upcoming : [],
          title: response.data.collection.title
        });
      })
      .catch((response) => {
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
