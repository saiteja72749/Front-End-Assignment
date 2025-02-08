import React, { useState } from "react";
import '../styles/Search.css';


const Filter = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" value={term} onChange={handleChange} placeholder="Search recipes..." className="search-bar input"/>
      <button onClick={() => onSearch(term)} className="search-bar button">Search</button>
    </div>
  );
};

export default Filter;
