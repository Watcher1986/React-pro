import React from 'react';

class GoodButton extends React.Component {
  handleCkick(e) {
    console.log(e.target.textContent);
    console.log(e);
    alert('Good job!');
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
