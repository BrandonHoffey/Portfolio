import React, { useState } from "react";
import ellieHoffey1 from "../../assets/ellieHoffey/1.png";
import nightlight1 from "../../assets/Nightlight/1.PNG";
import nightlight2 from "../../assets/Nightlight/2.PNG";
import nightlight3 from "../../assets/Nightlight/3.PNG";
import nightlight4 from "../../assets/Nightlight/4.png";
import nightlight5 from "../../assets/Nightlight/5.png";
import nightlight6 from "../../assets/Nightlight/6.png";
import nightlight7 from "../../assets/Nightlight/7.png";
import nightlight8 from "../../assets/Nightlight/8.png";
import nightlight9 from "../../assets/Nightlight/9.png";
import nightlight10 from "../../assets/Nightlight/10.png";
import nightlight11 from "../../assets/Nightlight/11.png";
import nightlight12 from "../../assets/Nightlight/12.png";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const nightlightArray = [
  nightlight1,
  nightlight2,
  nightlight3,
  nightlight4,
  nightlight5,
  nightlight6,
  nightlight7,
  nightlight8,
  nightlight9,
  nightlight10,
  nightlight11,
  nightlight12,
];

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
  position: "relative",
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

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
  zIndex: 10,
  color: "rgba(0, 0, 0, 0.5)",
};

const leftArrowStyle = {
  ...arrowStyle,
  left: "-50px",
  color: "black",
};

const rightArrowStyle = {
  ...arrowStyle,
  right: "-50px",
  color: "white",
};

const TopContainer = () => {
  const [hoveredEllie, setHoveredEllie] = useState(false);
  const [hoveredNightlight, setHoveredNightlight] = useState(false);
  const [nightlightImageIndex, setNightlightImageIndex] = useState(0);
  const [arrowHovered, setArrowHovered] = useState(false);

  const handleNightlightHover = () => {
    setHoveredNightlight(true);
  };

  const handleNightlightLeave = () => {
    setHoveredNightlight(false);
  };

  const handleEllieHover = () => {
    setHoveredEllie(true);
  };

  const handleEllieHoverLeave = () => {
    setHoveredEllie(false);
  };

  const handleNextImage = () => {
    setNightlightImageIndex(
      (prevIndex) => (prevIndex + 1) % nightlightArray.length
    );
  };

  const handlePreviousImage = () => {
    setNightlightImageIndex((prevIndex) =>
      prevIndex === 0 ? nightlightArray.length - 1 : prevIndex - 1
    );
  };

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
              border: hoveredEllie ? "4px solid yellow" : "4px solid #023047", // Change border on hover
            }}
            onMouseEnter={handleEllieHover}
            onMouseLeave={handleEllieHoverLeave}
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
        <div id="topContainer2" style={{ position: "relative" }}>
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
            onMouseEnter={handleNightlightHover}
            onMouseLeave={handleNightlightLeave}
          >
            <a
              href="https://github.com/BrandonHoffey/Nightlight.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={nightlightImageStyle}
                src={nightlightArray[nightlightImageIndex]}
                alt="nightlight"
              />
            </a>
          </div>

          <button
            style={leftArrowStyle}
            onClick={handlePreviousImage}
            aria-label="Previous Image"
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            <AiOutlineCaretLeft
              size={40}
              color={arrowHovered ? "white" : "#023047"}
            />
          </button>

          <button
            style={rightArrowStyle}
            onClick={handleNextImage}
            aria-label="Next Image"
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            <AiOutlineCaretRight
              size={40}
              color={arrowHovered ? "white" : "#023047"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopContainer;
