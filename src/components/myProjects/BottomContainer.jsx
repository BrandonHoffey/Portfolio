import React from "react";
import EscapeTheHospital1 from "../../assets/EscapeTheHospital/1.PNG";
import Jeopardy1 from "../../assets/JeopardyGame/1.PNG";
import Number from "../../assets/GuessTheNumber/1.PNG";

const bottomContainerStyle = {
  border: "1px solid black",
  display: "flex",
  flexDisplay: "row",
  justifyContent: "center",
  gap: "175px",
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
};

const imageContainerStyle = {
  border: "1px solid black",
};

const escapeImageStyle = {
  height: "400px",
  width: "254px",
};

const jeopardyImageStyle = {
  height: "400px",
  width: "185px",
};

const numberStyle = {
  height: "400px",
  width: "792px",
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
          <div>
            <img style={jeopardyImageStyle} src={Jeopardy1} alt="nightlight3" />
          </div>
        </div>
        <div style={bottomContainer3Style} id="bottomContainer3">
          <div>
            <h1 style={titleStyle}>Guess The Number</h1>
          </div>
          <div>
            <img style={numberStyle} src={Number} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default bottomContainer;
