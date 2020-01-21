import React, { Fragment } from "react";
import './Note.scss'

export const Note = ({ note }) => {
  return (
    <Fragment>
      <li className="list-group-item note_space-between">
        <div className="note__info">
          <strong>{note.title}</strong>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        <button type="button" className="btn btn-outline-danger btn-sm">
          &times;
        </button>
      </li>
    </Fragment>
  );
};
