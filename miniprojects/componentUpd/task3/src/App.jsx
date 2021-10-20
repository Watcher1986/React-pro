import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  onClickChange = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    return (
      <div className="app">
        <Expand 
        isOpen={this.state.isOpen}
        title="Some title"
        onClick={this.onClickChange}
        >
          {elem}
        </Expand>
      </div>
    );
  }
}

export default App;
