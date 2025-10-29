import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';


const Modal =({
    isOpen,
    onClose,
    title,
    children,
    variant = 'soft' //default variant
})=> {
    if (!isOpen) return null;

    return (
        <div className={`modal-container ${variant}`}>
            <div className={`modal-content ${variant}`}>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    )
};
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['soft', 'elevated', 'dark'])
};
Modal.defaultProps = {
    title: 'Modal Title',
    variant: 'soft'
};

export default Modal;