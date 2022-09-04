import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div className="container">
      <h2 className="text-center my-4">{details.title}</h2>
      <div className="text-center">
        <button
          onClick={() => setActive("instructions")}
          className={
            active === "instructions"
              ? "activeButton btn btn-outline-primary me-2"
              : "btn btn-outline-primary me-2"
          }
        >
          Instructions
        </button>
        <button
          onClick={() => setActive("ingredients")}
          className={
            active === "ingredients"
              ? "activeButton btn btn-outline-primary"
              : "btn btn-outline-primary"
          }
        >
          Ingredients
        </button>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div
            className="card mb-5 mx-auto"
            style={{ width: "16rem", height: "300px" }}
          >
            <img
              src={details.image}
              alt={details.title}
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">{details.title}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          {active === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
          {active === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
