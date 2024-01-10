import React from "react";
import Header from "../main-section/Header";
import MyProjectsFooter from "./MyProjectsFooter";
import MyProjectsNavBar from "./MyProjectsNavBar";
import MyProjectsMain from "./MyProjectsMain";

const MyProjects = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <MyProjectsNavBar />
      <MyProjectsMain />
      <MyProjectsFooter />
    </div>
  );
};

export default MyProjects;
