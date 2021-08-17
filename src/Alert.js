import React, { Component } from 'react'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.color = null
  }



  render() {
    return (
      <div className='Alert'>
      </div>
    )
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = '#0000f9'
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = '#fdc900'
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = '#d20000'
  }
}

export { InfoAlert, WarningAlert, ErrorAlert }
