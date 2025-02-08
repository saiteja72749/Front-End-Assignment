import { combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "./reducer";

const rootReducer = combineReducers({
  recipesData: recipeReducer, // Namespacing it correctly
});

export default rootReducer;
