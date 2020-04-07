import React, { useState, useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { LoginContext } from "../../context/login/loginContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const login = useContext(LoginContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim() && login.authorized) {
      firebase
        .addNote(value.trim())
        .then(() => alert.show("Note created", "success"))
        .catch(() => alert.show("Ooops...", "danger"));
      setValue("");
    } else if (!login.authorized) {
      alert.show("If you want to add a new note, please log in");
    } else alert.show("Input note name");
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
