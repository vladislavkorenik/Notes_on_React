import React, { Fragment, useContext, useState } from "react";
import "./Note.scss";
import { EditModal } from "../EditModal/EditModel";
import { AcceptModal } from "../AcceptModal/AcceptModal";
import { SwitchContext } from "../../context/switch/switchContext";

export const Note = ({ note }) => {
  const switcher = useContext(SwitchContext);
  const [value, setValue] = useState({ show: "none", showOpacity: 0, note });
  const [valueModal, setValueModal] = useState({
    show: "none",
    showOpacity: 0
  });
  const classes = `btn ${switcher.themeSwitcher ? "btn-dark" : "btn-danger"}`;

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
            className={classes}
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
