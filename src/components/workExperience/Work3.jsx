import { useState, useEffect } from "react";

const Work3 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const MainContainerStyle = {
    border: "4px solid #023047",
    marginRight: isMobile ? "0" : "35%",
    fontFamily: "'Josefin Slab', sans-serif",
    backgroundColor: "#eeeee4",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  const HeaderStyle = {
    marginTop: "0px",
    fontFamily: "'Julius Sans One', sans-serif",
    backgroundColor: "#023047",
    color: "#eeeee4",
    marginBottom: "5px",
    fontSize: isMobile ? "1.1rem" : undefined,
    padding: isMobile ? "8px 5px" : undefined,
  };
  const h3Style = {
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "5px",
    fontSize: isMobile ? "0.95rem" : undefined,
  };

  const locationStyle = {
    fontStyle: "italic",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: isMobile ? "0.9rem" : undefined,
  };

  const titleStyle = {
    textDecoration: "underline",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "1px",
    marginTop: "1px",
    fontFamily: "'Julius Sans One', sans-serif",
    fontSize: isMobile ? "1rem" : undefined,
  };
  return (
    <div id="MainContainer" style={MainContainerStyle}>
      <h1 id="Header" style={HeaderStyle}>
        Littleton Emergency Department
      </h1>
      <h2 style={titleStyle}>Critical Care Technician</h2>
      <h3 style={h3Style}>Level 2 trauma center in Littleton, CO</h3>
      <h3 style={locationStyle}>Littleton, CO 01/2017 - 09/2022</h3>
      <h3 style={h3Style}>
        &#8226; I assisted with various procedures such as splinting,
        suture/staple removal, and CPR, showcasing versatility and adaptability
        in healthcare settings. Additionally, I conducted over 30 intravenous
        lines daily for blood draw and medication administration, emphasizing
        precision and attention to detail.
      </h3>
    </div>
  );
};

export default Work3;
