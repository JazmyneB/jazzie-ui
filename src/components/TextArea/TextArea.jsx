import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  rows = 4,
}) => {
  return (
    <div className="textarea-field-container">
      {label && <label className="textarea-label">{label}</label>}

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="textarea-field"
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  placeholder: '',
  rows: 4,
};

export default TextArea;
