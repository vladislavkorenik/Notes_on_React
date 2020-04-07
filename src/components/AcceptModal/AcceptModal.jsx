import React, { useContext } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";
import { createModalStyles } from "../../consts/createModalStyles";

export const AcceptModal = ({
  props: { setValueOfAcceptModalDisplay, valueOfAcceptModalDisplay, note },
}) => {
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  const ModalDisplay = createModalStyles(valueOfAcceptModalDisplay);

  const closeModal = () => {
    setValueOfAcceptModalDisplay("none");
  };

  const acceptModal = () => {
    setValueOfAcceptModalDisplay("none");
    firebase.removeNote(note.id);
    alert.show("Note deleted", "danger");
  };

  return (
    <div style={ModalDisplay} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Are you sure you want to delete the note?
          </h5>
          <button
            onClick={() => closeModal()}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => closeModal()}
            type="button"
            className="btn btn-secondary"
          >
            No
          </button>
          <button
            onClick={() => acceptModal()}
            type="button"
            className="btn btn-success"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
