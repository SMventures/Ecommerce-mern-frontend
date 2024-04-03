import React, { useEffect } from "react";
import WishlistItem from "./WishlistItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../../Redux/Customers/Wishlist/Action";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  // Accessing wishlist slice of state from the store
  const { wishlist, loading, error } = useSelector((store) => store);

  useEffect(() => {
    // Fetch wishlist data when component mounts
    if (jwt) {
      dispatch(getWishlist(jwt));
    }
  }, [dispatch, jwt]);

  // Display loading spinner while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if fetch fails
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display message if wishlist is empty
  if (!wishlist || !Array.isArray(wishlist.wishlistItems) || wishlist.wishlistItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <SentimentVeryDissatisfiedIcon style={{ width: "3rem", height: "3rem", color: "#7B7B7B" }} /> {/* Render the sad emoji */}
        <p className="text-gray-500 mt-4">Your wishlist is empty</p>
      </div>
    );
  }

  // Render wishlist items if wishlist is not empty
 // Render wishlist items if wishlist is not empty
return (
  <div className="mx-6 max-w-7xl px-2 sm:px-4 lg:px-6"> {/* Reduce left and right padding */}
  {wishlist.wishlistItems.map((item) => (
    <div key={item._id}>
      {/* Log item id to console */}
      {console.log("Item ID:", item._id)}
      {/* Render wishlist item with a link to the product page */}
      <a href={`/product/${item.product._id}`}>
        <WishlistItem item={item} />
      </a>
    </div>
  ))}
</div>

);

};

export default Wishlist;
