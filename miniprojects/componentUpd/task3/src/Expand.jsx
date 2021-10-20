import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  onClickChange = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={this.onClickChange} className="expand__toggle-btn">
            {isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="expand__content">{isOpen && children}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
