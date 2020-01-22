import React, { Fragment, useContext } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import "./Note.scss";

export const Note = ({ note }) => {
  const firebase = useContext(FirebaseContext);
  return (
    <Fragment>
      <li className="list-group-item note_space-between">
        <div className="note__info">
          <strong>{note.title}</strong>
          <small>{note.date}</small>
        </div>
        <button
          onClick={() => firebase.removeNote(note.id)}
          type="button"
          className="btn btn-outline-danger btn-sm"
        >
          &times;
        </button>
      </li>
    </Fragment>
  );
};
