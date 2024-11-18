import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assets/images/mumair_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeClass = isOpen ? "change" : "";
  const hideNavbarMenuClass = isOpen ? "close" : "show";

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="Navbar-header-main">
      <div className="Navbar-header-container">
        <div className="Navbar-header-logo">
          <Image src={Logo} alt="" />
        </div>
        <div
          className={`Navbar-header-menu-bars ${changeClass}`}
          onClick={openSideBar}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`Navbar-header-menu-items ${hideNavbarMenuClass}`}>
          <li className="Navbar-header-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="Navbar-header-menu-item">
            <a href="#">About Me</a>
          </li>
          <li className="Navbar-header-menu-item">
            <a href="#">Services</a>
          </li>
          <li className="Navbar-header-menu-item">
            <a href="#">Projects</a>
          </li>
          <li className="Navbar-header-menu-item">
            <a href="#">Testimonials</a>
          </li>
          <li className="Navbar-header-menu-item">
            <a href="#">Contact</a>
          </li>
          <li className="Navbar-header-menu-item download">
            <a href="#" className="Button-wrapper">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
