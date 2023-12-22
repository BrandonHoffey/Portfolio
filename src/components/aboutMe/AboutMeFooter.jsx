import React from "react";

const AboutMeFooter = () => {
  const containerStyle = {
    background: "#023047",
    padding: "20px",
    fontFamily: "'Josefin Slab', sans-serif",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fb8500",
    marginRight: "20px",
    textDecoration: "none",
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

export default AboutMeFooter;
