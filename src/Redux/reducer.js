import { SET_CHANGE } from "./actionType";
import { SET_PUBLIC } from "./actionType";

const initialState = {
  publics: [],
};

const initState = {
  changes: [],
};

export const changeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CHANGE:
      return { ...state, changes: payload };

    default:
      return state;
  }
};
export const publicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PUBLIC:
      return { ...state, publics: payload };

    default:
      return state;
  }
};

