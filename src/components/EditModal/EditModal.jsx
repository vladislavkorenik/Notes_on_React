import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";
import { createModalStyles } from "../../consts/createModalStyles";

export const EditModal = ({
  props: { setValueOfEditModalDisplay, valueOfEditModalDisplay, note },
}) => {
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  const [inputValue, setInputValue] = useState(note.title);
  const ModalDisplay = createModalStyles(valueOfEditModalDisplay);

  const closeModal = () => {
    setValueOfEditModalDisplay("none");
    setInputValue(note.title);
  };

  const submitHandler = () => {
    if (inputValue.trim()) {
      setValueOfEditModalDisplay("none");
      firebase
        .editNote({ id: note.id, title: inputValue })
        .catch(() =>
          firebase.editLocalNote({ id: note.id, title: inputValue })
        );
      alert.show("Note changed", "success");
    } else {
      alert.show("Input note name");
    }
  };

  return (
    <div style={ModalDisplay} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit your note</h5>
          <button
            onClick={() => closeModal()}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitHandler();
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => closeModal()}
            type="button"
            className="btn btn-secondary"
          >
            Close
          </button>
          <button
            onClick={() => submitHandler()}
            type="button"
            className="btn btn-success"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
