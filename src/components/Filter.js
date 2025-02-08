import React, { useState } from "react";

const Filter = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <input type="text" value={term} onChange={handleChange} placeholder="Search recipes..." />
      <button onClick={() => onSearch(term)}>Search</button>
    </div>
  );
};

export default Filter;
