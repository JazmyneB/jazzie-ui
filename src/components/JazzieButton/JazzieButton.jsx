import React from 'react';
import PropTypes from 'prop-types';
import './JazzieButton.css';

const JazzieButton = ({
  label,
  variant = 'radiant',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="btn-label">{label}</span>
    </button>
  );
};

JazzieButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['radiant', 'aurora', 'soft-blush', 'rose-quartz', 'pearl-glass']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

export default JazzieButton;

