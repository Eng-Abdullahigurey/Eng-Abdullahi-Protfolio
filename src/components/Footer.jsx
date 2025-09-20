import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Eng Abdullahi</h3>
          <p>Software Engineer & Full-Stack Developer</p>
        </div>

        {/* Quick Links */}
        <ul className="footer-links">
          <li>
            <Link to="hero" smooth={true} duration={600}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={600}>About</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={600}>Services</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={600}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={600}>Contact</Link>
          </li>
        </ul>

        {/* Social + Back to Top */}
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/Eng-Abdullahi" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Eng-Abdullahigurey" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://facebook.com/UpdullahiGurrey" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>

          <Link to="hero" smooth={true} duration={600} className="back-to-top">
            <FaArrowUp />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eng Abdullahi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
