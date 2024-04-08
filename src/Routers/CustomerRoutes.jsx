import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import Cart from "../customer/Components/Cart/Cart";
import Wishlist from "../customer/Components/wishlist/wishlist";
import SearchResults from "../customer/Components/Home/Search/SearchResults"
import MyComponent from "../customer/Components/Home/MyComponent"
import FAQ from "../customer/Components/footer/FAQ";
import About from "../customer/Components/footer/About";
import Prod from "../customer/Components/footer/prod";
import Notfound from "../Pages/Notfound"
import AuthModal from "../customer/Components/Auth/AuthModal";
import LoginUserForm from "../customer/Components/Auth/Login";
import RegisterUserForm from "../customer/Components/Auth/Register";
import UnauthorizedPage from "../Pages/Unauthorized"
import AdminPannel from "../Admin/AdminPannel";
import Terms from "../customer/Components/footer/Terms";
import Profile from '../customer/Components/Profile/Profile'
import OrderTraker from "../customer/Components/orders/OrderTraker";
import AddAddress from "../customer/Components/Checkout/AddAddress";

const CustomerRoutes = () => {
    const location = useLocation();
    const isAdmin = false;

    const showNavigation = location.pathname !== "*";

    return (
        <ThemeProvider theme={customerTheme}>
            {showNavigation && <Navigation />}
            <Routes>
                <Route path="/login" element={<Homepage  />} />
                <Route path="/register" element={<Homepage />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/About" element={<About />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/Prod" element={<Prod />} />
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/orderTracker" element={<OrderTraker />} />
                <Route path="/account/addAddress" element={<AddAddress />} />
                <Route path="/Profile/Profile" element={<Profile />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />
                <Route path="/account/rate/:productId" element={<RateProduct />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment/:orderId" element={<PaymentSuccess />} />
                <Route path="/SearchResults/:query" element={<SearchResults />} />
                <Route path="/my-component" element={<MyComponent />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    );
};

export default CustomerRoutes;
