import React, { useState, useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = event => {
    event.preventDefault();
    if (value.trim()) {
      alert.show("Note created", "success");
      setValue("");
    } else {
      alert.show("Input note name");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Input something......"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
