import React, { useState } from "react";
import Fourteener from "../../assets/aboutMe/14er01.jpg";
import Hiking from "../../assets/aboutMe/Hiking01.jpg";
import Skiing from "../../assets/aboutMe/Skiing01.jpg";
import WinterCampingOne from "../../assets/aboutMe/WinterCamping01.jpg";
import WinterCampingTwo from "../../assets/aboutMe/WinterCamping02.jpg";
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px",
        paddingLeft: "3vw",
        maxWidth: "100%",
        overflow: "hidden",
        background: "#8ecae6",
        paddingBottom: "7px",
      }}
    >
      <div
        style={{
          flex: "0 0 60%",
          marginRight: "20px",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", paddingBottom: "60px" }}>
          <img
            src={images[currentImageIndex]}
            alt={`${currentImageIndex}`}
            style={{
              maxWidth: "100%",
              maxHeight: "60vh",
              borderRadius: "24px",
              paddingTop: "18px",
              objectFit: "contain"
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
              justifyContent: "left",
              paddingLeft: "25vw",
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
              textAlign: "left",
              paddingLeft: "4vw",
            }}
          >
            <p>{imageDescriptions[currentImageIndex]}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: "0 0 40%",
          fontFamily: "'Josefin Slab', sans-serif",
          fontSize: "1.3em",
          overflowY: "auto",
          paddingRight: "2vw"
        }}
      >
        <p style={{ lineHeight: "1.6", textAlign: "justify", paddingRight: "10vw", fontWeight: "bold" }}>
          Hi, I'm Brandon, aspiring to merge my passions into a fulfilling
          career. As a licensed pilot, I'm captivated by aviation's vast
          possibilities and am pursuing advanced certifications. With seven
          years as an Emergency Medical Technician-Basic, I've honed critical
          skills in ambulance and ER settings, volunteering at events like Tough
          Mudder and Ragnar Colorado. My dedication to fitness fuels my love for
          outdoor pursuits like skiing, hiking, and climbing. Recently, I've
          delved into coding, finding joy in problem-solving and creating
          user-friendly web solutions. I'm eager to blend these skills in a web
          development career, where I see endless potential for transformation
          and innovation. Join me on this thrilling journey!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;