import React, { useState } from "react";
import "./styles/dropDown.css";

function DropDown() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(() => !click);
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li onClick={handleClick}>Our Story</li>
        <li onClick={handleClick}>How to Buy</li>
      </ul>
    </>
  );
}

export default DropDown;
