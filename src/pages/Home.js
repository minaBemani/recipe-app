import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Search />
      <Category />
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
