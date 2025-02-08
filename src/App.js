import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, toggleFavorite } from "./redux/actions";
import RecipeList from "./components/RecipeList";
import Filter from "./components/Filter";
import Favorites from "./components/Favorites";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesData.recipes);
  const favorites = useSelector((state) => state.recipesData.favorites);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes("pizza")); // Default search term
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(fetchRecipes(term));
  };

  return (
    <div className="app-container">
      <h1>Recipe App</h1>
      <Filter onSearch={handleSearch} />
      <RecipeList recipes={recipes} onFavorite={(id) => dispatch(toggleFavorite(id))} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
