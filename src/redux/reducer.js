const initialState = {
  recipes: [],
  favorites: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };

    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
};

export default recipesReducer;
