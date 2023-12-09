import todoReducer from "./todos/reducer";
import filterReduer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReduer,
});

export default rootReducer;
