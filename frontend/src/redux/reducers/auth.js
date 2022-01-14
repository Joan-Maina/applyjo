import { LOGIN } from "../types";

const initialState = { user: {} };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      console.log(JSON.parse(localStorage.getItem("user")));
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")),
      };
    default:
      return state;
  }
};

export default authReducer;
