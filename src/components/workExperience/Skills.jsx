const Skills = () => {
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
  }

  return (
    <>
      <div style={titleStyle}>
        <h1>Highlighted Skills</h1>
      </div>
      <div style={skillsStyle}>
        <h2>JavaScript</h2>
        <h2>React (Including React Native)</h2>
        <h2>Mongo DB</h2>
        <h2>Node JS</h2>
        <h2>TypeScript</h2>
        <h2>Git/GitHub</h2>
        <h2>AWS S3</h2>
        <h2>Agile Methodology</h2>
        <h2>QA Testing (Postman)</h2>
        <h2>Debugging</h2>
      </div>
    </>
  );
};

export default Skills;
