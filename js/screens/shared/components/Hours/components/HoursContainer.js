import React, { Component } from "react";
import axios from "axios";

class HoursContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: ""
    }
  }
  componentDidMount() {
    axios("/?format=json")
    .then((response) => {
      console.log(response.data.websiteSettings.businessHours);
      let hours = response.data.websiteSettings.businessHours;
      switch (new Date().getDay()) {
        case 0:
          this.setState({ hours: "Closed" });
          break;
        case 1:
          this.setState({ hours: "Monday - " + hours["monday"]["text"] });
          break;
        case 2:
          this.setState({ hours: "Tuesday - " + hours["tuesday"]["text"] });
          break;
        case 3:
          this.setState({ hours: "Wednesday - " + hours["wednesday"]["text"] });
          break;
        case 4:
          this.setState({ hours: "Thursday - " + hours["thursday"]["text"] });
          break;
        case 5:
          this.setState({ hours: "Friday - " + hours["friday"]["text"] });
          break;
        case 6:
          this.setState({ hours: "Saturday - " + hours["saturday"]["text"] });
          break;
      }
    })
    .catch((response) => {
      console.error(response);
    });
  }
  render() {
    let { hours } = this.state;
    return (
      <span>{hours}</span>
    )
  }
}

export default HoursContainer;
