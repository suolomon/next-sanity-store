import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Lorem ipsum dolor, adipisicing elit.</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2", "product 3"].map((product) => product)}
      </div>
      <FooterBanner/>
    </div>
  );
};

export default Home;
