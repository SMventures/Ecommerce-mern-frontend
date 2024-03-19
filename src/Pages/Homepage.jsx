import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, styled } from "@mui/material";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import Banner from "../customer/Components/Home/Banner";
import { Fashion } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { men_kurta } from "../Data/Men/men_kurta";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Homepage = () => {
  // const [HomeProducts, setHomeProducts] = useState([]);
  // const { productId } = useSelector((store) => store.customersProduct);

  // const getHomeProducts = async (category) => {
  //   const response = await fetch(`http://localhost:5454/api/products?category=${category}`);
  //   const data = await response.json();
  //   setHomeProducts(data.content);
  // };

 
  
  // useEffect(() => {
  //   getHomeProducts();
  // }, [productId]);

  return (
    <div className="">
      <Banner />
      <div className="space-y-10 py-8">
        <Component>
          {/* {Home5Products.slice(0, ).map((data, index) => ( */}
            {/* <div key={index}> */}
              <HomeProductSection data={kurtaPage1} section={"New Arrivals"} />
              <HomeProductSection data={mensShoesPage1} section={"Season's Top Pickup"} />
              <HomeProductSection data={men_kurta} section={"Best of Electronics"} />
              <HomeProductSection data={Fashion} section={"Trendy Fashion Collection"} />
              <HomeProductSection data={dressPage1} section={"Best Selling Books"} />
              <HomeProductSection data={gounsPage1} section={"Top Selling Accessories"} />
              {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
          {/* ))} */}
        </Component>
      </div>
    </div>
  );
};

export default Homepage;
