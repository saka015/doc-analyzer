// Popup.js
import React from 'react';
import Modal from 'react-modal';
import './Popup.css';

Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="popup-modal"
      overlayClassName="popup-overlay"
    >
      <h3>Share Document</h3>
      <p>Share your document with others.</p>
      {/* Additional content goes here */}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default Popup;
