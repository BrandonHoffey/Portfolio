const Work1 = () => {
  const MainContainerStyle = {
    border: "4px solid #023047",
    marginRight: "35%",
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
    marginBottom: "5px"
  };

  const h3Style = {
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "5px"
  };

  const locationStyle = {
    fontStyle: "italic",
    paddingLeft: "5px",
    paddingRight: "5px",
  };

  const titleStyle = {
    textDecoration: "underline",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "1px",
    marginTop: "1px"
  };
  return (
    <div id="MainContainer" style={MainContainerStyle}>
      <h1 id="Header" style={HeaderStyle}>
        Software Development Bootcamp
      </h1>
      <h2 style={titleStyle}>Student</h2>
      <h3 style={h3Style}>
        Upright Education - Full Stack Software Development Bootcamp
      </h3>
      <h3 style={locationStyle}>Denver, CO 9/11/23 - 12/16/23</h3>
      <h3 style={h3Style}>
        &#8226; A fully remote full-stack software development bootcamp, mon-fri
        7a-3p. Full SDLC using HTML, CSS, Javascript, React, React Native, plus
        many more development tools.
      </h3>
    </div>
  );
};

export default Work1;
