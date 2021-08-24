import React, { Component } from 'react';



class Event extends Component {
  state = {
    show: false,
  };

  handleButton = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const event = this.props.event;
    return (
      <ul className="event">
        <h3>Event Information</h3>
        <li className="status">Status: {event.status}</li>
        <li className="htmlLink">Link: {event.htmlLink}</li>
        <li className="summary">Summary: {event.summary}</li>
        <li className="location">Location: {event.location}</li>
        <li className="start">Event Start Date and Time:{event.start.dateTime}</li>
        <li className="end">Event End Date and Time{event.end.dateTime}</li>
        {this.state.show === true && (
          <p className="details">Description:{event.description}</p>
        )}
        {this.state.show === false && (
          <button className="showMore" onClick={() => this.handleButton()}>
            Show more
          </button>
        )}
        {this.state.show === true && (
          <button className="showLess" onClick={() => this.handleButton()}>
            Show less
          </button>
        )}
      </ul>
    );
  }
}

export default Event;