import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
            <a href="" className="social-space">
              <span>
                <FontAwesomeIcon icon={faInstagram} />
                <p className="test">instagram</p>
              </span>
            </a>
            <a href="" className="social-space">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
                <p className="test">faFacebook</p>
              </span>
            </a>
            <a href="" className="social-space">
              <span>
                <FontAwesomeIcon icon={faYoutube} />

                <p className="test">Youtube</p>
              </span>
            </a>
          </div>
          <div className="contact-foot">
            <p className="contactFooter">contact</p>
            <a href="" className="social-space">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />

                <p className="test">email</p>
              </span>
            </a>
            <a href="" className="social-space">
              <span>
                <FontAwesomeIcon icon={faPhone} />

                <p className="test">telefon</p>
              </span>
            </a>
          </div>
          <div className="site-map">
            <p className="siteMap">site map</p>
            <li className="test">Films</li>
            <li className="test">Contact</li>
          </div>
        </section>
        <p className="rights">© 2022 Jacek Gołda. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
