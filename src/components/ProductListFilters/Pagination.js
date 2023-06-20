import { useContext } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";
import { Context as ProductContext } from "../../context/ProductContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination() {
  const {
    state: { page },
    pageChange,
  } = useContext(PleContext);

  const {
    state: { totalPages },
  } = useContext(ProductContext);

  const handlePageChange = (sign) => {
    if (sign === "+" && page < totalPages) {
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
      <p style={{ display: "flex" }}>of {totalPages}</p>

      <button onClick={() => handlePageChange("+")}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
