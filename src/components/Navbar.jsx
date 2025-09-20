import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Eng Abdullahi </div>

      {/* Desktop Menu */}
      <ul className="nav-menu">
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleNav}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${navOpen ? "open" : ""}`}>
        <li><Link to="hero" smooth={true} duration={500} onClick={closeNav}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={closeNav}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500} onClick={closeNav}>Services</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={closeNav}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={closeNav}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
