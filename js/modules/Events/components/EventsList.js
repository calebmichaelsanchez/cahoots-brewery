import React, { Component } from "react";
import EventsItem from "./EventsItem";

class EventsList extends Component {
  render() {
    let { upcoming, past, title } = this.props;
    let upcomingLength = upcoming.length;

    return (
      <div className="events-container">
        <h1>{title}</h1>
        {(() => {
          if (upcomingLength > 0) {
            return upcoming.map((event) => {
              return ( <EventsItem key={event.id} {...event} /> );
            });
          } else {
            return (<h4>No events currently.</h4>);
          }
        })()}
      </div>
    );
  }
}

export default EventsList;
