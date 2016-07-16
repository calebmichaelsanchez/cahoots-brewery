import React, { Component } from 'react';
import axios from 'axios';
import helpers from '../../../shared/utils/helpers';
import Cookie from '../../../shared/utils/Cookie';
import Icon from '../Icons/Icon';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      load: false,
      rootUrl: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let hash = e.target.hash;
    if (hash === "#yes") {
      Cookie.createCookie("age", "21");
      helpers.redirect(this.state.rootUrl + "/home");
    } else {
      helpers.redirect("https://www.google.com/?q=where+to+get+fake+id")
    }
  }
  componentWillMount() {
    if (Cookie.getCookie("age")) {
      helpers.redirect(this.state.rootUrl + "/home");
    }
  }
  componentDidMount() {
    window.setTimeout(this.setState({ load: true }), 400);
    axios("/?format=json")
    .then((response) => {
      console.log(response);
      this.setState({
        description: response.data.collection.description,
        rootUrl: response.data.website.authenticUrl
      });
    })
    .catch((response) => {
      console.error(response);
      this.setState({ description: "Are you 21 or older?" });
    })
  }
  render() {
    let { description } = this.state;
    let text = helpers.stripHtmlTags(description);
    let loaded = this.state.load ? "cover__item--loaded" : "";
    return (
      <div className={`cover__item ${loaded}`}>
        <div className="cover__item-logo">
          <Icon icon="logo" />
        </div>
        <div className="cover__title">{text}</div>
        <div className="cover__buttons">
          <a href="#yes" className="cover__buttons-button" onClick={this.handleClick}>Yes</a>
          <a href="#no" className="cover__buttons-button" onClick={this.handleClick}>No</a>
        </div>
      </div>
    );
  }
}

export default Cover;
