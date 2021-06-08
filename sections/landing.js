import React from "react";

export default function LandingSection() {
  return (
    <>
      <div className="landingSection">
        <img
          className="spark2020"
          src="/sparkAR.gif"
          alt="spark AR statuette 2020 creator"
        />
        <div className="landingSectionText">
          <span className="h3">FACEBOOK SPARK AR NETWORK PARTNER</span>
          <span className="landingParagraph">
            We are extremely proud to be one of the Global Spark AR Network
            Partners at Facebook! videOrbit Studio is officially recognized as a
            member of the Spark AR Partner Network for our contributions and
            continued success within the biggest global Augmented Reality
            platform.
          </span>
          <span className="h3" style={{paddingTop: '1rem'}}>SNAPCHAT OFFICIAL LENS CREATOR</span>
          <span className="landingParagraph">
            We are recognized as Official Snapchat Lens Creators thanks to our
            professional-level expertise and creative achievements. We are
            redefining the world of augmented reality with every Lens we create.
          </span>
        </div>
      </div>
      <div className="clientsContainer">
        <h4>Our clients:</h4>
        <div className="clientsWrapper">
          <img
            className="clientLogo"
            src="/Versace_v2.svg"
            alt="versace logo"
          />
          <img className="clientLogo" src="/Loreal.svg" alt="l'oreal logo" />
          <img className="clientLogo" src="/Facebook.svg" alt="facebook logo" />
          <img
            className="clientLogo"
            src="/bimba-y-lola.svg"
            alt="bimba y lola logo"
          />
        </div>
        <div className="clientsWrapper">
          <img
            className="clientLogo"
            src="/mac-cosmetics.svg"
            alt="mac cosmetics logo"
          />
          <img className="clientLogo" src="/Lancome.svg" alt="lancome logo" />
          <img
            className="clientLogo"
            src="/swarovski.svg"
            alt="swarovski logo"
          />
          <img className="clientLogo" src="/Deloitte.svg" alt="deloitte logo" />
        </div>
      </div>
    </>
  );
}
