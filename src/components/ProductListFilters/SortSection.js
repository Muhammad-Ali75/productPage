import { useState } from "react";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import "./styles/SortSection.css";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";

function SortSection({ view, set }) {
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
        <Pagination />
      </div>
    </div>
  );
}

export default SortSection;
