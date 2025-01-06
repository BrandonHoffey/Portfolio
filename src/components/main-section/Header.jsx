import React from "react";

const Header = () => {
  const headerStyle = {
    textAlign: "center",
    padding: "5px",
    background: "#219ebc",
    fontFamily: "'Julius Sans One', sans-serif",
    overflow: "hidden",
  };
  return (
    <header style={headerStyle}>
      <h1>My Portfolio</h1>
    </header>
  );
};

export default Header;
