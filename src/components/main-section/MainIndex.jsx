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
    flex: 1,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    borderRadius: "60px",
    maxWidth: windowWidth <= 768 ? "80%" : "400px",
    maxHeight: "80%",
    objectFit: "contain",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={myImage} alt="This is me" />
    </div>
  );
};

export default MainIndex;
