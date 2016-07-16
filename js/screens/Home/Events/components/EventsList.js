import React, { Component } from "react";
import EventsItem from "./EventsItem";

class EventsList extends Component {
  render() {
    let { upcoming, title } = this.props;
    let upcomingLength = upcoming.length;
    if (upcomingLength > 0) {
      return (
        <section className="events-container">
          <h1>{title}</h1>
          {(() => {
            return upcoming.map((event) => {
              return ( <EventsItem key={event.id} {...event} /> );
            });
          })()}
        </section>
      )
    } else {
      return (<div></div>);
    }
  }
}

export default EventsList;
