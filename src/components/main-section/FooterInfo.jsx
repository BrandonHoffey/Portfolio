import React from "react";

const MainFooter = () => {
  const containerStyle = {
    background: "#023047",
    paddingTop: "10px",
    fontFamily: "'Josefin Slab', sans-serif",
    textAlign: "center",
    overfow: "hidden",
  };

  const linkStyle = {
    color: "#fb8500",
    marginRight: "20px",
    textDecoration: "none",
    fontFamily: "'Julius Sans One', sans-serif",
  };

  const contactInfoStyle = {
    marginTop: "1px",
    marginBottom: "20px",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h3 style={contactInfoStyle}>
        Contact Info: brandon.hoffey@yahoo.com 720-822-1288
      </h3>
      <div>
        <a
          href="https://www.linkedin.com/in/brandon-hoffey-73452b291/"
          style={linkStyle}
        >
          LinkedIn
        </a>
        <a href="https://github.com/BrandonHoffey" style={linkStyle}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default MainFooter;