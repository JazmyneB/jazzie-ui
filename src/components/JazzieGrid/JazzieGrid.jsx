import React from "react";
import PropTypes from "prop-types";
import "./JazzieGrid.css";

const JazzieGrid = ({
  children,
  columns = 3,
  gap = "var(--space-md)",
  rowHeight = "auto",
  className = "",
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    gridAutoRows: rowHeight,
  };

  return (
    <div className={`jazzie-grid ${className}`} style={gridStyle}>
      {children}
    </div>
  );
};

JazzieGrid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
  rowHeight: PropTypes.string,
  className: PropTypes.string,
};

export default JazzieGrid;
