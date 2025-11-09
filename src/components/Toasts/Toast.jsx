import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineInformationCircle,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle,
} from 'react-icons/hi2';
import './Toast.css';

const Toast = ({ message, type = 'info', show, onClose, duration = 2500 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose?.(), duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const icons = {
    info: <HiOutlineInformationCircle className="toast-icon info-icon" />,
    success: <HiOutlineCheckCircle className="toast-icon success-icon" />,
    warning: <HiOutlineExclamationTriangle className="toast-icon warning-icon" />,
    error: <HiOutlineXCircle className="toast-icon error-icon" />,
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`jazzie-toast ${type}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="toast-card">
            {icons[type]}
            <p className="toast-message">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
