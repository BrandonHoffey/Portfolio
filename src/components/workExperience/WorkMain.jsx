import React, { useState, useEffect } from "react";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Skills from "./Skills";

const WorkMain = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const WorkExperienceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#8ecae6",
    paddingBottom: isMobile ? "20px" : "70px",
    flex: isMobile ? "none" : "2",
    width: isMobile ? "100%" : "auto",
  };

  const HighlightSkillsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: isMobile ? "0" : "20px",
    flex: isMobile ? "none" : "1",
    width: isMobile ? "100%" : "auto",
    marginTop: isMobile ? "20px" : "0",
    paddingBottom: isMobile ? "100px" : "0",
  };

  const MainContainerStyle = {
    backgroundColor: "#8ecae6",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    padding: isMobile ? "15px" : "20px",
  };

  return (
    <div id="mainContainer" style={MainContainerStyle}>
      <div id="WorkExperienceContainer" style={WorkExperienceContainerStyle}>
        <Work1 />
        <Work2 />
        <Work3 />
        <Work4 />
      </div>
      <div id="highlightSkillsContainer" style={HighlightSkillsStyle}>
        <Skills />
      </div>
    </div>
  );
};

export default WorkMain;
