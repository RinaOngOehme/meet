import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      return this.setState({
        infoText: 'Please enter a number between 0 and 32',
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: '',
      });
      this.props.updateEventCount(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <p>Please limit your number of events to be displayed. Maximum is 32. </p>

        <input type="number"
          id="numberInput"
          value={this.state.numberOfEvents}
          className="numberInput" onChange={(e) => this.handleInputChanged(e)} />
        <div className="errorText"><ErrorAlert text={this.state.errorText} /></div>
      </div>
    );
  }
}

export default NumberOfEvents;