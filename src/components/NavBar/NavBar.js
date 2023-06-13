import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

import "./styles/navBar.css";
import logoImage from "../../assets/logo.png";
import DropDown from "./DorpDown";
import Button from "./Button";

function NavBar() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1024) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1024) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <header>
      <img src={logoImage} alt="Logo" className="logo-image" />
      <nav ref={navRef}>
        <a href="/expert">Expert Sourcing</a>
        <a href="/contact">Contract Manufacturing</a>
        <a href="/buy" className="buy">
          Buy
        </a>
        <a href="/finance">Financing</a>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          About Us
          <HiOutlineChevronDown className="downA" />
          {dropdown && <DropDown />}
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <Button />
      <div className="cardContainer">
        <button className="nav nav-btn cart-btn">
          <BsBasket2 />
        </button>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
