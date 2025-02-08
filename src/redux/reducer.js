const initialState = {
    recipes: [],
    favorites: [],
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_RECIPES":
        return { ...state, recipes: action.payload };
  
      case "TOGGLE_FAVORITE":
        const isFavorite = state.favorites.some((fav) => fav.id === action.payload);
        return {
          ...state,
          favorites: isFavorite
            ? state.favorites.filter((fav) => fav.id !== action.payload)
            : [...state.favorites, state.recipes.find((recipe) => recipe.id === action.payload)],
        };
  
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  