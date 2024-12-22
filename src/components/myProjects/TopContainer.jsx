import React from "react";
import ellieHoffey1 from "../../assets/ellieHoffey/1.png";
import nightlight3 from "../../assets/Nightlight/5.png";

const topContainerStyle = {
  border: "1px solid black",
  display: "flex",
  flexDisplay: "row",
  justifyContent: "center",
  gap: "175px",
  marginTop: "8px",
  marginBottom: "10px",
};

const topContainer1Style = {
  border: "1px solid black",
};

const topContainer2Style = {
  border: "1px solid black",
};

const titleStyle = {
  border: "1px solid black",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  marginTop: "0",
  marginBottom: "4px",
  fontFamily: "'Julius Sans One', sans-serif",
  backgroundColor: "#023047",
  color: "#eeeee4",
};

const imageContainerStyle = {
  border: "4px solid #023047",
  backgroundColor: "#eeeee4",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "400px"
};

const ellieImageStyle = {
  height: "400px",
  width: "281px",
  borderRadius: "10px",
};

const nightlightImageStyle = {
  height: "400px",
  width: "201px",
  borderRadius: "5px",
};

const TopContainer = () => {
  return (
    <>
      <div style={topContainerStyle} id="topContainer">
        <div style={topContainer1Style} id="topContainer1">
          <div>
            <h1 style={titleStyle}>EllieHoffey.com</h1>
          </div>
          <div style={imageContainerStyle}>
            <img style={ellieImageStyle} src={ellieHoffey1} alt="image1" />
          </div>
        </div>
        <div style={topContainer2Style} id="topContainer2">
          <div>
            <h1 style={titleStyle}>Nightlight</h1>
          </div>
          <div style={imageContainerStyle}>
            <img
              style={nightlightImageStyle}
              src={nightlight3}
              alt="nightlight3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
