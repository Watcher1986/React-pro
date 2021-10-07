import React from 'react';

class GoodButton extends React.Component {
  handleCkick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleCkick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
