import React, { Component } from "react";
import axios from "axios";
import SliderItem from "./SliderItem";

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios(this.props.url + "?format=json")
      .then((response) => {
        this.setState({
          items: response.data.items
        });
      })
      .catch((response) => {
        console.error("Request for collection failed");
      });
  }
  render() {
    return (
      <SliderItem items={this.state.items} />
    );
  }
}

SliderContainer.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default SliderContainer
