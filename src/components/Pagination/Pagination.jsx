import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const generatePages = () => {
    const pages = [];
    pages.push(1);
    if (totalPages >= 2) pages.push(2);
    if (totalPages >= 3) pages.push(3);

    if (currentPage <= 3) {
      if (totalPages > 4) pages.push("...");
      if (totalPages > 3) pages.push(totalPages);
      return pages;
    }

    if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 2) {
      pages.push("...");
      for (let i = totalPages - 3; i <= totalPages; i++) {
        if (i > 3) pages.push(i);
      }
      return pages;
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {generatePages().map((pg, idx) => (
        <button
          key={idx}
          className={`pagination-page 
            ${pg === currentPage ? "active" : ""} 
            ${pg === "..." ? "dots" : ""}`}
          onClick={() => pg !== "..." && onPageChange(pg)}
          disabled={pg === "..."}
        >
          {pg}
        </button>
      ))}
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
};

export default Pagination;
