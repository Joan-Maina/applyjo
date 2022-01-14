import { FETCHPOSTS } from "../types";

const initialState = { posts: null };

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHPOSTS:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
};
export default postsReducer;
