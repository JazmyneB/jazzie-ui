import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ 
    label, 
    type = "text", // 'text', 'password', 'email', etc.
    value, 
    onChange, 
    placeholder,
    id,
    disabled
}) => {
    return (
        <div className="input-field-container">
            {label && <label className="input-label">{label}</label>}
            <input
                data-testid="input-field"
                id={id}
                className="input-field"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
}
InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
InputField.defaultProps = {
    type: 'text',
    placeholder: '',
    label: ''
};
export default InputField;