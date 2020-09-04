import React, { Fragment, useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import { AcceptModal } from "../AcceptModal/AcceptModal";

import "./Note.scss";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../store/actionCreators/alertActionCreators";

const url = "https://react-todo-9fb46.firebaseio.com";

export const Note = ({ note }) => {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.loginReducer.authorized);
  const themeSwitcher = useSelector(
    (state) => state.switchReducer.themeSwitcher
  );

  const [valueOfEditModalDisplay, setValueOfEditModalDisplay] = useState(
    "none"
  );
  const [valueOfAcceptModalDisplay, setValueOfAcceptModalDisplay] = useState(
    "none"
  );
  const classes = `btn ${themeSwitcher ? "btn-dark" : "btn-danger"}`;

  const buttonHandler = (text) => {
    dispatch(showAlert(text));
  };
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
              authorized
                ? setValueOfEditModalDisplay("block")
                : buttonHandler("If you want to edit note, please log in")
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
              authorized
                ? setValueOfAcceptModalDisplay("block")
                : buttonHandler("If you want to delete note, please log in")
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
              url,
            }}
          />
        </div>
      </li>
      <EditModal
        props={{
          setValueOfEditModalDisplay,
          valueOfEditModalDisplay,
          note,
          url,
        }}
      />
    </Fragment>
  );
};
