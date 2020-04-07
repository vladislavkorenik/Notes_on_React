import React, { Fragment, useContext, useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import { AcceptModal } from "../AcceptModal/AcceptModal";
import { SwitchContext } from "../../context/switch/switchContext";
import { AlertContext } from "../../context/alert/alertContext";
import { LoginContext } from "../../context/login/loginContext";

import "./Note.scss";

export const Note = ({ note }) => {
  const switcher = useContext(SwitchContext);
  const alert = useContext(AlertContext);
  const login = useContext(LoginContext);

  const [valueOfEditModalDisplay, setValueOfEditModalDisplay] = useState(
    "none"
  );
  const [valueOfAcceptModalDisplay, setValueOfAcceptModalDisplay] = useState(
    "none"
  );
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
            onClick={() =>
              login.authorized
                ? setValueOfEditModalDisplay("block")
                : alert.show("If you want to edit note, please log in")
            }
            type="button"
            className={classes}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit
          </button>
          <button
            onClick={() =>
              login.authorized
                ? setValueOfAcceptModalDisplay("block")
                : alert.show("If you want to delete note, please log in")
            }
            type="button"
            className="btn btn-outline-danger btn-sm"
          >
            &times;
          </button>
          <AcceptModal
            props={{
              setValueOfAcceptModalDisplay,
              valueOfAcceptModalDisplay,
              note,
            }}
          />
        </div>
      </li>
      <EditModal
        props={{ setValueOfEditModalDisplay, valueOfEditModalDisplay, note }}
      />
    </Fragment>
  );
};
