import React from "react";

import { Instagram, Facebook, Linkedin } from "react-feather";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <ul className="footerList" id="socialLinks">
          <li className="socialIcon">
            <a
              href="https://www.instagram.com/videorbit.studio/"
              target="_blank"
              alt="link to instagram page"
              aria-label="instagram"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </li>
          <li className="socialIcon">
            <a
              href="https://www.facebook.com/VideOrbitStudio/"
              target="_blank"
              alt="link to facebook page"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <Facebook />
            </a>
          </li>
          <li className="socialIcon">
            <a
              href="https://www.linkedin.com/company/videorbit/"
              target="_blank"
              alt="link to linkedin"
              aria-label="linkedin"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </li>
        </ul>
        <ul className="footerList" id="links">
          <li className="sitemapLink">
            <a href="/privacy" target="_blank">
              privacy
            </a>
          </li>
          <li>
            <a href="/tac" target="_blank">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
      <span className="copyright">Copyright © 2021 VideOrbit Studio</span>
    </footer>
  );
}

export default Footer;
