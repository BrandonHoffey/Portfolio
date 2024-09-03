import React, { useState } from "react";
import Modal from "./ResumeModal";

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
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <table style={tableStyle}>
              <thead style={headerFooterStyle}>
                <tr>
                  <th colspan="3">Software Development Bootcamp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Student Upright Education Full Stack Software Development
                    Bootcamp Denver, CO 9/11/23-12/16/23 A fully remote
                    full-stack software development bootcamp, mon-fri 7a-3p.
                    Full SDLC using HTML, CSS, Javascript, React, React Native,
                    plus many more development tools.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table style={tableStyle}>
              <thead style={headerFooterStyle}>
                <tr>
                  <th colspan="3">Postino Bistro & Wine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
                  <td>Hello</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table style={tableStyle}>
              <thead style={headerFooterStyle}>
                <tr>
                  <th colspan="3">Littleton Emergency Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
                  <td>Hello</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table style={tableStyle}>
              <thead style={headerFooterStyle}>
                <tr>
                  <th colspan="3">Mountain States Ambulance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
                  <td>Hello</td>
                </tr>
              </tbody>
            </table>
          </div>
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
