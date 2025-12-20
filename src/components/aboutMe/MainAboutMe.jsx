import React from "react";
import AboutMeFooter from "./AboutMeFooter";
import AboutMeHeader from "./AboutMeHeader";
import AboutMe from "./AboutMe";
import AboutMeNavigationBar from "./AboutMeNavBar";

const AboutMeMain = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AboutMeHeader />
      <AboutMeNavigationBar />
      <div style={{ flex: 1, overflow: "auto" }}>
        <AboutMe />
      </div>
      <AboutMeFooter />
    </div>
  );
};

export default AboutMeMain;
