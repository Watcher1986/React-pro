import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock />}</div>
      </div>
    );
  }
  // return (
  //   <>
  //     <Clock location="New York" offset={5} />
  //     {/* <Clock location="Kyiv" offset={2} />
  //     <Clock location="New York" offset={0} /> */}
  //   </>
  // );
}

export default App;
