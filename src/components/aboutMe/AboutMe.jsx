import React, { useState } from "react";
import Fourteener from "../../assets/14er01.jpg";
import Hiking from "../../assets/Hiking01.jpg";
import Skiing from "../../assets/Skiing01.jpg";
import WinterCampingOne from "../../assets/WinterCamping01.jpg";
import WinterCampingTwo from "../../assets/WinterCamping02.jpg";
import { AiTwotoneRightSquare } from "react-icons/ai";
import { AiTwotoneLeftSquare } from "react-icons/ai";

const images = [Fourteener, Hiking, Skiing, WinterCampingOne, WinterCampingTwo];
const imageDescriptions = [
  "At the summit of one of the twenty fourteeners I've completed",
  "One of my favorite hikes in Colorado, Devil's Head",
  "Skiing with friends is my biggest winter passion",
  "Winter camping trips",
  "Getting outdoors and exploring even when it's cold and snowy",
];

const AboutMe = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        backgroundColor: "#8ecae6",
        minHeight: "74.4vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ position: "relative", paddingBottom: "60px" }}>
        <img
          src={images[currentImageIndex]}
          alt={`${currentImageIndex}`}
          style={{
            maxWidth: "80%",
            maxHeight: "70vh",
            width: "auto",
            height: "auto",
            paddingLeft: "14px",
            paddingTop: "14px",
            borderRadius: "24px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AiTwotoneLeftSquare
            onClick={goToPrevious}
            style={{ marginRight: "10px", fontSize: "2.5em" }}
          >
            {"<--"}
          </AiTwotoneLeftSquare>
          <AiTwotoneRightSquare
            onClick={goToNext}
            style={{ fontSize: "2.5em" }}
          >
            {"-->"}
          </AiTwotoneRightSquare>
        </div>
        <div
          style={{
            marginTop: "20px",
            fontFamily: "'Josefin Slab', sans-serif",
            fontSize: "1.1em",
            fontWeight: "bold",
          }}
        >
          <p style={{ textAlign: "center" }}>
            {imageDescriptions[currentImageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
