import React, { useState } from 'react';
import resumeScreenshot from '../../assets/Screenshot.png';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>X</button>
        <img style={screenshotStyle} src={resumeScreenshot} alt="Screenshot of my resume" />
      </div>
    </div>
  );
};


const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  position: 'relative',
  width: '80%',
  height: '80%',
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '5px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const screenshotStyle = {
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

export default Modal;