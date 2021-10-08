import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnColorText: '',
    };

    // this.onHovBtn = this.onHovBtn.bind(this);
    // this.onLeaveBtn = this.onLeaveBtn.bind(this);
  }
  onHovBtn = text => {
    this.setState({
      btnColorText: text,
    });
  };

  onLeaveBtn = () => {
    this.setState({
      btnColorText: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.btnColorText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.onHovBtn('Coral')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onHovBtn('Aqua')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onHovBtn('Bisque')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
