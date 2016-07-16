import React, { Component } from "react";
import ReactDOM from "react-dom";
import BeerLocatorContainer from "./components/BeerLocatorContainer";

class Locator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "bottles"
    }
    this.handleSetUrl = this.handleSetUrl.bind(this);
  }
  handleSetUrl(event) {
    let selectors = document.querySelectorAll(".location-selector"),
        i, selectorLength;
    selectors = [...selectors];
    selectorLength = selectors.length;
    for (i = 0; i < selectorLength; i++) {
      selectors[i].classList.remove("active");
    }
    event.preventDefault();
    event.target.classList.add("active");
    let url = event.target.dataset.url
    this.setState({ url: url });
  }
  render() {
    return(
      <div className="locator">
        <h1>Find Our Beer</h1>
        { <BeerLocatorContainer active={this.state.active} url={this.state.url} /> }
        <div className="location-selectors">
          <a href="#" className="location-selector active" data-url="/bottles" onClick={this.handleSetUrl}>Bottles</a>
          <a href="#" className="location-selector" data-url="/on-tap" onClick={this.handleSetUrl}>On Tap</a>
        </div>
      </div>
    );
  }
}

let theLocator = document.getElementById("the-locator");
if (theLocator) {
  ReactDOM.render(<Locator/>, theLocator);
}

