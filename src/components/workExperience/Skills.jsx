import { useState, useEffect } from "react";

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const titleStyle = {
    display: "flex",
    marginTop: "0px",
    border: "4px solid #023047",
    borderRadius: "10px",
    fontFamily: "'Julius Sans One', sans-serif",
    backgroundColor: "#023047",
    color: "#eeeee4",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: isMobile ? "0.9rem" : undefined,
  };

  const skillsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "4px solid #023047",
    borderRadius: "10px",
    backgroundColor: "#eeeee4",
    marginTop: "10px",
    fontFamily: "'Josefin Slab', sans-serif",
    paddingLeft: "10px",
    paddingRight: "10px",
    width: isMobile ? "100%" : "auto",
  };

  const skillItemStyle = {
    fontSize: isMobile ? "1rem" : undefined,
    margin: isMobile ? "5px 0" : undefined,
  };

  return (
    <>
      <div style={titleStyle}>
        <h1>Highlighted Skills</h1>
      </div>
      <div style={skillsStyle}>
        <h2 style={skillItemStyle}>JavaScript</h2>
        <h2 style={skillItemStyle}>React (Including React Native)</h2>
        <h2 style={skillItemStyle}>Mongo DB</h2>
        <h2 style={skillItemStyle}>Node JS</h2>
        <h2 style={skillItemStyle}>TypeScript</h2>
        <h2 style={skillItemStyle}>Git/GitHub</h2>
        <h2 style={skillItemStyle}>AWS S3</h2>
        <h2 style={skillItemStyle}>Agile Methodology</h2>
        <h2 style={skillItemStyle}>QA Testing (Postman)</h2>
        <h2 style={skillItemStyle}>Debugging</h2>
      </div>
    </>
  );
};

export default Skills;
