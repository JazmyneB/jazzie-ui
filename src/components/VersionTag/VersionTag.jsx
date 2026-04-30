import React from 'react';
import './Version.css';

const VersionTag = ({ version }) => {
  return (
    <div className="version-tag">
      version {version}
    </div>
  );
};

export default VersionTag;