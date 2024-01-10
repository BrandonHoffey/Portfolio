import React from "react";
import Header from "../main-section/Header";
import WorkFooter from "./WorkFooter";
import WorkNavBar from "./WorkNavBar";
import WorkMain from "./WorkMain";

const WorkExperience = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <WorkNavBar />
      <WorkMain />
      <WorkFooter />
    </div>
  );
};

export default WorkExperience;
