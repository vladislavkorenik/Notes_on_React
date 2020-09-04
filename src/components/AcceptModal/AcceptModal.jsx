import React from "react";
import { useDispatch } from "react-redux";

import { createModalStyles } from "../../consts/createModalStyles";
import { showAlert } from "../../store/actionCreators/alertActionCreators";
import { removeNote } from "../../store/actionCreators/firebaseActionCreators";

export const AcceptModal = ({
  props: { setValueOfAcceptModalDisplay, valueOfAcceptModalDisplay, note, url },
}) => {
  const dispatch = useDispatch();

  const ModalDisplay = createModalStyles(valueOfAcceptModalDisplay);

  const closeModal = () => {
    setValueOfAcceptModalDisplay("none");
  };

  const acceptModal = () => {
    const removeFirebaseNote = async (id) => {
      console.log(`${url}/notes/${id}.json`)
      await fetch(`${url}/notes/${id}.json`, {
        method: "DELETE",
      });

      dispatch(removeNote(id));
    };

    setValueOfAcceptModalDisplay("none");

    navigator.onLine
      ? removeFirebaseNote(note.id)
      : dispatch(removeNote(note.id));

    dispatch(showAlert("Note deleted", "danger"));
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
