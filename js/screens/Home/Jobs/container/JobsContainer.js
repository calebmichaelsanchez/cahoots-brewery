import React, { Component } from "react";
import axios from "axios";
import JobsList from "../components/JobsList";

class JobsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      title: ""
    }
  }
  componentDidMount() {
    axios("/jobs?format=json")
      .then((response) => {
        console.log(response);
        this.setState({
          items: response.data.items ? response.data.items : [],
          title: response.data.collection.title,
          description: response.data.collection.description
        });
      })
      .catch((response) => {
        console.log(response);
        console.error("Request for collection failed");
      });
  }
  render() {
    return (
      <JobsList {...this.state} />
    );
  }
}

export default JobsContainer;
