import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mt-4 w-25 mx-auto">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="search for foods..."
        className="form-control"
      />
      <button className="input-group-text">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default Search;
