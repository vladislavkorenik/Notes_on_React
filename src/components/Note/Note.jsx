import React, { Fragment, useContext, useState } from "react";
import "./Note.scss";
import { AlertContext } from "../../context/alert/alertContext";
import { EditModal } from "../EditModal/EditModel";
import { FirebaseContext } from "../../context/firebase/firebaseContext";

export const Note = ({ note }) => {
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const [value, setValue] = useState({ show: "none", showOpacity: 0, note });
  return (
    <Fragment>
      <li className="list-group-item note_space-between">
        <div className="note__info">
          <strong className="text-break">{note.title}</strong>
          <small>{note.date}</small>
        </div>
        <div className="note__buttons">
          <button
            onClick={() => setValue({ show: "block", showOpacity: 1 })}
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit
          </button>
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
        </div>
      </li>
      <EditModal value={value} setValue={setValue} note={note} />
    </Fragment>
  );
};
