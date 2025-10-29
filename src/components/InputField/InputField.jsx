import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ 
    label, 
    type, 
    value, 
    onChange, 
    placeholder 
}) => {
    return (
        <div className="input-field">
            {label && <label className="input-label">{label}</label>}
            <input
                className="input-element"
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

    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
InputField.defaultProps = {
    type: 'text',
    placeholder: '',
};
export default InputField;