import React from 'react';
import PropTypes from 'prop-types';
import './SoftToggle.css';

const SoftToggle = ({
  checked,
  onChange,
  size = 'md',
  disabled = false,
  variant = 'rose', // rose | blush | accent | neo
}) => {
  return (
    <label
      className={`soft-toggle ${size} ${variant} ${disabled ? 'disabled' : ''}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="slider"></span>
    </label>
  );
};

SoftToggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['rose', 'blush', 'accent', 'neo']),
};

export default SoftToggle;
