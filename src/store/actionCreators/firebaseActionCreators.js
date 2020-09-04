import { FETCH_NOTES, NOTE } from "../actions/firebaseAction";

export const editNote = (payload, date = new Date().toLocaleString()) => {
  const note = {
    title: payload.title,
    date: date,
  };

  return {
    type: NOTE.EDIT,
    payload: { note, id: payload.id },
  };
};

export const removeNote = (id) => {
  return {
    type: NOTE.REMOVE,
    payload: id,
  };
};

export const addNote = (
  title,
  date = new Date().toLocaleString(),
  id = new Date().getTime()
) => {
  const payload = {
    title,
    date: date,
    id: id,
  };

  return {
    type: NOTE.ADD,
    payload,
  };
};
export const fetchNotes = (payload) => {
  return {
    type: FETCH_NOTES,
    payload,
  };
};
