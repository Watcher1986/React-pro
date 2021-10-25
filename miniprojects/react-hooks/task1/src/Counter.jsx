import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(7);
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button className="counter__button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };

//     this.increment = this.increment.bind(this);
//   }

//   decrement() {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   }

//   increment() {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   }

//   reset = () => {
//     this.setState({
//       counter: 0,
//     });
//   };

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter__button" onClick={() => this.decrement()}>
//           -
//         </button>
//         <span className="counter__value" onClick={this.reset}>
//           {this.state.counter}
//         </span>
//         <button className="counter__button" onClick={this.increment}>
//           +
//         </button>
//       </div>
//     );
//   }
// }
