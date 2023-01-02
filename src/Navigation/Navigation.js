import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-box">
        <Link to="/">
          <div className="logo_nav" />
        </Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link className="home" to="/">
          <li>Films</li>
        </Link>
        <Link className="contact" to="/contact">
          <li>Contact</li>
        </Link>
        <div className="social-nav">
          <a
            href="https://www.facebook.com/chilloutalex"
            target="_blank"
            rel="noreferrer"
            className="social-nav-hover"
          >
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
          <a
            href="https://www.instagram.com/jacek_golda/"
            target="_blank"
            rel="noreferrer"
            className="social-nav-hover"
          >
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a
            href="https://www.youtube.com/@jacekgoda6584"
            target="_blank"
            rel="noreferrer"
            className="social-nav-hover"
          >
            <span>
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </a>
        </div>
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
