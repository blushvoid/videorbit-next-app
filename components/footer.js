import React from "react";

import { Instagram, Facebook, Linkedin } from "react-feather";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <ul className="footerList" id="socialLinks">
          <li className="socialIcon">
          <a href="https://www.instagram.com/videorbit.studio/">
            <Instagram />
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://www.facebook.com/VideOrbitStudio/">
              <Facebook />
            </a>
          </li>
          <li className="socialIcon">
            <a href="https://www.linkedin.com/company/videorbit/">
              <Linkedin />
            </a>
          </li>
        </ul>
        <ul className="footerList" id="links">
          <li className="sitemapLink">sitemap</li>
          <li>privacy</li>
        </ul>
      </div>
      <span className="copyright">Copyright © 2021 VideOrbit Studio</span>
    </footer>
  );
}

export default Footer;
