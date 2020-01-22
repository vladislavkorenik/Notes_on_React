import React, { Fragment, useContext } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import "./Note.scss";
import { AlertContext } from "../../context/alert/alertContext";

export const Note = ({ note }) => {
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  return (
    <Fragment>
      <li className="list-group-item note_space-between">
        <div className="note__info">
          <strong>{note.title}</strong>
          <small>{note.date}</small>
        </div>
        <button
          onClick={() => {
            firebase.removeNote(note.id);
            alert.show("Note deleted", "danger");
          }}
          type="button"
          className="btn btn-outline-danger btn-sm"
        >
          &times;
        </button>
      </li>
    </Fragment>
  );
};