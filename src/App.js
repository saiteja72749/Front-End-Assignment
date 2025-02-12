import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, toggleFavorite } from "./redux/actions";
import RecipeList from "./components/RecipeList";
import Filter from "./components/Filter";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import "./App.css";
import "./styles/global.css";
// import { DropDown } from "./components/DropDown";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesData.recipes);
  const favorites = useSelector((state) => state.recipesData.favorites);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false); // Toggle state

  useEffect(() => {
    dispatch(fetchRecipes("pizza"));
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(fetchRecipes(term));
  };

  return (
    <div className="app-container">
      <Navbar showFavorites={showFavorites} onToggleFavorites={() => setShowFavorites(!showFavorites)} />
       <Filter onSearch={handleSearch} />
      
      <div className="main-content">
      
      <RecipeList recipes={recipes} onFavorite={(recipe) => dispatch(toggleFavorite(recipe))} />
        
         Favorites Sidebar
         <div className={`favorites-container ${showFavorites ? "open" : ""}`}>
        <Favorites favorites={favorites} onRemoveFavorite={(id) => dispatch(toggleFavorite({ id }))} />
    	{/* <h1>sai</h1> */}
      {/* <DropDown/> */}
        </div>
      </div>
    // </div>
  );
};

export default App;
