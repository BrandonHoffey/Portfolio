import React, { useState, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

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
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "space-between",
        padding: isMobile ? "15px" : "2px",
        paddingLeft: isMobile ? "15px" : "3vw",
        maxWidth: "100%",
        overflow: "hidden",
        background: "#8ecae6",
        paddingBottom: isMobile ? "30px" : "7px",
      }}
    >
      <div
        style={{
          flex: isMobile ? "none" : "0 0 45%",
          width: isMobile ? "100%" : "auto",
          marginRight: isMobile ? "0" : "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt={`${currentImageIndex}`}
          style={{
            maxWidth: isMobile ? "90%" : "100%",
            maxHeight: isMobile ? "40vh" : "60vh",
            borderRadius: "24px",
            marginTop: "18px",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            gap: "10px",
          }}
        >
          <AiTwotoneLeftSquare
            onClick={goToPrevious}
            style={{ fontSize: isMobile ? "2em" : "2.5em", cursor: "pointer" }}
          >
            {"<--"}
          </AiTwotoneLeftSquare>
          <AiTwotoneRightSquare
            onClick={goToNext}
            style={{ fontSize: isMobile ? "2em" : "2.5em", cursor: "pointer" }}
          >
            {"-->"}
          </AiTwotoneRightSquare>
        </div>
        <div
          style={{
            marginTop: "10px",
            fontFamily: "'Josefin Slab', sans-serif",
            fontSize: isMobile ? "0.95em" : "1.1em",
            fontWeight: "bold",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <p>{imageDescriptions[currentImageIndex]}</p>
        </div>
      </div>
      <div
        style={{
          flex: isMobile ? "none" : "0 0 50%",
          width: isMobile ? "100%" : "auto",
          fontFamily: "'Josefin Slab', sans-serif",
          fontSize: isMobile ? "1em" : "1.3em",
          overflowY: "auto",
          paddingRight: isMobile ? "0" : "3vw",
          marginTop: isMobile ? "10px" : "0",
        }}
      >
        <p
          style={{
            lineHeight: "1.6",
            textAlign: isMobile ? "center" : "justify",
            paddingRight: isMobile ? "0" : "2vw",
            padding: isMobile ? "0 10px" : undefined,
            fontWeight: "bold",
          }}
        >
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
