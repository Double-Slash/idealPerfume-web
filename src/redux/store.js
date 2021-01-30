import { createStore, combineReducers } from "redux";
import { currentPageReducer, questionSelectionReducer } from "./reducers";

const reducer = combineReducers({
  currentPageReducer: currentPageReducer,
  questionSelectionReducer: questionSelectionReducer,
});

const store = createStore(reducer);

export default store;
