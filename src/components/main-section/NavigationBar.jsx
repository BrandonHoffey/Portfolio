import React from "react";
import { CiMenuFries } from "react-icons/ci";

const NavigationBar = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    background: "#023047",
    height: "50px",
  };
  const navigationStyle = {
    fontFamily: "'Josefin Slab', sans-serif",
    color: "white",
    paddingLeft: "10px",
  };
  const iconStyle = {
    fontSize: "30px",
    color: "white",
    paddingRight: "10px",
    cursor: "pointer",
  };

  const handleIconClick = () => {
    console.log("Icon Clicked");
  };

  return (
    <div style={containerStyle}>
      <h1 style={navigationStyle}>Main Page</h1>
      <button
        onClick={handleIconClick}
        style={{ background: "none", border: "none" }}
      >
        <CiMenuFries style={iconStyle} />
      </button>
    </div>
  );
};

export default NavigationBar;
