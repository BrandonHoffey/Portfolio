const Work2 = () => {
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
    marginTop: "1px",
    fontFamily: "'Julius Sans One', sans-serif",
  };
  return (
    <div id="MainContainer" style={MainContainerStyle}>
      <h1 id="Header" style={HeaderStyle}>
        Upward Projects Restaurants
      </h1>
      <h2 style={titleStyle}>Server / Bartender</h2>
      <h3 style={h3Style}>Postino Wine Bistro</h3>
      <h3 style={locationStyle}>Highlands Ranch, CO 09/2022 - Current</h3>
      <h3 style={h3Style}>
        &#8226; I provided exceptional customer service to approximately 50
        guests daily, ensuring a positive dining experience. I adapted quickly
        to menu changes and wine rotations, contributed to monthly sales
        averaging $35,000, and developed strong teamwork skills through
        effective communication and cooperation in a fast-paced environment,
        including assisting with drink preparation, restocking, and financial
        duties at the end of shifts.
      </h3>
    </div>
  );
};

export default Work2;
