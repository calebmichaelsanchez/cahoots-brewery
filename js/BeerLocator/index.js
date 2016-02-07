import BeerLocatorContainer from "./components/BeerLocatorContainer";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Locator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "bottles"
    }
    this.handleSetUrl = this.handleSetUrl.bind(this);
  }
  handleSetUrl(event) {
    event.preventDefault();
    let url = event.target.dataset.url
    this.setState({ url: url });
  }
  render() {
    return(
      <section className="locator">
        { <BeerLocatorContainer url={this.state.url} /> }
        <div className="location-selectors">
          <a href="#" className="location-selector" data-url="/bottles" onClick={this.handleSetUrl}>Bottles</a>
          <a href="#" className="location-selector" data-url="/on-tap" onClick={this.handleSetUrl}>On Tap</a>
        </div>
      </section>
    );
  }
}

let theLocator = document.getElementById("the-locator");

ReactDOM.render(<Locator/>, theLocator);
