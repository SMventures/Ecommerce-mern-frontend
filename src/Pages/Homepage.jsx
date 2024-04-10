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
import Section from "../customer/Components/Home/section";
import App from "../customer/Components/Home/app"
import { useState, useEffect } from "react"; // Remove 'React' from here

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Homepage = () => {
  const [menHoodiesProducts, setMenHoodiesProducts] = useState([]);
  const [Headphones, setHeadphones] = useState([]);
  const [womenTsirts, setWomenTshirts] = useState([]);
  const [Fundamental, setFundamental] = useState([]);
  const [Phonecover, setPhonecover] = useState([]);
  const [Pen, setPen] = useState([]);
  const [Allproducts, setProducts] = useState([]);
  const [laptopCover, setlaptopCover] = useState([]);
  const [Phoneskins, setPhoneskins] = useState([]);





  // const [menHoodiesProducts, setMenHoodiesProducts] = useState([]);
  // const [menHoodiesProducts, setMenHoodiesProducts] = useState([]);

  useEffect(() => {
    getMenHoodiesProducts();
    getPhonecover();
    getHeadphones();
    getWomenTshirts();
    getFundamental();
    getPen();
    getAllProducts();
    getlaptopCover();
    getPhoneskins();
  }, []);

  const getlaptopCover = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Laptop_Skins");
    const data = await response.json();
    console.log("All Products:", data.content);
    setlaptopCover(data.content);
  };
  const  getPhoneskins = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Phone_Skins");
    const data = await response.json();
    console.log("All Products:", data.content);
    setPhoneskins(data.content);
  };
  const getAllProducts = async () => {
    const response = await fetch("http://localhost:5454/api/products");
    const data = await response.json();
    console.log("All Products:", data.content);
    setProducts(data.content);
  };

  const getMenHoodiesProducts = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=men_hoodies");
    const data = await response.json();
    console.log("Men Hoodies Products:", data.content); // Add this console.log statement

    setMenHoodiesProducts(data.content);
  };
  const getPen = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Pen");
    const data = await response.json();
    console.log("Pens:", data.content); // Add this console.log statement

    setPen(data.content);
  };
  const getPhonecover = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Phone_Covers");
    const data = await response.json();
    console.log("All phone covers:", data.content); // Add this console.log statement

    setPhonecover(data.content);
  }; 
   const getHeadphones = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Headphones");
    const data = await response.json();
    console.log("All Headphones:", data.content); // Add this console.log statement

    setHeadphones(data.content);
  };  
  const getWomenTshirts = async () => {
    const response = await fetch("http://localhost:5454/api/products?category=women_tshirts");
    const data = await response.json();
    console.log("Women tshirts are:", data.content); // Add this console.log statement

    setWomenTshirts(data.content);
  };  
  
  
  const getFundamental= async () => {
    const response = await fetch("http://localhost:5454/api/products?category=Fundamental_Analysis");
    const data = await response.json();
    console.log("Fundamental Books:", data.content); // Add this console.log statement

    setFundamental(data.content);
  };
  return (
    <div className="">
      <Banner />
      <div className="space-y-10 py-8">
        <Component>
            <HomeProductSection data={Allproducts} section={"New Arrivals"} />
          {/* <Link to="/seasons-top-pickup">
            <HomeProductSection data={mensShoesPage1} section={"Season's Top Pickup"} />
          </Link> */}
          {/* <Link to="/best-selling-books">
            <HomeProductSection data={dressPage1} section={"Best Selling Books"} />
          </Link> */}
                    {/* <HomeProductSection section={"Men Hoodies"} data={menHoodiesProducts} /> */}

          <App
  leftData={womenTsirts}
  leftSection={"Season's Top Pickup"}
  centerData={menHoodiesProducts}
  centerSection={"Top Men's Pickup"}
  rightData={Headphones}
  rightSection={"You May Also Like.."}
/>

<MidSection />
<App
  leftData={Fundamental}
  leftSection={"Best recommended Books"}
  centerData={Phonecover}
  centerSection={"Stylish Phone Covers"}
  rightData={Pen}
  rightSection={"Top Selling Stationery"}
/>

            <HomeProductSection data={Phoneskins} section={"Top Selling Accessories"} />

          {/* <Link to="/Women/Clothing/women_tshirts">
            <HomeProductSection data={Fashion} section={"Trendy Fashion Collection"} />
          </Link>
           */}
          {/* <Link to="/best-of-electronics">
            <HomeProductSection data={men_kurta} section={"Best of Electronics"} />
          </Link> */}
        </Component>
      </div>
    </div>
  );
};

export default Homepage;
