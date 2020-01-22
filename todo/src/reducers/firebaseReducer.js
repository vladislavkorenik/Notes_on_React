import { FETCH_NOTES, SHOW_LOADER, NOTE } from "../consts/types";

const handlers = {
  [NOTE.ADD]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [NOTE.REMOVE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload }),
  DEFAULT: state => state
};
export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
