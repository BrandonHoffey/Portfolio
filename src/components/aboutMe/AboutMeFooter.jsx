import React, { useState, useEffect } from "react";

const AboutMeFooter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const containerStyle = {
    background: "#023047",
    padding: "10px",
    fontFamily: "'Josefin Slab', sans-serif",
    textAlign: "center",
    width: "100%",
  };

  const linkStyle = {
    color: "#fb8500",
    marginRight: "20px",
    textDecoration: "none",
    fontFamily: "'Julius Sans One', sans-serif",
  };

  const contactInfoStyle = {
    marginTop: "1px",
    marginBottom: "12px",
    color: "white",
  };
  return (
    <div style={containerStyle}>
      <h3 style={contactInfoStyle}>
        Contact Info: brandon.hoffey@yahoo.com
        {isMobile ? <br /> : " "}
        720-822-1288
      </h3>
      <div>
        <a
          href="https://www.linkedin.com/in/brandon-hoffey-73452b291/"
          style={linkStyle}
        >
          LinkedIn
        </a>
        <a href="https://github.com/BrandonHoffey" style={linkStyle}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default AboutMeFooter;
