import React, { useState, useEffect } from "react";
import EscapeTheHospital1 from "../../assets/EscapeTheHospital/1.PNG";
import Jeopardy1 from "../../assets/JeopardyGame/1.PNG";
import Jeopardy2 from "../../assets/JeopardyGame/2.PNG";
import Jeopardy3 from "../../assets/JeopardyGame/3.PNG";
import Jeopardy4 from "../../assets/JeopardyGame/4.PNG";
import Number from "../../assets/GuessTheNumber/1.PNG";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const jeopardyArray = [Jeopardy1, Jeopardy2, Jeopardy3, Jeopardy4];

const BottomContainer = () => {
  const [hoveredEscape, setHoveredEscape] = useState(false);
  const [hoveredJeopardy, setHoveredJeopardy] = useState(false);
  const [hoveredNumber, setHoveredNumber] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [jeopardyImageIndex, setJeopardyImageIndex] = useState(0);
  const [arrowHovered, setArrowHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const bottomContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
    gap: isMobile ? "30px" : "80px",
    marginBottom: isMobile ? "30px" : "80px",
    padding: isMobile ? "0 15px" : "0",
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
    fontSize: isMobile ? "1rem" : "2rem",
    padding: isMobile ? "8px 15px" : undefined,
  };

  const imageContainerStyle = {
    border: "4px solid #023047",
    backgroundColor: "#eeeee4",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: isMobile ? "auto" : "400px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const escapeImageStyle = {
    height: isMobile ? "auto" : "400px",
    width: isMobile ? "100%" : "550px",
    maxWidth: isMobile ? "90vw" : "none",
    borderRadius: "5px",
    objectFit: "contain",
  };

  const jeopardyImageStyle = {
    height: isMobile ? "auto" : "259px",
    width: isMobile ? "100%" : "550px",
    maxWidth: isMobile ? "90vw" : "none",
    borderRadius: "10px",
    objectFit: "contain",
  };

  const numberStyle = {
    height: isMobile ? "auto" : "278px",
    width: isMobile ? "100%" : "550px",
    maxWidth: isMobile ? "90vw" : "none",
    borderRadius: "5px",
    objectFit: "contain",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    fontSize: isMobile ? "1.5rem" : "2rem",
    cursor: "pointer",
    zIndex: 10,
    color: "rgba(0, 0, 0, 0.5)",
  };

  const leftArrowStyle = {
    ...arrowStyle,
    left: isMobile ? "-30px" : "-50px",
    color: "black",
  };

  const rightArrowStyle = {
    ...arrowStyle,
    right: isMobile ? "-30px" : "-50px",
    color: "white",
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  const handleNextImage = () => {
    setJeopardyImageIndex(
      (prevIndex) => (prevIndex + 1) % jeopardyArray.length
    );
  };

  const handlePreviousImage = () => {
    setJeopardyImageIndex((prevIndex) =>
      prevIndex === 0 ? jeopardyArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div style={bottomContainerStyle} id="bottomContainer">
        <div id="bottomContainer1">
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
        <div id="bottomContainer2" style={{ position: "relative" }}>
          <div>
            <h1 style={titleStyle}>Jeopardy Board</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredJeopardy
                ? "4px solid yellow"
                : "4px solid #023047",
              height: isMobile ? "auto" : "259px",
            }}
            onMouseEnter={() => setHoveredJeopardy(true)}
            onMouseLeave={() => setHoveredJeopardy(false)}
          >
            <img
              style={jeopardyImageStyle}
              src={jeopardyArray[jeopardyImageIndex]}
              alt="JeopardyImages"
            />
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
        <div id="bottomContainer3">
          <div>
            <h1 style={titleStyle}>Guess The Number</h1>
          </div>
          <div
            style={{
              ...imageContainerStyle,
              border: hoveredNumber ? "4px solid yellow" : "4px solid #023047",
              height: isMobile ? "auto" : "278px",
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
