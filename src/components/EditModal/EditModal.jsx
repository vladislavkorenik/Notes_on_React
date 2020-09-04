import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { createModalStyles } from "../../consts/createModalStyles";
import { showAlert } from "../../store/actionCreators/alertActionCreators";
import { editNote } from "../../store/actionCreators/firebaseActionCreators";

export const EditModal = ({
  props: { setValueOfEditModalDisplay, valueOfEditModalDisplay, note, url },
}) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(note.title);
  const ModalDisplay = createModalStyles(valueOfEditModalDisplay);

  const closeModal = () => {
    setValueOfEditModalDisplay("none");
    setInputValue(note.title);
  };

  const submitHandler = () => {
    const editFirebaseNote = async (payload) => {
      const note = {
        title: payload.title,
        date: new Date().toLocaleString(),
      };
      await fetch(`${url}/notes/${payload.id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(note),
      });
      dispatch(
        editNote(
          {
            id: payload.id,
            title: payload.title,
          },
          note.date
        )
      );
    };

    if (inputValue.trim() === note.title.trim()) {
      setValueOfEditModalDisplay("none");
      dispatch(showAlert("Nothing changed"));
    } else if (inputValue.trim()) {
      setValueOfEditModalDisplay("none");

      navigator.onLine
        ? editFirebaseNote({ id: note.id, title: inputValue })
        : dispatch(editNote({ id: note.id, title: inputValue }));

      dispatch(showAlert("Note changed", "success"));
    } else {
      dispatch(showAlert("Input note name"));
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
