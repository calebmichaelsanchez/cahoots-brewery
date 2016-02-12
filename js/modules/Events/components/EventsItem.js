import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import helpers from "../../../utils/helpers";

class EventsItem extends Component {
  constructor() {
    super();
    this.state = {
      height: null,
      openHeight: null,
      open: false,
      width: window.innerWidth || document.documentElement.clientWidth
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    let eventTitle = findDOMNode(this.refs.eventTitle)
    let eventMeta = findDOMNode(this.refs.eventMeta);
    this.setState({
      height: eventTitle.clientHeight,
      openHeight: eventMeta.clientHeight
    });

    window.addEventListener("resize", this.handleResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }
  handleClick(e) {
    let { width, open, height, openHeight } = this.state;
    let eventTitle = findDOMNode(this.refs.eventTitle);
    if (!open) {
      this.setState({
        height: height + openHeight,
        open: true
      });
    } else {
      this.setState({
        height: eventTitle.clientHeight,
        open: false
      });
    }
  }
  handleResize() {
    let eventMeta = findDOMNode(this.refs.eventMeta);
    let eventTitle = findDOMNode(this.refs.eventTitle);
    this.setState({
      width: window.innerWidth || document.documentElement.clientWidth,
      openHeight: eventMeta.clientHeight,
      height: eventTitle.clientHeight
    });
  }
  render() {
    let { title, location, excerpt, structuredContent } = this.props,
        style,
        eventClassName;
    let startDate = new Date(structuredContent.startDate);
    startDate = startDate.customFormat("#MM#/#DD#");
    excerpt = helpers.stripHtmlTags(excerpt);
    style = { height: this.state.height };
    eventClassName = {
      active: this.state.open ? "active" : ""
    }
    return (
      <div ref="event" className={`event ${eventClassName.active}`} onClick={this.handleClick} style={style}>
        <div ref="eventTitle" className="event__title">
          <h5>{title} - {startDate}</h5>
        </div>
        <div ref="eventMeta" className="event__meta">
          {(() => {
            if (location.addressTitle) {
              return (
                <div className="address">
                  <h5>{location.addressTitle}</h5>
                  <a href={"http://maps.google.com?q=" + location.addressLine1 + location.addressLine2}>
                  {location.addressLine1}<br/>
                  {location.addressLine2}
                  </a>
                </div>
              );
            }
            })()}
          <div className="excerpt">{excerpt}</div>
        </div>
      </div>
    );
  }
}

export default EventsItem;
