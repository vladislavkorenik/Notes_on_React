import React, { Fragment } from "react";

export const Note = ({ note }) => {
  return (
    <Fragment>
      <li className="list-group-item" key={note.id}>
        {note.title}
      </li>
    </Fragment>
  );
};
