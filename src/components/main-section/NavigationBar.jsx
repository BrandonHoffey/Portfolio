import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
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
    height: isDropdownOpen
      ? isMobile
        ? "110px"
        : "70px"
      : isMobile
      ? "40px"
      : "50px",
    transition: "height 0.15s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: isMobile ? "6px 10px" : "10px",
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
    top: isMobile ? "38px" : "10px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: isDropdownOpen ? 1 : 0,
    transition: "opacity 0.3s ease",
    padding: isMobile ? "5px" : "10px",
    width: isMobile ? "90%" : "auto",
  };

  const iconStyle = {
    fontSize: isMobile ? "24px" : "30px",
    color: "white",
    paddingRight: "10px",
    cursor: "pointer",
  };

  const listStyle = {
    color: "#fb8500",
    fontSize: isMobile ? "18px" : "24px",
    margin: 0,
    padding: isMobile ? "0" : "12px",
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
    gap: isMobile ? "4px" : "0",
  };

  const listItemStyle = (isHovered) => ({
    marginBottom: isMobile ? "0" : "14px",
    cursor: "pointer",
    color: isHovered ? "white" : "#fb8500",
  });

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAboutMeClick = () => {
    navigate("/about-me");
  };

  const handleMyProjectsClick = () => {
    navigate("/my-projects");
  };

  const handleWorkExperienceClick = () => {
    navigate("/work-experience");
  };

  return (
    <div style={containerStyle}>
      <h1 style={navigationStyle}>Main Page</h1>
      <div style={dropdownStyle}>
        <ul style={listStyle}>
          <li
            style={listItemStyle(hoveredItem === "aboutMe")}
            onMouseEnter={() => setHoveredItem("aboutMe")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleAboutMeClick}
          >
            -About Me-
          </li>
          <li
            style={listItemStyle(hoveredItem === "myProjects")}
            onMouseEnter={() => setHoveredItem("myProjects")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleMyProjectsClick}
          >
            -My Projects-
          </li>
          <li
            style={listItemStyle(hoveredItem === "workExperience")}
            onMouseEnter={() => setHoveredItem("workExperience")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleWorkExperienceClick}
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

export default NavigationBar;
