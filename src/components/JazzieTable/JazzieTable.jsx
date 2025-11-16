import React, { useState, useMemo } from "react";
import Pagination from "../Pagination/Pagination";
import "./JazzieTable.css"; // your soft-girl CSS

const JazzieTable = ({ data, columns, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (accessor) => {
    if (sortConfig.key === accessor) {
      setSortConfig({
        key: accessor,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: accessor, direction: "asc" });
    }
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="jazzie-table-container">
      <table className="jazzie-grid-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                onClick={() => handleSort(col.accessor)}
                className={`sortable-header ${
                  sortConfig.key === col.accessor ? "active" : ""
                }`}
              >
                {col.header || col.accessor}
                {sortConfig.key === col.accessor && (
                  <span className="sort-arrow">
                    {sortConfig.direction === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center", padding: "1rem" }}>
                No data available
              </td>
            </tr>
          ) : (
            paginatedData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.accessor}>{row[col.accessor]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
};

export default JazzieTable;
