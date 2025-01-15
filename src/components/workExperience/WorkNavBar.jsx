import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const WorkNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const containerStyle = {
    position: "relative",
    background: "#023047",
    height: isDropdownOpen ? "70px" : "50px",
    transition: "height 0.15s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    overflow: "hidden",
  };

  const navigationStyle = {
    fontFamily: "'Josefin Slab', sans-serif",
    color: "white",
    margin: "0",
  };

  const dropdownStyle = {
    display: isDropdownOpen ? "block" : "none",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: isDropdownOpen ? 1 : 0,
    transition: "opacity 0.3s ease",
    padding: "10px",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "white",
    paddingRight: "10px",
    cursor: "pointer",
  };

  const listStyle = {
    color: "#fb8500",
    fontSize: "20px",
    margin: 0,
    paddingLeft: "80px",
    listStyle: "none",
    textAlign: "center",
    width: "700px",
    transition: "opacity 0.3s ease",
    fontFamily: "'Julius Sans One', sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const listItemStyle = (isHovered) => ({
    marginBottom: "14px",
    cursor: "pointer",
    color: isHovered ? "white" : "#fb8500",
  });

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMainPageClick = () => {
    navigate("/");
  };

  const handleMyProjectsClick = () => {
    navigate("/my-projects");
  };

  const handleAboutMeClick = () => {
    navigate("/about-me");
  };

  return (
    <div style={containerStyle}>
      <h1 style={navigationStyle}>Work Experience</h1>
      <div style={dropdownStyle}>
        <ul style={listStyle}>
          <li
            style={listItemStyle(hoveredItem === 0)}
            onClick={handleMainPageClick}
            onMouseEnter={() => setHoveredItem(0)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            -Main Page-
          </li>
          <li
            style={listItemStyle(hoveredItem === 1)}
            onClick={handleMyProjectsClick}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            -My Projects-
          </li>
          <li
            style={listItemStyle(hoveredItem === 2)}
            onClick={handleAboutMeClick}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            -About Me-
          </li>
        </ul>
      </div>
      <button
        onClick={handleIconClick}
        style={{ background: "none", border: "none" }}
      >
        <CiMenuFries style={iconStyle} />
      </button>
    </div>
  );
};

export default WorkNavBar;