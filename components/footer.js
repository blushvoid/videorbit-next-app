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
            >
              <Instagram />
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://www.facebook.com/VideOrbitStudio/" target="_blank">
              <Facebook />
            </a>
          </li>
          <li className="socialIcon">
            <a
              href="https://www.linkedin.com/company/videorbit/"
              target="_blank"
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
