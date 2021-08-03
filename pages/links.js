import React from "react";
import ResponsiveHeader from "../components/responsiveHeader";
import Footer from "../components/footer";
import LinksContainer from "../components/linksContainer";

const Links = () => (
  <div
    className="linksPage"
    style={{
      backgroundImage: "url('background4.png')",
      backgroundAttachment: "fixed",
    }}
  >
    <ResponsiveHeader />
    <div className="linksContainer">
      <LinksContainer />
    </div>
    <Footer />
  </div>
);

export default Links;
