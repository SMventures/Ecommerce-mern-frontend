import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import { blue } from "@mui/material/colors";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  const [totalAmountBefore, setTotalAmountBefore] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [itemQuant, setItemQuant] = useState(0);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [dispatch, jwt]);

  useEffect(() => {
    if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
      // If cart or cartItems are undefined or empty, reset the state
      setTotalAmountBefore(0);
      setTotalAmount(0);
      setDiscount(0);
      setItemQuant(0);
      return;
    }
  
    // Calculate total amount
    const calculateTotalAmount = () => {
      return cart.cartItems.reduce((total, item) => {
        if (item && item.product && item.quantity && item.product.discountedPrice) {
          return total + item.product.discountedPrice * item.quantity;
        } else {
          return total;
        }
      }, 0);
    };
  
    // Calculate total amount before discount
    const calculateTotalAmountBefore = () => {
      return cart.cartItems.reduce((total, item) => {
        if (item && item.product && item.quantity && item.product.price) {
          return total + item.product.price * item.quantity;
        } else {
          return total;
        }
      }, 0);
    };
  
    setTotalAmountBefore(calculateTotalAmountBefore());
    setTotalAmount(calculateTotalAmount());
  
    // Calculate total discount
    const calculateDiscount = () => {
      return cart.cartItems.reduce((discount, item) => {
        if (item && item.product && item.quantity && item.product.price && item.product.discountedPrice) {
          return discount + (item.product.price - item.product.discountedPrice) * item.quantity;
        } else {
          return discount;
        }
      }, 0);
    };
  
    setDiscount(calculateDiscount());
  
    // Calculate total item quantity
    const totalItems = cart.cartItems.reduce((total, item) => {
      if (item && item.quantity) {
        return total + item.quantity;
      } else {
        return total;
      }
    }, 0);
    setItemQuant(totalItems);
  
  }, [cart]);
  

  return (
    <div className="">
      {cart && cart.cartItems && cart.cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cart.cartItems.map((item) => (
                item && <CartItem key={item.id} item={item} showButton={true}/>
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price {itemQuant} item</span>
                  <span>₹{totalAmountBefore}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{totalAmount}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%",  backgroundColor: blue[700], // Change the background color to blue
                "&:hover": {
                  backgroundColor: blue[500] // Change the background color on hover
                } }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <SentimentVeryDissatisfiedIcon style={{ width: "3rem", height: "3rem", color: "#7B7B7B" }} /> {/* Render the sad emoji */}
          <p className="text-gray-500 mt-4">Your bag is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
