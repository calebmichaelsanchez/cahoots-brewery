import React, { Component } from "react";
import JobsItem from "./JobsItem";
import helpers from "../../../../shared/utils/helpers";

class JobsList extends Component {
  render() {
    let { items, title, description } = this.props;
    description = helpers.stripHtmlTags(description);
    let itemsLength = items.length;
    if (itemsLength > 0) {
      return (
        <section className="jobs-container">
          <h1>{title}</h1>
          <div className="jobs-description">
            <p>{description}</p>
          </div>
          {(() => {
            return items.map((item) => {
              return ( <JobsItem key={item.id} {...item} /> );
            });
          })()}
        </section>
      )
    } else {
      return (<div></div>);
    }
  }
}

export default JobsList;
