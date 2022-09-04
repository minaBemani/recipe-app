import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div className="container mb-5">
      <h3 className="my-3">{params.type} foods</h3>

      <div className="d-flex justify-content-center flex-wrap my-5">
        {cuisine.map((recipe) => (
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

export default Cuisine;
