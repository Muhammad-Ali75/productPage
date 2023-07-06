import { useEffect, useRef, useState } from "react";
// import { Context as ProductContext } from "../../context/ProductContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

import "./styles/navBar.css";
import logoImage from "../../assets/logo.png";
import DropDown from "./DorpDown";
import Button from "./Button";
import { useSelector } from "react-redux";

function NavBar() {
  // const {
  //   state: { cart },
  // } = useContext(ProductContext);
  const { cart } = useSelector((state) => state.product);

  const navRef = useRef();

  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }

  function toggleDropdown() {
    setDropdown(() => !dropdown);
  }

  const onMouseEnter = () => {
    if (!isMobile) {
      setDropdown(() => true);
    }
  };

  const onMouseLeave = () => {
    if (!isMobile) {
      setDropdown(() => false);
    }
  };

  return (
    <header>
      <div className="navbar-content">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <nav ref={navRef}>
          <a href="/expert">Expert Sourcing</a>
          <a href="/contact">Contract Manufacturing</a>
          <a href="/buy" className="buy">
            Buy
          </a>
          <a href="/finance">Financing</a>
          <div
            className="about-us"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div>
              About Us
              <HiOutlineChevronDown
                onClick={toggleDropdown}
                className="downA"
              />
            </div>
            {dropdown && <DropDown />}
          </div>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
          <div className="login-buttons">
            <Button />
          </div>
        </nav>
        <div className="cardContainer">
          <div>
            <Button />
          </div>
          <button className="nav nav-btn cart-btn">
            <BsBasket2 />
            <div className="cart-number">{cart}</div>
          </button>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
