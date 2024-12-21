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
  display: "flex",
  justifyContent: "center",
  marginTop: "0",
  marginBottom: "4px",
};

const imageContainerStyle = {
  border: "1px solid black",
};

const ellieImageStyle = {
  height: "400px",
  width: "254px",
};

const nightlightImageStyle = {
  height: "400px",
  width: "185px",
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
          <div>
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
