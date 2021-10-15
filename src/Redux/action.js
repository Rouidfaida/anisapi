import { SET_CHANGE, SET_PUBLIC } from "./actionType";

export const handelSetChange = (payload) => {
  return {
    type: SET_CHANGE,
    payload
  };
};

export const handelSetPublic = (id) => {
  return {
    type: SET_PUBLIC,
    payload: id,
  };
};
