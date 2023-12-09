import React from "react";
import myImage from "../../assets/myImage.jpg";

const MainIndex = () => {
  const containerStyle = {
    background: "#8ecae6",
    height: "800px",
  };

  const imageStyle = {
    borderRadius: "10px",
    maxWidth: "300px",
    display: "block",
    margin: "auto",
    paddingTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={myImage} alt="This is me"></img>
    </div>
  );
};

export default MainIndex;
