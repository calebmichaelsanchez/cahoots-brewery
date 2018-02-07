import React, { Component } from "react";
import axios from "axios";
import BeerLocatorItem from "./BeerLocatorItem";

class BeerLocatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      items: []
    }
  }
  componentDidMount() {
    this.getContent(this.props.url);
  }
  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps.url);
  }
  getContent(url) {
    axios(url + '?format=json')
      .then((response) => {
        this.setState({
          title: response.data.collection.title,
          items: response.data.items
        });
      })
      .catch((response) => {
        console.error("Request for collection failed");
      });
  }
  render() {
    return ( <BeerLocatorItem {...this.state} /> );
  }
}

export default BeerLocatorContainer;
