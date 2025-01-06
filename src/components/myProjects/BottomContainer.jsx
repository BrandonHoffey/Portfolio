import React, { useState } from "react";
import EscapeTheHospital1 from "../../assets/EscapeTheHospital/1.PNG";
import Jeopardy1 from "../../assets/JeopardyGame/1.PNG";
import Number from "../../assets/GuessTheNumber/1.PNG";

const bottomContainerStyle = {
  display: "flex",
  flexDisplay: "row",
  justifyContent: "center",
  gap: "80px",
  marginBottom: "80px",
};

const bottomContainer1Style = {};

const bottomContainer2Style = {};

const bottomContainer3Style = {};

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

const escapeImageStyle = {
  height: "400px",
  width: "550px",
  borderRadius: "5px",
};

const jeopardyImageStyle = {
  height: "259px",
  width: "550px",
  borderRadius: "10px",
};

const numberStyle = {
  height: "278px",
  width: "550px",
  borderRadius: "5px",
};

const BottomContainer = () => {
  const [hoveredEscape, setHoveredEscape] = useState(false);
  const [hoveredJeopardy, setHoveredJeopardy] = useState(false);
  const [hoveredNumber, setHoveredNumber] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <div style={bottomContainerStyle} id="bottomContainer">
        <div style={bottomContainer1Style} id="bottomContainer1">
          <div>
            <h1 style={titleStyle}>Escape The Hospital</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredEscape ? "4px solid yellow" : "4px solid #023047",
            }}
            onMouseEnter={() => setHoveredEscape(true)}
            onMouseLeave={() => setHoveredEscape(false)}
            onClick={() => openModal(EscapeTheHospital1)}
          >
            <img
              style={escapeImageStyle}
              src={EscapeTheHospital1}
              alt="image1"
            />
          </div>
        </div>
        <div style={bottomContainer2Style} id="bottomContainer2">
          <div>
            <h1 style={titleStyle}>Jeopardy Board</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredJeopardy
                ? "4px solid yellow"
                : "4px solid #023047",
              height: "259px",
            }}
            onMouseEnter={() => setHoveredJeopardy(true)}
            onMouseLeave={() => setHoveredJeopardy(false)}
          >
            <img style={jeopardyImageStyle} src={Jeopardy1} alt="nightlight3" />
          </div>
        </div>
        <div style={bottomContainer3Style} id="bottomContainer3">
          <div>
            <h1 style={titleStyle}>Guess The Number</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredNumber ? "4px solid yellow" : "4px solid #023047",
              height: "278px",
            }}
            onMouseEnter={() => setHoveredNumber(true)}
            onMouseLeave={() => setHoveredNumber(false)}
            onClick={() => openModal(Number)}
          >
            <img style={numberStyle} src={Number} alt="" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div style={modalBackdropStyle} onClick={closeModal}>
          <div style={modalContentStyle}>
            <img
              src={currentImage}
              alt="Enlarged"
              style={modalImageStyle}
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

const modalBackdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  position: "relative",
  maxWidth: "90%",
  maxHeight: "80%",
  textAlign: "center",
};

const modalImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
};

export default BottomContainer;
