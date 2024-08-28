import React, { useState } from 'react';
import Modal from './ResumeModal';

const WorkMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableStyle = {
    border: "1px solid #333",
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
  };

  const resumeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    padding: "20px",
    boxSizing: "border-box",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={{ flex: "1 1 auto", display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <table style={tableStyle}>
              <thead style={headerFooterStyle}>
                <tr>
                  <th colspan="3">Software Development Bootcamp</th>
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
