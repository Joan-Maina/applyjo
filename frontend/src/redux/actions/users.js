import { LOGIN, FETCHPOSTS } from "../types";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const fetchposts = (data) => {
  return {
    type: FETCHPOSTS,
    payload: data,
  };
};
