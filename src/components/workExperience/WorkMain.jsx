import React from "react";

const WorkMain = () => {
  const tableStyle = {
    border: "1px solid #333",
  };

  const headerFooterStyle = {
    backgroundColor: "#333",
    color: "#fff",
  };

  return (
    <>
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
    </>
  );
};

export default WorkMain;
