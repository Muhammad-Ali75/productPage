import { useState } from "react";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import "./styles/SortSection.css";
import SortDropdown from "./SortDropdown";

function SortSection({ view, set }) {
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
    <div className="sortContainer">
      <div className="viewContainer">
        <BsFillGrid3X2GapFill
          className={view === "grid" ? "" : "deativated"}
          onClick={() => set("grid")}
        />
        <FaList
          className={view === "list" ? "" : "deativated"}
          style={{ fontSize: 22 }}
          onClick={() => set("list")}
        />
      </div>
      <div className="sortPagination">
        <SortDropdown />
        <div className="paginationContainer">
          <button onClick={() => handlePageChange("-")}>
            <FiChevronLeft />
          </button>

          <div className="currentPage">{currentPage}</div>
          <p>of {totalPage}</p>

          <button onClick={() => handlePageChange("+")}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortSection;
