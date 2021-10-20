import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isOpen, onClick, children, title }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button onClick={onClick} className="expand__toggle-btn">
         {isOpen ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
        </button>
      </div>
      <div className="expand__content">{isOpen && children}</div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: '',
  isOpen: false,
};

export default Expand;
