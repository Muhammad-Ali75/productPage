import { BiCategory } from "react-icons/bi";
import "./styles/CategoryDropdown.css";
function CatergoryDropdown({ open, set }) {
  return (
    <>
      <button className="categoryContainer" onClick={set}>
        <BiCategory />
        <p>Categories</p>
      </button>
    </>
  );
}

export default CatergoryDropdown;
