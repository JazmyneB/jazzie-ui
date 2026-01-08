import React, { useState, useEffect } from "react";
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
  const [currentColumns, setCurrentColumns] = useState(columns);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 768 && columnsMobile) setCurrentColumns(columnsMobile);
      else if (width <= 1024 && columnsTablet) setCurrentColumns(columnsTablet);
      else setCurrentColumns(columns);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, [columns, columnsTablet, columnsMobile]);

  const gridStyle = {
    gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
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
  columnsTablet: PropTypes.number,
  columnsMobile: PropTypes.number,
  gap: PropTypes.string,
  rowHeight: PropTypes.string,
  className: PropTypes.string,
};

export default JazzieGrid;
