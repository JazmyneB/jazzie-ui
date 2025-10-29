import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({
    title,
    children,
    variant = 'soft' //default variant
}) => {
    return (
        <div className={`card-container ${variant}`}>
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['soft', 'elevated', 'dark'])
};

Card.defaultProps = {
    variant: 'soft'
};

export default Card;