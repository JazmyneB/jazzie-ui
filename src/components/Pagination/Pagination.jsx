import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1
}) => {

  // Generate array of page numbers with ellipsis
  const generatePages = () => {
    const pages = [];

    const start = Math.max(1, currentPage - siblingCount);
    const end = Math.min(totalPages, currentPage + siblingCount);

    if (start > 1) pages.push(1);
    if (start > 4) pages.push("...");

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("...");
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="pagination-container">
      {/* Prev Button */}
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      {generatePages().map((pg, i) => (
        <button
          key={i}
          className={`pagination-page ${
            pg === currentPage ? "active" : ""
          } ${pg === "..." ? "dots" : ""}`}
          onClick={() => pg !== "..." && onPageChange(pg)}
          disabled={pg === "..."}
        >
          {pg}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  siblingCount: PropTypes.number
};

export default Pagination;