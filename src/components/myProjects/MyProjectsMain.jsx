import React, { useState } from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const mainContainerStyle = {
  backgroundColor: "#8ecae6",
  paddingBottom: "120px", // Space for the fixed footer
};

const MyProjectsMain = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const buttonStyle = {
    display: "block",
    margin: "0 auto 40px auto",
    padding: "14px 40px",
    fontSize: "1.2rem",
    fontFamily: "'Julius Sans One', sans-serif",
    fontWeight: "bold",
    backgroundColor: "#023047",
    color: "#eeeee4",
    border: "3px solid #023047",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#eeeee4",
    color: "#023047",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={mainContainerStyle}>
      <TopContainer />

      <div
        style={{
          maxHeight: showAllProjects ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        <BottomContainer />
      </div>

      <button
        style={isHovered ? buttonHoverStyle : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowAllProjects(!showAllProjects)}
      >
        {showAllProjects ? "Show Less" : "See All"}
      </button>
    </div>
  );
};

export default MyProjectsMain;
