const initialState = {
    recipes: [],
    favorites: [],
  };
  
  const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_RECIPES":
        return { ...state, recipes: action.payload || [] };
  
      case "TOGGLE_FAVORITE":
        const existingFavorite = state.favorites.find((fav) => fav.id === action.payload.id);
  
        return {
          ...state,
          favorites: existingFavorite
            ? state.favorites.filter((fav) => fav.id !== action.payload.id) // Remove if exists
            : [...state.favorites, action.payload], // Add if not exists
        };
  
      default:
        return state;
    }
  };
  
  export default recipesReducer;
  