import React from "react";
import "../styles/RecipeDetails.css";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="recipe-details-overlay">
      <div className="recipe-details">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions || "No instructions available."}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
