import React from 'react';
import "./ProductCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItemToWishlist } from '../../../../Redux/Customers/Wishlist/Action';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addItemToCart } from '../../../../Redux/Customers/Cart/Action';
import { Button } from "@mui/material";

const ProductCard = ({ product }) => {
  const { _id, title, brand, imageUrl, price, discountedPrice, color, discountPersent } = product; // Assuming _id is the productId
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { productId } = useParams();

  const handleNavigate = () => {
    navigate(`/product/${_id}`); // Use productId for navigation
  };

  const handlewishlistSubmit = async () => {
    try {
      console.log("Submitting wishlist item:", _id); // Log the productId

      const data = { productId: product._id }; // Extract productId

      await dispatch(addItemToWishlist({ data, jwt })); // Use async/await for clarity

      setIsClicked(true); // Toggle the state to change the color
      setShowNotification(true); // Show the notification
      setTimeout(() => setShowNotification(false), 3000); // Hide the notification after 3 seconds
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      // Optionally display an error message to the user
    }
  };
  
  const handleCartSubmit = async () => {
    try {
      console.log("Submitting cart item:", _id); // Log the productId

      const data = { productId: product._id }; // Extract productId

      await dispatch(addItemToCart({ data, jwt })); // Use async/await for clarity
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div className="productCardContainer">
      <div className="productCard w-[15rem] border m-3 transition-all cursor-pointer">
        <div onClick={handleNavigate} className="h-[20rem] flex justify-center items-center relative">
          <FavoriteBorderIcon
            className="absolute top-4 right-4 cursor-pointer" // Adjusted position
            onClick={(e) => {
              e.stopPropagation();
              handlewishlistSubmit();
            }}
            style={{ color: isClicked ? 'red' : 'grey', width: '24px', height: '24px' }}
          />
          <img className="h-auto max-w-full" src={imageUrl} alt="" />

          {/* Notification bar (shifted to the right using flexbox) */}
          {showNotification && (
            <div className="absolute top-8 right-0 mt-2 flex items-center mr-4 bg-green-500 text-white px-4 py-2 rounded"
                 style={{ zIndex: 1 }}>  {/* Ensure it appears above other content */}
              {/* <FavoriteBorderIcon style={{ color: 'white', width: '16px', height: '16px', marginRight: '4px' }} /> */}
              <p>Item added to wishlist</p>
            </div>
          )}
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="items-center">{title}</p>
            <p className="font-bold opacity-60">{brand}</p>
            <p className="font-semibold opacity-50">{color}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="font-semibold">₹{price}</p>
            <p className="opacity-50 line-through">₹{discountedPrice}</p>
            <p className="text-green-600 font-semibold">{discountPersent}% off</p>
          </div>
        </div>
      </div>
      {/* Add to Cart button with blue background and white text */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleCartSubmit}>
          <Button
            variant="contained"
            type="submit"
            sx={{ background: "#2874f0", color: "white", marginTop: "1rem" }} // Blue background and white text
          >
            Add To Cart
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
