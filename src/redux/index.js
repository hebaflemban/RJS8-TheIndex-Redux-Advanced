//a file that creates and returns a redux store
import { createStore, compose, applyMiddleware } from "redux";
import { fetchAuthors, fetchBooks } from "./actions";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

export default store;
