import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';



class App extends Component {
  state = {
    events: [],
    numberOfEvents: 32,
    infoText: '',
    locations: []
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
