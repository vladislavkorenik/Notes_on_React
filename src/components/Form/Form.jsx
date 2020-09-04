import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearIndexDB } from "../../logic/indexDB";
import { showAlert } from "../../store/actionCreators/alertActionCreators";
import { addNote } from "../../store/actionCreators/firebaseActionCreators";

export const Form = (props) => {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.loginReducer.authorized);

  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const addFirebaseNote = async (title) => {
      const note = {
        title,
        date: new Date().toLocaleString(),
        id: new Date().getTime(),
      };

      try {
        const response = await fetch(`${props.url}/notes.json`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(note),
        });
        const res = await response.json();

        dispatch(addNote(title, note.date, res.name));
      } catch (e) {
        console.log(e.message);
      }

      clearIndexDB();
    };

    if (value.trim() && authorized) {
      navigator.onLine
        ? addFirebaseNote(value.trim()).then()
        : dispatch(addNote(value.trim()));

      dispatch(showAlert("Note created", "success"));
      setValue("");
    } else if (!authorized) {
      dispatch(showAlert("If you want to add a new note, please log in"));
    } else dispatch(showAlert("Input note name"));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Input something......"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
