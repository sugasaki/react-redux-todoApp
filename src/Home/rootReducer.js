// src/rootReducer
import { combineReducers } from "redux";
import HomeReducer from "./reducer";

export default combineReducers({
  home: HomeReducer
  // mapStateToPropsでstate.home.fooなどと参照できる
});