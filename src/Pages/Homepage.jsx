import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import Slide from "../customer/Components/Home/Slide"
import Header from "../customer/Components/Home/Header"
import MidSection from "../customer/Components/Home/MidSection";
import { Box, styled } from '@mui/material';
import Navigation from "../customer/Components/Navbar/Navigation";
import Banner from "../customer/Components/Home/Banner";
// import { sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Homepage = () => {

  return (
    <div className="">
      {/* <Header/> */}
      {/* <Navigation/> */}
<Banner/>
      <div className="space-y-10 py-8">
      <Component>
     
        <Slide title="New Arrivals" timer={false} />
        <Slide title="Season's Top Pickup" timer={false} />
        <MidSection />
        <Slide title="Best of Electronics" timer={false} />
        <Slide title="Recommendations" timer={false} />
        <Slide title="Trendy Fashion Collection" timer={false}  />
        <Slide title="Best Selling Books" timer={false}  />
      </Component>
      {/* <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
