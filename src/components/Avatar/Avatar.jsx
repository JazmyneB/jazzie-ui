import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({
  size = 'md',
  src,
  initials,
  status,
  badgeCount,
  variant = 'glass',
}) => {
  return (
    <div className={`avatar-wrapper ${size} ${variant}`}>
      {src ? (
        <img className="avatar-img" src={src} alt="Avatar" />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}

      {status && <span className={`avatar-status ${status}`}></span>}

      {badgeCount > 0 && (
        <span className="avatar-badge">{badgeCount}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  src: PropTypes.string,
  initials: PropTypes.string,
  status: PropTypes.oneOf(['online', 'away', 'offline']),
  badgeCount: PropTypes.number,
  variant: PropTypes.oneOf(['glass', 'bordered', 'gradient']),
};

export default Avatar;
