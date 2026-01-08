import React from "react";
import PropTypes from "prop-types";
import "./JazzieGrid.css";

const JazzieGrid = ({
  children,
  columns = 3,
  columnsTablet,
  columnsMobile,
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
    <div
      className={`jazzie-grid ${className}`}
      style={gridStyle}
      data-columns-tablet={columnsTablet || columns}
      data-columns-mobile={columnsMobile || columns}
    >
      {children}
    </div>
  );
};

JazzieGrid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  columnsTablet: PropTypes.number,
  columnsMobile: PropTypes.number,
  gap: PropTypes.string,
  rowHeight: PropTypes.string,
  className: PropTypes.string,
};

export default JazzieGrid;
