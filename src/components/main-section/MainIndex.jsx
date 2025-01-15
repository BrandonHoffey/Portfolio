import React, { useState, useEffect } from "react";
import myImage from "../../assets/aboutMe/myImage.jpg";

const MainIndex = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    background: "#8ecae6",
    height: "690px",
    overflow: "hidden",
    paddingBottom: "2px",
  };

  const imageStyle = {
    borderRadius: "60px",
    maxWidth: windowWidth <= 768 ? "80%" : "400px",
    width: "100%",
    display: "block",
    margin: "auto",
    padding: windowWidth <= 768 ? "20px" : "40px",
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={myImage} alt="This is me" />
    </div>
  );
};

export default MainIndex;
