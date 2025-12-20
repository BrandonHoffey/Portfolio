import React, { useState, useEffect } from "react";

const MainFooter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const containerStyle = {
    background: "#023047",
    paddingTop: isMobile ? "5px" : "10px",
    fontFamily: "'Josefin Slab', sans-serif",
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
    paddingBottom: isMobile ? "10px" : "6px",
  };

  const linkStyle = {
    color: "#fb8500",
    marginRight: "20px",
    textDecoration: "none",
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: isMobile ? "14px" : "16px",
  };

  const contactInfoStyle = {
    marginTop: "1px",
    marginBottom: isMobile ? "8px" : "20px",
    color: "white",
    fontSize: isMobile ? "14px" : "16px",
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

export default MainFooter;
