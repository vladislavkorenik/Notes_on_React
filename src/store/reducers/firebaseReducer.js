import {
  addNotesToIndexDB,
  editNotesFromIndexDB,
  getDataFromIndexDB,
  removeNotesFromIndexDB,
} from "../../logic/indexDB";
import { FETCH_NOTES, NOTE } from "../actions/firebaseAction";

const initialState = {
  notes: [],
};
export const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE.EDIT:
      navigator.onLine || editNotesFromIndexDB(action.payload);
      return {
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            note.title = action.payload.note.title;
            note.date = action.payload.note.date;
          }
          return note;
        }),
      };
    case NOTE.ADD:
      navigator.onLine || addNotesToIndexDB(action.payload);
      return {
        notes: [...state.notes, action.payload],
      };
    case NOTE.REMOVE:
      navigator.onLine || removeNotesFromIndexDB(action.payload);
      return {
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case FETCH_NOTES:
      return {
        notes: [...action.payload, ...getDataFromIndexDB()],
        loading: false,
      };

    default:
      return state;
  }
};
