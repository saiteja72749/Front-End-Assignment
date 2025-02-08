import React from "react";
import "../styles/Favorites.css";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length===0?(
        <p>No favorites added yet.</p>):
        (
      <ul className="favorites-list">
        {favorites.map((recipe) => (
          <li key={recipe.id} className="favorite-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p className="recipe-description">{recipe.description}</p>
            <button className="remove-button" onClick={() => onRemoveFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Favorites;
