import React from "react";
import { Note } from "../Note/Note";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes }) => {
  return !notes.length ? (
    <div className="noEntries-container">
      <p
        className="noEntries-text"
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
      >
        No entries
      </p>
    </div>
  ) : (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition classNames={"note"} key={note.id} timeout={800}>
          <Note note={note} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
