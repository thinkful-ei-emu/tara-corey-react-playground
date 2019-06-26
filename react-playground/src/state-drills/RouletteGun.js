import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber : null,
      spinningTheChamber: false
    }
  }

  handleTrigger = () => {
    this.setState( {
      spinningTheChamber: true
    });

    this.timeout = setTimeout(() => {
      let newChamber = Math.ceil(Math.random()*8);
      this.setState({
        chamber: newChamber,
        spinningTheChamber: false
      });
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    console.log(this.state.chamber);
    return (
      <div>
        {(this.state.spinningTheChamber && <p>spinning the chamber and pulling the trigger! ...</p>) || (this.state.chamber === this.props.bulletInChamber && <p>BANG!!!!</p>) || (<p>You're safe!!</p>)}
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;