import React from "react";
import { NavLink } from "react-router-dom";
import pizza from "../assets/pizza.jpg";
import hamburger from "../assets/hamburger.jpg";
import salad from "../assets/salad.jpg";
import noodle from "../assets/noodle.jpg";

const Category = () => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <NavLink to={"/cuisine/Italian"} className="m-3 text-decoration-none">
        <img
          src={pizza}
          alt="Italian"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <p className="text-center">Italian</p>
      </NavLink>
      <NavLink to={"/cuisine/American"} className="m-3 text-decoration-none">
        <img
          src={hamburger}
          alt="American"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <p className="text-center">American</p>
      </NavLink>
      <NavLink to={"/cuisine/Thai"} className="m-3 text-decoration-none">
        <img
          src={salad}
          alt="Thai"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <p className="text-center">Thai</p>
      </NavLink>
      <NavLink to={"/cuisine/Korean"} className="m-3 text-decoration-none">
        <img
          src={noodle}
          alt="Korean"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <p className="text-center">Korean</p>
      </NavLink>
    </div>
  );
};

export default Category;
