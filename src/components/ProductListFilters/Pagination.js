import { useContext } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination() {
  const {
    state: { page },
    pageChange,
  } = useContext(PleContext);

  const totalPage = 5;

  const handlePageChange = (sign) => {
    if (sign === "+" && page < totalPage) {
      pageChange(page + 1);
    } else if (sign === "-" && page > 1) {
      pageChange(page - 1);
    }
  };
  return (
    <div className="paginationContainer">
      <button onClick={() => handlePageChange("-")}>
        <FiChevronLeft />
      </button>

      <div className="currentPage">{page}</div>
      <p style={{ display: "flex" }}>of {totalPage}</p>

      <button onClick={() => handlePageChange("+")}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
