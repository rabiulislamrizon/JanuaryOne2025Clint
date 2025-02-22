import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-rounded">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
           <i class="bx bxs-chevron-left"></i>
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
              {currentPage === page && <span className="sr-only">(current)</span>}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
           <i class="bx bxs-chevron-right"></i>
     
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
