import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Tom',
      counter: props.start,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }

  render() {
    console.log(this.state);
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
