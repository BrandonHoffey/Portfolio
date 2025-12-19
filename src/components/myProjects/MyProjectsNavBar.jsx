import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const MyProjectsNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const containerStyle = {
    position: "relative",
    background: "#023047",
    height: isDropdownOpen ? (isMobile ? "140px" : "70px") : "50px",
    transition: "height 0.15s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px",
    overflow: "hidden",
  };

  const navigationStyle = {
    fontFamily: "'Josefin Slab', sans-serif",
    color: "white",
    margin: "0",
    fontSize: isMobile ? "1.2rem" : "2rem",
  };

  const dropdownStyle = {
    display: isDropdownOpen ? "block" : "none",
    position: "absolute",
    top: isMobile ? "45px" : "10px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: isDropdownOpen ? 1 : 0,
    transition: "opacity 0.3s ease",
    padding: "10px",
    width: isMobile ? "90%" : "auto",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "white",
    paddingRight: "10px",
    cursor: "pointer",
  };

  const listStyle = {
    color: "#fb8500",
    fontSize: isMobile ? "14px" : "20px",
    margin: 0,
    paddingLeft: isMobile ? "0" : "80px",
    listStyle: "none",
    textAlign: "center",
    width: isMobile ? "100%" : "700px",
    transition: "opacity 0.3s ease",
    fontFamily: "'Julius Sans One', sans-serif",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    gap: isMobile ? "8px" : "0",
  };

  const listItemStyle = (isHovered) => ({
    marginBottom: isMobile ? "0" : "14px",
    cursor: "pointer",
    color: isHovered ? "white" : "#fb8500",
  });

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMainPageClick = () => {
    navigate("/");
  };

  const handleAboutMeClick = () => {
    navigate("/about-me");
  };

  const handleWorkExperienceClick = () => {
    navigate("/work-experience");
  };

  return (
    <div style={containerStyle}>
      <h1 style={navigationStyle}>My Projects</h1>
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
            onClick={handleAboutMeClick}
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            -About Me-
          </li>
          <li
            style={listItemStyle(hoveredItem === 2)}
            onClick={handleWorkExperienceClick}
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            -Work Experience-
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

export default MyProjectsNavBar;
