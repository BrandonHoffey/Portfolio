const Work4 = () => {
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
    marginBottom: "5px",
  };
  const h3Style = {
    paddingLeft: "5px",
    paddingRight: "5px",
    marginBottom: "5px",
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
    marginTop: "1px",
    fontFamily: "'Julius Sans One', sans-serif",
  };
  return (
    <div id="MainContainer" style={MainContainerStyle}>
      <h1 id="Header" style={HeaderStyle}>
        Mountain States Ambulance
      </h1>
      <h2 style={titleStyle}>Emergency Medical Technician</h2>
      <h3 style={h3Style}>Non-Emergent Ambulance Transport Company</h3>
      <h3 style={locationStyle}>Aurora, CO 10/2015 - 12/2016</h3>
      <h3 style={h3Style}>
        &#8226; I worked as an EMT at a non-emergent ambulance company,
        beginning with wheelchair transport and later transitioning to ambulance
        duty alongside a paramedic. In this role, I assessed patients' vital
        signs, administered oxygen, initiated IV lines, managed ambulance
        supplies, and fulfilled duties during 24-hour shifts.
      </h3>
    </div>
  );
};

export default Work4;
