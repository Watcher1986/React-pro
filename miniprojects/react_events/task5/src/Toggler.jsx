import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggler;
