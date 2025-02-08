import React from "react";

const RecipeList = ({ recipes, onFavorite }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <button onClick={() => onFavorite(recipe.id)}>Favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
