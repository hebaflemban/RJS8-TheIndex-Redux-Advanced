//actions related to the books store

import axios from "axios";
import * as actionType from "../actions/actionType";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/api/books/");
      const books = res.data;
      console.log("i'm from action/books", books);

      dispatch({
        type: actionType.FETCHBOOKS,
        payload: books,
      });
    } catch (error) {
      console.log("Books couldn't get fetched");
    }
  };
};
