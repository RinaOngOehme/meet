import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    numberOfEvents: 32,
    infoText: '',
    locations: []
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      locationEvents = events;
      if (location === 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventCount === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventCount > 0) {
        locationEvents = events.slice(0, eventCount);
      } else if (location === '' && eventCount === '') {
        locationEvents = events;
      }

      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
      });

    });
  }

  render() {

    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}
export default App;
