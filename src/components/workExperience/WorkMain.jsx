import React from "react";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Skills from "./Skills";

const WorkMain = () => {
  const WorkExperienceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#8ecae6",
    paddingBottom: "70px",
    flex: "2",
  };

  const HighlightSkillsStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20px",
    flex: "1",
  };

  const MainContainerStyle = {
    backgroundColor: "#8ecae6",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
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
