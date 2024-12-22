import React from "react";
import EscapeTheHospital1 from "../../assets/EscapeTheHospital/1.PNG";
import Jeopardy1 from "../../assets/JeopardyGame/1.PNG";
import Number from "../../assets/GuessTheNumber/1.PNG";

const bottomContainerStyle = {
  border: "1px solid black",
  display: "flex",
  flexDisplay: "row",
  justifyContent: "center",
  gap: "80px",
  marginBottom: "80px",
};

const bottomContainer1Style = {
  border: "1px solid black",
};

const bottomContainer2Style = {
  border: "1px solid black",
};

const bottomContainer3Style = {
  border: "1px solid black",
};

const titleStyle = {
  border: "1px solid black",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  marginTop: "0",
  marginBottom: "4px",
  fontFamily: "'Julius Sans One', sans-serif",
  backgroundColor: "#023047",
  color: "#eeeee4",
};

const imageContainerStyle = {
  border: "4px solid #023047",
  backgroundColor: "#eeeee4",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "400px"
};

const jeopardyContainerStyle = {
  border: "4px solid #023047",
  backgroundColor: "#eeeee4",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const numberContainerStyle = {
  border: "4px solid #023047",
  backgroundColor: "#eeeee4",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "278px"
}

const escapeImageStyle = {
  height: "400px",
  width: "550px",
  borderRadius: "5px",
};

const jeopardyImageStyle = {
  height: "259px",
  width: "550px",
  borderRadius: "10px",
};

const numberStyle = {
  height: "278px",
  width: "550px",
  borderRadius: "5px",
};

const bottomContainer = () => {
  return (
    <>
      <div style={bottomContainerStyle} id="bottomContainer">
        <div style={bottomContainer1Style} id="bottomContainer1">
          <div>
            <h1 style={titleStyle}>Escape The Hospital</h1>
          </div>
          <div style={imageContainerStyle}>
            <img
              style={escapeImageStyle}
              src={EscapeTheHospital1}
              alt="image1"
            />
          </div>
        </div>
        <div style={bottomContainer2Style} id="bottomContainer2">
          <div>
            <h1 style={titleStyle}>Jeopardy Board</h1>
          </div>
          <div style={jeopardyContainerStyle}>
            <img style={jeopardyImageStyle} src={Jeopardy1} alt="nightlight3" />
          </div>
        </div>
        <div style={bottomContainer3Style} id="bottomContainer3">
          <div>
            <h1 style={titleStyle}>Guess The Number</h1>
          </div>
          <div style={numberContainerStyle}>
            <img style={numberStyle} src={Number} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default bottomContainer;
