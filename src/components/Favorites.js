import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
