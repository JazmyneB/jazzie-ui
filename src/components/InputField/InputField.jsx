import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ 
    label, 
    type, // 'text', 'password', 'email', etc.
    value, 
    onChange, 
    placeholder,
    id
}) => {
    return (
        <div className="input-field-container">
            {label && <label className="input-label">{label}</label>}
            <input
                id={id}
                className="input-field"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
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