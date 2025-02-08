import React from "react";
import '../styles/RecipeList.css';
import { useSelector } from "react-redux";

const RecipeList = ({ recipes, onFavorite }) => {
  const favorites = useSelector((state) => state.recipesData.favorites);

  return (
    <div>
      <h2>Recipes</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => {
          const isFavorite = favorites.some(fav => fav.id === recipe.id);
          
          return (
            <li key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <button onClick={() => onFavorite(recipe)}>
                {isFavorite ? "Added to Favorite" : "Add to Favorite"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
