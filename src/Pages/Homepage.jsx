import React from "react";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import Banner from "../customer/Components/Home/Banner";
import { Fashion } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { men_kurta } from "../Data/Men/men_kurta";
import MidSection from "../customer/Components/Home/MidSection";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <div className="space-y-10 py-8">
        <Component>
          <Link to="/new-arrivals">
            <HomeProductSection data={kurtaPage1} section={"New Arrivals"} />
          </Link>
          <Link to="/seasons-top-pickup">
            <HomeProductSection data={mensShoesPage1} section={"Season's Top Pickup"} />
          </Link>
          <Link to="/best-selling-books">
            <HomeProductSection data={dressPage1} section={"Best Selling Books"} />
          </Link>
          <Link to="/Women/Clothing/women_tshirts">
            <HomeProductSection data={Fashion} section={"Trendy Fashion Collection"} />
          </Link>
          <MidSection />
          <Link to="/top-selling-accessories">
            <HomeProductSection data={gounsPage1} section={"Top Selling Accessories"} />
          </Link>
          <Link to="/best-of-electronics">
            <HomeProductSection data={men_kurta} section={"Best of Electronics"} />
          </Link>
        </Component>
      </div>
    </div>
  );
};

export default Homepage;
