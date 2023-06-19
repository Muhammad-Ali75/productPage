import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination() {
  const [{ currentPage, totalPage }, setPage] = useState({
    currentPage: 1,
    totalPage: 5,
  });

  const handlePageChange = (sign) => {
    if (sign === "+" && currentPage < totalPage) {
      setPage((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
    } else if (sign === "-" && currentPage > 1) {
      setPage((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
    }
  };
  return (
    <div className="paginationContainer">
      <button onClick={() => handlePageChange("-")}>
        <FiChevronLeft />
      </button>

      <div className="currentPage">{currentPage}</div>
      <p style={{ display: "flex" }}>of {totalPage}</p>

      <button onClick={() => handlePageChange("+")}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
