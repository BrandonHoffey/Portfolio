const Work2 = () => {
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
        Upward Projects Restaurants
      </h1>
      <h3>&#8226; Server / Bartender</h3>
      <h3>&#8226; Postino Wine Bistro</h3>
      <h3>&#8226; Highlands Ranch, CO 09/2022 - Current</h3>
      <h3>
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
