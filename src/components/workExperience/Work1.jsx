const Work1 = () => {
  const MainContainerStyle = {
    border: "1px solid black",
    marginRight: "35%", 
  };
  const HeaderStyle = {
    border: "1px solid black",
    marginTop: "0px",
  };
  return (
    <div id="MainContainer" style={MainContainerStyle}>
      <h1 id="Header" style={HeaderStyle}>
        Software Development Bootcamp
      </h1>
      <h3>&#8226; Student</h3>
      <h3>
        &#8226; Upright Education Full Stack Software Development Bootcamp{" "}
      </h3>
      <h3>&#8226; Denver, CO 9/11/23 - 12/16/23</h3>
      <h3>
        &#8226; A fully remote full-stack software development bootcamp, mon-fri
        7a-3p. Full SDLC using HTML, CSS, Javascript, React, React Native, plus
        many more development tools.
      </h3>
    </div>
  );
};

export default Work1;
