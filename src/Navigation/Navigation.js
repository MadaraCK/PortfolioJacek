import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">logo</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link className="home" to="/">
          <li>Films</li>
        </Link>
        <Link className="contact" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </nav>
  );
}
export default Navigation;
