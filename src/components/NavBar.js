import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsve-nav");
  }

  return (
    <header>
      <h3>LOGO</h3>
      <nav>
        <a href="/expert">Expert Sourcing</a>
        <a href="/contact">Contract Manufacturing</a>
        <a href="/buy">Buy</a>
        <a href="/finance">Financing</a>
        <a href="/about">About Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
