import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const DesktopHeader = () => {
  return (
    <header className="headerDesktop">
      <div className="logo">
        <a href="/">
          <img
            src="/Logo_Videorbit.png"
            alt="logo videorbit"
            className="logoImage"
          />
        </a>
      </div>
      <nav className="nav">
        {/* <a href="/about">discover</a> */}
        <a href="/portfolio">portfolio</a>
        <a className="btn" href="/contact">
          reach
        </a>
      </nav>
    </header>
  );
};

const MobileHeader = () => {
  const [isToggled, setToggle] = useState(false);

  const menuAppear = useSpring({
    transform: isToggled ? " translate3D(0,0,0)" : "translate3D(0, 0, 0)",
    opacity: isToggled ? 1 : 0,
  });

  const first = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isToggled
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isToggled
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  return (
    <header className="headerMobile">
      <div className="logo">
        <a href="/">
          <img
            src="/Logo_Videorbit.png"
            alt="logo videorbit"
            className="logoImage"
          />
        </a>
      </div>
      <div className="navWrapper">
        <animated.button
          className="burgerWrapper"
          onClick={() => setToggle(!isToggled)}
          style={{
            background: "none",
            border: "none",
            boxShadow: "none",
            backdropFilter: "none",
            marginTop: "1.5rem",
          }}
        >
          <div className="menu">
            <div className="springBurger" alt="burger menu">
              <svg
                onClick={() => setToggle(!isToggled)}
                width="40"
                height="32"
                viewBox="0 0 44 44"
                fill="#253241"
                xmlns="http://www.w3.org/2000/svg"
              >
                <animated.rect width="40" height="4" rx="2" style={first} />
                <animated.rect width="40" height="4" rx="2" style={second} />
                <animated.rect width="40" height="4" rx="2" style={third} />
              </svg>
            </div>
          </div>
        </animated.button>
        <animated.div style={menuAppear}>
          {isToggled ? <NavContent /> : null}
        </animated.div>
      </div>
    </header>
  );
};

const NavContent = () => {
  return (
    <div className="navContent" alt="menu contents">
      {/* <a href="/about">discover</a> */}
      <a href="/portfolio">portfolio</a>
      <a href="/contact" style={{ paddingBottom: "0.5rem" }}>
        reach
      </a>
    </div>
  );
};
export { DesktopHeader, MobileHeader };
