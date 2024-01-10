import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const MyProjectsNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    position: "relative",
    background: "#023047",
    height: isDropdownOpen ? "140px" : "50px",
    transition: "height 0.15s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
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
    fontSize: "18px",
    margin: 0,
    padding: 12,
    listStyle: "none",
    textAlign: "center",
    width: "150px",
    transition: "opacity 0.3s ease",
    fontFamily: "'Josefin Slab', sans-serif",
  };

  const listItemStyle = {
    marginBottom: "14px",
    cursor: "pointer",
  };

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
          <li style={listItemStyle} onClick={handleMainPageClick}>
            -Main Page-
          </li>
          <li style={listItemStyle} onClick={handleAboutMeClick}>
            -About Me-
          </li>
          <li style={listItemStyle} onClick={handleWorkExperienceClick}>
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