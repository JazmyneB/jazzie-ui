import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({
    title,
    children,
    variant = 'soft', //default variant
    size = 'md' // 'sm', 'md', 'lg'
}) => {
    return (
        <div className={`card-container ${variant} ${size}`}>
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
    variant: PropTypes.oneOf(['soft', 'elevated', 'dark']),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Card.defaultProps = {
    variant: 'soft',
    size: 'md'
};

export default Card;