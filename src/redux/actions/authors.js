//actions related to the authors store

import axios from "axios";
import * as actionType from "../actions/actionType";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchAuthors = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/api/authors/");
      const authors = res.data;
      console.log("i'm from action/authors", authors);

      dispatch({
        type: actionType.FETCHAUTHORS,
        payload: authors,
      });
    } catch (erorr) {
      console.log("something went wrong");
    }
  };
};
