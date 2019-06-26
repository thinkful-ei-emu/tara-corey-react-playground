import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletChamber : this.props.chamber,
      chosenChamber: null,
      message: ''
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick //call a function that randomly generates a number...>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;