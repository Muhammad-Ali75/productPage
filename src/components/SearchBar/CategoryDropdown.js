import { BiCategory } from "react-icons/bi";
import "./styles/CategoryDropdown.css";
function CatergoryDropdown({ open, set }) {
  return (
    <>
      <button
        className={!open ? "categoryContainer" : "categoryContainer open"}
        onClick={set}
      >
        <BiCategory />
        <p>Categories</p>
      </button>
    </>
  );
}

export default CatergoryDropdown;
