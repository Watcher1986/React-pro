import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.filterText,
    };
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.inputValue}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    );
  }
}

export default Filter;
