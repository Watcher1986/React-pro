import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      <>
        {visible && (
          <>
            <Clock location={'London'} offset={1} />
            <Clock location={'Kyiv'} offset={3} />
            <Clock location={'New York'} offset={-4} />
          </>
        )}
      </>
    </>
  );
};

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//     };
//   }

//   toggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button className="btn" onClick={this.toggle}>
//           Toggle
//         </button>
//         <>
//           {this.state.visible && (
//             <>
//               <Clock location={'London'} offset={1} />
//               <Clock location={'Kyiv'} offset={3} />
//               <Clock location={'New York'} offset={-4} />
//             </>
//           )}
//         </>
//       </>
//     );
//   }
// }
