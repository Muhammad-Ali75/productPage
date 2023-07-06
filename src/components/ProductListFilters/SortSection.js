import "./styles/SortSection.css";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination";

function SortSection({ view, set }) {
  function handleSet(event) {
    set(event.currentTarget.dataset.view);
  }

  return (
    <div className="sortContainer">
      <div className="viewContainer">
        <BsFillGrid3X2GapFill
          className={view === "grid" ? "" : "deativated"}
          onClick={handleSet}
          data-view="grid"
        />
        <FaList
          className={view === "list" ? "" : "deativated"}
          style={{ fontSize: 22 }}
          onClick={handleSet}
          data-view="list"
        />
      </div>
      <div className="sortPagination">
        <p>Sort By:</p>
        <SortDropdown />
        <div className="pagi">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default SortSection;
