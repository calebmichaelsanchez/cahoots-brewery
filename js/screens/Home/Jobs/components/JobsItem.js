import React, { Component } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import helpers from "../../../../shared/utils/helpers";

class JobsItem extends Component {
  constructor() {
    super();
    this.state = {
      height: null,
      openHeight: null,
      open: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    let title = findDOMNode(this.refs.title)
    let meta = findDOMNode(this.refs.meta);
    this.setState({
      height: title.clientHeight,
      openHeight: meta.clientHeight
    });

    window.addEventListener("resize", this.handleResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }
  handleClick(e) {
    let { open, height, openHeight } = this.state;
    let title = findDOMNode(this.refs.title);
    if (!open) {
      this.setState({
        height: height + openHeight,
        open: true
      });
    } else {
      this.setState({
        height: title.clientHeight,
        open: false
      });
    }
  }
  handleResize() {
    let meta = findDOMNode(this.refs.meta);
    let title = findDOMNode(this.refs.title);
    this.setState({
      openHeight: meta.clientHeight,
      height: title.clientHeight,
      open: false
    });
  }
  render() {
    let { title, excerpt } = this.props, style, className;
    excerpt = helpers.stripHtmlTags(excerpt);
    style = { height: this.state.height };
    className = { active: this.state.open ? "active" : "" }
    return (
      <div ref="job" className={`job ${className.active}`} onClick={this.handleClick} style={style}>
        <div ref="title" className="job__title">
          <h5>{title}</h5>
        </div>
        <div ref="meta" className="job__meta">
          <div className="excerpt">{excerpt}</div>
          <a href="mailto:kmaccaughey@cahootsbrewing.com" className="btn btn--primary">Contact</a>
        </div>
      </div>
    );
  }
}

export default JobsItem;
