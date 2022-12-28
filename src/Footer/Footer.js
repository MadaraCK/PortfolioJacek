import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="text-foot">
        <section className="columns">
          <div className="social">
            <p className="socialMedia">social media</p>
            <a
              href="https://www.instagram.com/jacek_golda/"
              className="social-space"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FontAwesomeIcon icon={faInstagram} />
                <p className="test">jacek_golda</p>
              </span>
            </a>
            <a
              href="https://www.facebook.com/chilloutalex"
              className="social-space"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} />
                <p className="test">Jacek Gołda</p>
              </span>
            </a>
            <a
              href="https://www.youtube.com/@jacekgoda6584"
              className="social-space"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FontAwesomeIcon icon={faYoutube} />

                <p className="test">@jacekgoda6584</p>
              </span>
            </a>
          </div>
          <div className="contact-foot">
            <p className="contactFooter">contact</p>
            <a
              href="mailto:filmgolda@gmail.com
"
              className="social-space"
            >
              <span>
                <FontAwesomeIcon icon={faEnvelope} />

                <p className="test">filmgolda@gmail.com</p>
              </span>
            </a>
            <a href="tel:+48790482403" className="social-space">
              <span>
                <FontAwesomeIcon icon={faPhone} />
                <p className="test">+48 790 482 403</p>
              </span>
            </a>
          </div>
          <div className="site-map">
            <p className="siteMap">site map</p>
            <Link to="/">
              <li className="test-2">Films</li>
            </Link>
            <Link to="/contact">
              <li className="test-2">Contact</li>
            </Link>
          </div>
        </section>
        <p className="rights">© 2022 Jacek Gołda. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
