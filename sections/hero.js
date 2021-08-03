import React from "react";
import Portfolio from "../pages/portfolio";

export default function HeroSection() {
  return (
    <div className="hero">
      <span className="heroH1">expand reality</span>
      <span className="heroParagraph">
      videOrbit Studio is an Amsterdam Based interactive design studio focusing on Social AR, Digital Fashion, Interactive Installations and Avatar Creation. <br />
We create custom made interactive experiences perfectly balanced between Art, Design, Fashion and Technology.
      </span>
      <a href="/portfolio">
        <button className="btn-big buttonAnimated">
          check out our portfolio
        </button>
      </a>
    </div>
  );
}
