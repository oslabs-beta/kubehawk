import React, { useState } from "react";
import Modal from "react-modal";

// This line is required for accessibility reasons.
Modal.setAppElement("#root");

function TeamInfoModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="team-info-btn" onClick={openModal}>
        Contact
      </button>
      <Modal id="nav-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Team Info"
        // Optional: Add styles for the modal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Contact us via LinkedIn</h2>
        <p>LinkedIn Link</p>
        <button className="close-modal-btn react-modal-close-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default TeamInfoModal;
