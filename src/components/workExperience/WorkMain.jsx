import React, { useState } from "react";
import Modal from "./ResumeModal";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";
import Skills from "./Skills";

const WorkMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const WorkExperienceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#8ecae6",
    padding: "50px",
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
  
  // const resumeStyle = {
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   width: "150px",
    //   height: "200px",
    //   boxSizing: "border-box",
    //   border: "1px solid #ddd",
    //   borderRadius: "25px",
    //   backgroundColor: "#f9f9f9",
    //   marginRight: "240px",
    //   marginTop: "200px",
    // };
    
    
    return (
      <div id="mainContainer" style={MainContainerStyle}>
      <div id="WorkExperienceContainer" style={WorkExperienceContainerStyle}>
        <Work1 />
        <Work2 />
        <Work3 />
        <Work4 />
        {/* <div style={resumeStyle}>
        <button onClick={() => setIsModalOpen(true)}>View My Resume</button>
        </div> */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      </div>
      <div id="highlightSkillsContainer" style={HighlightSkillsStyle}>
        <Skills />
      </div>
    </div>
  );
};

export default WorkMain;
