import React from "react";

import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";
const Home = ({ productData, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Lorem ipsum dolor, adipisicing elit.</p>
      </div>
      <div className="products-container">
        {productData?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData },
  };
};
export default Home;
