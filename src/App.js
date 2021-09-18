import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from "./Alert";
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state = {
    events: [],
    numberOfEvents: 32,
    infoText: '',
    locations: [],
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {

      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events, locations: extractLocations(events)
          });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
        infoText: "You are offline and the events may not be up-to-date. Please go online to view the latest events"
      })
    }
    else {
      this.setState({
        infoText: ""
      })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    const { numberOfEvents } = this.state
    const eventCount = numberOfEvents
    let locationEvents;
    getEvents().then((events) => {
      // sets default events
      locationEvents = events;
      if (location !== 'all') {
        // if a city is selected, the events are filtered
        locationEvents = events.filter((event) => event.location === location);
      }
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        numberOfEvents: eventCount,
      });
    });
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />
        <OfflineAlert text={this.state.infoText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}
export default App;
