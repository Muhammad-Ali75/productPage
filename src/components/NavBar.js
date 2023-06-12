import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import "../styles/navBar.css";
import logoImage from "../assets/logo.png";
import DropDown from "./DorpDown";
import Button from "./Button";

function NavBar() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(!click);

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
    <header className="header">
      <img src={logoImage} alt="Logo" className="logo-image" />
      <nav ref={navRef}>
        <a href="/expert">Expert Sourcing</a>
        <a href="/contact">Contract Manufacturing</a>
        <a href="/buy" className="buy">
          Buy
        </a>
        <a href="/finance">Financing</a>
        <a
          href="/about"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={closeMobileMenu}
        >
          About Us
          {dropdown && <DropDown />}
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <Button />
      <div className="btn-container">
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
