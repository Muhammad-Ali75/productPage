import React, { useState } from "react";
import "../styles/dropDown.css";

function DropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li onClick={() => setClick(false)}>Our Story</li>
        <li onClick={() => setClick(false)}>How to Buy</li>
      </ul>
    </>
  );
}

export default DropDown;
