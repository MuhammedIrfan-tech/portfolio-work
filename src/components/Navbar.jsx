import React, { useState } from "react";
import '../styles/navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaFileAlt } from "react-icons/fa";
import resume from '../assets/resume.webp';
const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/" data-aos="fade-right">
          MyPortfolio
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          data-aos="fade-left"
        >
          <ul className="navbar-nav align-items-center gap-3">

            <li className="nav-item">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link d-flex align-items-center gap-2"
              >
                <FaFileAlt /> Resume
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link d-flex align-items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link d-flex align-items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link d-flex align-items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
