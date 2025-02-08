import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ showFavorites, onToggleFavorites }) => {
  return (
    <nav className="navbar">
      <button onClick={onToggleFavorites} className="favorites-button">
        {showFavorites ? "Close Favorites" : "Favorites"}
      </button>
      <div className="navbar-content">
        <h2>Recipe Finder</h2>
      </div>
    </nav>
  );
};

export default Navbar;
