import React, { useState, useEffect } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const headerStyle = {
    textAlign: "center",
    padding: isMobile ? "5px" : "5px",
    background: "#219ebc",
    fontFamily: "'Julius Sans One', sans-serif",
    overflow: "hidden",
  };

  const h1Style = {
    margin: isMobile ? "8px 0" : "16px 0",
    fontSize: isMobile ? "1.5rem" : "2rem",
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>My Portfolio</h1>
    </header>
  );
};

export default Header;
