import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { AlertContext } from "../../context/alert/alertContext";

export const EditModal = ({ value, setValue, note }) => {
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  const [inputValue, setInputValue] = useState(note.title);
  const ModalDisplay = {
    display: value.show,
    opacity: value.showOpacity,
    maxWidth: "500px",
    margin: "150px auto",
    left: "50%",
    transform: "translateX(-50%)"
  };

  const closeModal = () => {
    setValue({ show: "none", showOpacity: 0 });
    setInputValue(note.title);
  };

  const submitHandler = () => {
    if (inputValue.trim()) {
      firebase.editNote({ id: note.id, title: inputValue });
      setValue({ show: "none", showOpacity: 0 });
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
            onSubmit={event => {
              event.preventDefault();
              submitHandler();
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
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
