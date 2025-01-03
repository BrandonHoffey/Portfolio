import React from "react";
import ellieHoffey1 from "../../assets/ellieHoffey/1.png";
import nightlight3 from "../../assets/Nightlight/5.png";
import { useState } from "react";

const topContainerStyle = {
  display: "flex",
  flexDisplay: "row",
  justifyContent: "center",
  gap: "175px",
  marginTop: "8px",
  marginBottom: "10px",
};

const titleStyle = {
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
  height: "400px",
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
  const [hoveredEllie, setHoveredEllie] = useState(false);
  const [hoveredNightlight, setHoveredNightlight] = useState(false);

  return (
    <>
      <div style={topContainerStyle} id="topContainer">
        <div id="topContainer1">
          <div>
            <h1 style={titleStyle}>EllieHoffey.com</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredEllie ? "4px solid yellow" : "4px solid #023047",
            }}
            onMouseEnter={() => setHoveredEllie(true)}
            onMouseLeave={() => setHoveredEllie(false)}
          >
            <a
              href="https://www.elliehoffey.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style={ellieImageStyle} src={ellieHoffey1} alt="image1" />
            </a>
          </div>
        </div>
        <div id="topContainer2">
          <div>
            <h1 style={titleStyle}>Nightlight</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredNightlight
                ? "4px solid yellow"
                : "4px solid #023047",
            }}
            onMouseEnter={() => setHoveredNightlight(true)}
            onMouseLeave={() => setHoveredNightlight(false)}
          >
            <a
              href="https://github.com/BrandonHoffey/Nightlight.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={nightlightImageStyle}
                src={nightlight3}
                alt="nightlight3"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
