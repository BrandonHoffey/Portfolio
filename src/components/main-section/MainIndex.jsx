import React from "react";
import myImage from "../../assets/myImage.jpg";

const MainIndex = () => {
  const containerStyle = {
    background: "#8ecae6",
    height: "690px",
  };

  const imageStyle = {
    borderRadius: "10px",
    maxWidth: "350px",
    display: "block",
    margin: "auto",
    paddingTop: "70px"
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={myImage} alt="This is me"></img>
    </div>
  );
};

export default MainIndex;
