//a file that combines all the reducers and returns a root reducer
import { combineReducers } from "redux";

// import reducer as authorsReducer from "./authors";
// import reducer as authorsReducer from "./authors";
import authorsReducer from "./authors";
//we can name it differently here
import booksReducer from "./books";

const rootReducer = combineReducers({
  rootAuthors: authorsReducer,
  rootBooks: booksReducer,
});

export default rootReducer;
