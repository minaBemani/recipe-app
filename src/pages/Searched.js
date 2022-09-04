import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="container mb-5">
      <h4 className="my-3 d-flex justify-content-center">{params.search}</h4>
      <div className="d-flex justify-content-center flex-wrap my-5">
        {searchedRecipes.map((recipe) => (
          <Link to={"/recipe/" + recipe.id}>
            <div
              key={recipe.id}
              className="card me-4 mb-5 overflow-hidden"
              style={{ width: "16rem", height: "230px" }}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">{recipe.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searched;
