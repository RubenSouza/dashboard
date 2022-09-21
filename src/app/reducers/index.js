import { combineReducers } from "redux";

const reducers = combineReducers({
  root: (state) => state || {},
});

export default reducers;
