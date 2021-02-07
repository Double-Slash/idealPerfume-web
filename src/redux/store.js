import { createStore, combineReducers } from "redux";
import { nextPageReducer, questionSelectionReducer } from "./reducers";

const reducer = combineReducers({
  nextPageReducer: nextPageReducer,
  questionSelectionReducer: questionSelectionReducer,
});

const store = createStore(reducer);

export default store;
