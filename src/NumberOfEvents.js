import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: '',
  };

  handleInputChanged = (event) => {
    const value = event.target.value;


    if (value < 1) {
      return this.setState({
        numberOfEvents: '',
        infoText: 'Please enter a number between 1 and 32',
      })
    } else if (value > 32) {
      return this.setState({
        numberOfEvents: '',
        infoText: 'Please enter a number between 1 and 32'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: '',
      })
      this.props.updateEvents('', value);
    }
  };

  render() {

    return (
      <div className="numberOfEvents">

        <p>Number of events</p>
        <input
          type="number"
          placeholder="1-32"
          value={this.state.numberOfEvents}
          className="numberInput"
          onChange={this.handleInputChanged} />
        <div className="infoText"><ErrorAlert text={this.state.infoText} /></div>
      </div>
    );
  }
}

export default NumberOfEvents;