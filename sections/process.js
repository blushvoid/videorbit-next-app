import React from 'react'

export default function ProcessSection() {
    return (
        <>
         <span>WHAT WE DO?</span>
            <span className="cardsGroup">
              <div className="card">
                <span className="cardTitle">Art Direction</span>
                <img className="cardIcon" src="/idea.svg" alt="idea icon" />
                <span className="cardDescription">
                  At the base of any interactive success lies a strong and
                  coherent concept. We can elevate your idea to a new level.
                </span>
              </div>
              <div className="card">
                <span className="cardTitle">Development</span>
                <img
                  className="cardIcon"
                  src="/development.svg"
                  alt="development icon"
                />
                <span className="cardDescription">
                  Making use of the newest innovations on the platform, we
                  design and develop high quality AR experiences.
                </span>
              </div>
              <div className="card">
                <span className="cardTitle">Deployment</span>
                <img
                  className="cardIcon"
                  src="/deployment.svg"
                  alt="deployment icon"
                />
                <span className="cardDescription">
                  Guidance on when, why and how to market your AR effect to
                  create the biggest impact for your brand.
                </span>
              </div>
            </span>
        </>
    )
}