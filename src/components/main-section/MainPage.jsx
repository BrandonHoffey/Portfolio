import React from "react";
import FooterInfo from "../main-section/FooterInfo";
import Header from "../main-section/Header";
import MainIndex from "./MainIndex";
import NavigationBar from "./NavigationBar";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <NavigationBar />
      <MainIndex />
      <FooterInfo />
    </div>
  );
};

export default MainPage;
