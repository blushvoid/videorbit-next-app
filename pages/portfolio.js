import React from "react";

import ResponsiveGalleryGrid from "../components/Grid/responsiveGalleryGrid";
import ResponsiveHeader from "../components/responsiveHeader";
import Footer from "../components/footer";

const Portfolio = () => (
  <div className='Gallery'>
    <ResponsiveHeader style={{ zIndex: 9999, color: "#FFF" }} />
    <ResponsiveGalleryGrid />
    <Footer />
  </div>
);

export default Portfolio;
