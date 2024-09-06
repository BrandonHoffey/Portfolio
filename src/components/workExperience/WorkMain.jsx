import React, { useState } from "react";
import Modal from "./ResumeModal";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";

const WorkMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableStyle = {
    border: "1px solid #333",
    borderRadius: "10px",
    margin: "10px",
    flex: "1 1 auto",
    height: "605px",
  };

  const headerFooterStyle = {
    backgroundColor: "#333",
    color: "#fff",
    height: "50px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    backgroundColor: "#8ecae6",
    padding: "50px",
  };

  const resumeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "200px",
    boxSizing: "border-box",
    border: "1px solid #ddd",
    borderRadius: "25px",
    backgroundColor: "#f9f9f9",
    marginRight: "240px",
    marginTop: "200px",
  };

  return (
    <>
      <div style={containerStyle}>
    <Work1 />
    <Work2 />
    <Work3 />
    <Work4 />
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div style={resumeStyle}>
          <button onClick={() => setIsModalOpen(true)}>View My Resume</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WorkMain;
