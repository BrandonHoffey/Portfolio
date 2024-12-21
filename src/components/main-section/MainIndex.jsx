import React from "react";
import myImage from "../../assets/aboutMe/myImage.jpg";

const MainIndex = () => {
  const containerStyle = {
    background: "#8ecae6",
    height: "690px",
  };

  const imageStyle = {
    borderRadius: "60px",
    maxWidth: "400px",
    display: "block",
    margin: "auto",
    padding: "40px"
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={myImage} alt="This is me"></img>
    </div>
  );
};

export default MainIndex;
