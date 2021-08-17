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
        <li className="status">{event.status}</li>
        <li className="htmlLink">{event.htmlLink}</li>
        <li className="summary">{event.summary}</li>
        <li className="description">{event.description}</li>
        <li className="location">{event.location}</li>
        <li className="start">{event.start.dateTime}</li>
        <li className="end">{event.end.dateTime}</li>

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