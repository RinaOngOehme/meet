import React, { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { OfflineAlert } from "./Alert";
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from "./EventGenre";


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

  //get data for chart
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App </h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          updateEvents={this.updateEvents}
          locations={locations} />
        <NumberOfEvents updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents} />
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={events} />

        <OfflineAlert text={this.state.infoText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}
export default App;
