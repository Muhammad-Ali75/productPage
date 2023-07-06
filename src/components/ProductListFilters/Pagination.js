import { useContext } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";
// import { Context as ProductContext } from "../../context/ProductContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";

function Pagination() {
  const {
    state: { page },
    pageChange,
  } = useContext(PleContext);

  // const {
  //   state: { totalPages },
  // } = useContext(ProductContext);

  const { totalPages } = useSelector((state) => state.product);

  const handlePageChange = (event) => {
    const {
      currentTarget: {
        dataset: { sign },
      },
    } = event;

    if (sign === "+" && page < totalPages) {
      pageChange(page + 1);
    } else if (sign === "-" && page > 1) {
      pageChange(page - 1);
    }
  };
  return (
    <div className="paginationContainer">
      <button data-sign="-" onClick={handlePageChange}>
        <FiChevronLeft />
      </button>

      <div className="currentPage">{page}</div>
      <p style={{ display: "flex" }}>of {totalPages}</p>

      <button data-sign="+" onClick={handlePageChange}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
