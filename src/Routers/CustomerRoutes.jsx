import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
// import Search from "../customer/Components/Home/Search";
import Cart from "../customer/Components/Cart/Cart";
import Wishlist from "../customer/Components/wishlist/wishlist";
import SearchResults from "../customer/Components/Home/Search/SearchResults"
import  MyComponent from "../customer/Components/Home/MyComponent"
import FAQ from "../customer/Components/footer/FAQ";
import About from "../customer/Components/footer/About";
// import Features from "../customer/Components/footer/Features";
// import Pricing from "../customer/Components/footer/Pricing";
// import { Highlight } from "@mui/icons-material";
// import Highlights from "../customer/Components/footer/Highlights";
import Terms from "../customer/Components/footer/Terms";

const CustomerRoutes = () => {
    const location = useLocation();


  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<Homepage />}></Route>
     <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Terms" element={<Terms/>}></Route>
     
        {/* <Route path="/Features" element={<Features />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Highlights" element={<Highlights />}></Route>        */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="/search/:query" element={<SearchResults/>} /> */}
        <Route path="/SearchResults/:query" element ={<SearchResults />} />

        <Route path="/my-component" element={<MyComponent />} />


        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
