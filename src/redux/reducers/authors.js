//the reducer that handles author actions

import { FETCHAUTHORS } from "../actions/actionType";

const initialState = {
  authors: [],
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHAUTHORS:
      console.log("inside author reducer case 1", action.payload);
      return {
        ...state,
        authors: state.authors.concat(action.payload),
      };
    default:
      return state;
  }
};

export default authorsReducer;
