import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    onClick,
    disabled = false,
    text= "Primary Button", //text to display on the button
    buttonType="primary", //type of button (primary, secondary, or tertiary)
    children
}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button ${buttonType}`}
            data-testid={`btn-${buttonType}`}
        > {children || text}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    children: PropTypes.node,
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
    
};

Button.defaultProps = {
    disabled: false,
    text: "Primary Button",
    buttonType: "primary"
};


export default Button;