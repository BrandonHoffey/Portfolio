import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const mainContainerStyle = {
  backgroundColor: "#8ecae6",
};

const MyProjectsMain = () => {
  return (
    <div style={mainContainerStyle}>
      <TopContainer />
      <BottomContainer />
    </div>
  );
};

export default MyProjectsMain;
