import { FETCH_NOTES, SHOW_LOADER, NOTE } from "../consts/types";
import {
  addNotesToIndexDB,
  editNotesFromIndexDB,
  getDataFromIndexDB,
  removeNotesFromIndexDB,
} from "../logic/indexDB";

const handlers = {
  [NOTE.EDIT]: (state, { payload }) => {
    editNotesFromIndexDB(payload);
    return {
      ...state,
      notes: state.notes.map((note) => {
        if (note.id === payload.id) {
          note.title = payload.note.title;
          note.date = payload.note.date;
        }
        return note;
      }),
    };
  },
  [NOTE.ADD]: (state, { payload }) => {
    addNotesToIndexDB(payload);
    return {
      ...state,
      notes: [...state.notes, payload],
    };
  },
  [NOTE.REMOVE]: (state, { payload }) => {
    removeNotesFromIndexDB(payload);
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== payload),
    };
  },
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [FETCH_NOTES]: (state, { payload }) => {
    return {
      ...state,
      notes: [...payload, ...getDataFromIndexDB()],
      loading: false,
    };
  },
  DEFAULT: (state) => state,
};
export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
