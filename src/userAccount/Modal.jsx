// Modal.js
import React from 'react';
import './Modal.css'; // Import the CSS for modal

const Modal = ({ isOpen, onClose, children }) => {
    
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={() => {
            console.log('Overlay clicked');
            onClose();
        }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;