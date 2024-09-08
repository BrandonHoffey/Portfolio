const Work4 = () => {
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
        Mountain States Ambulance
      </h1>
      <h3>&#8226; Emergency Medical Technician</h3>
      <h3>&#8226; Non-Emergent Ambulance Transport Company</h3>
      <h3>&#8226; Aurora, CO 10/2015 - 12/2016</h3>
      <h3>
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
