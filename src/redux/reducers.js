import { combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "./reducer";

const rootReducer = combineReducers({
  recipesData: recipeReducer,
});

export default rootReducer;
