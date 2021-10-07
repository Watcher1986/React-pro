import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverBtnColor: this.state.hoverBtnColor,
    };
    this.onHoverBtn = this.onHoverBtn.bind(this);
  }

  onHoverBtn = text => {
    this.setState({
      hoverBtnColor: text,
    });
  };

  onLeaveBtn = () => {
    this.setState({
      hoverBtnColor: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.hoverBtnColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onHoverBtn('Coral')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onHoverBtn('Aqua')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onHoverBtn('Bisque')}
            onMouseLeave={this.onLeaveBtn}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
