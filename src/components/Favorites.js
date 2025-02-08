import React from "react";
import '../styles/Favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul className="recipe-list">
          {favorites.map((recipe) => (
            <li key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
