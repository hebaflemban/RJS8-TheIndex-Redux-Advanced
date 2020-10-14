//the reducer that handles book actions

import { FETCHBOOKS } from "../actions/actionType";

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHBOOKS:
      console.log("inside book reducer case 1", action.payload);

      return {
        ...state,
        books: state.books.concat(action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
