export const fetchRecipes = (query) => async (dispatch) => {
    const appId = process.env.REACT_APP_EDAMAM_APP_ID;
    const appKey = process.env.REACT_APP_EDAMAM_APP_KEY;
    const userId = "saiteja72749";
  
    console.log("App ID:", appId);
    console.log("App Key:", appKey);
  
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`,
        {
          method: "GET",
          headers: {
            "Edamam-Account-User": userId,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      dispatch({
        type: "SET_RECIPES",
        payload: data.hits.map((hit) => ({
          id: hit.recipe.uri,
          title: hit.recipe.label,
          image: hit.recipe.image,
        })),
      });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  
  export const toggleFavorite = (recipe) => (dispatch, getState) => {
    const { favorites } = getState().recipesData;
  
    // Check if the recipe exists in favorites
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
  
    let updatedFavorites;
    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, recipe];
    }
  
    dispatch({
      type: "SET_FAVORITES",
      payload: updatedFavorites,
    });
  };
  