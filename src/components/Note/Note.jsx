import React, { Fragment, useState } from "react";
import "./Note.scss";
import { EditModal } from "../EditModal/EditModel";
import { AcceptModal } from "../AcceptModal/AcceptModal";

export const Note = ({ note }) => {
  const [value, setValue] = useState({ show: "none", showOpacity: 0, note });
  const [valueModal, setValueModal] = useState({
    show: "none",
    showOpacity: 0
  });

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
            onClick={() => setValueModal({ show: "block", showOpacity: 1 })}
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            &times;
          </button>
          <AcceptModal
            valueModal={valueModal}
            setValueModal={setValueModal}
            note={note}
          />
        </div>
      </li>
      <EditModal value={value} setValue={setValue} note={note} />
    </Fragment>
  );
};
