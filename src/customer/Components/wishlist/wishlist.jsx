import React, { useEffect } from "react";
import WishlistItem from "./WishlistItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../../Redux/Customers/Wishlist/Action";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  // Accessing wishlist slice of state from the store
  const { wishlist, loading, error } = useSelector((store) => store);

  console.log("Wishlist component rendering...");
  
  useEffect(() => {
    console.log("Dispatching getWishlist action...");
    if (jwt) {
      dispatch(getWishlist(jwt));
    }
  }, [dispatch, jwt]);

  useEffect(() => {
    console.log("Wishlist state changed:", wishlist);
    console.log("Loading:", loading);
    console.log("Error:", error);
  }, [wishlist, loading, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!wishlist || !wishlist.wishlistItems) {
    return <div>No wishlist items found.</div>;
  }

  return (
    <div className="">
      {wishlist.wishlistItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {wishlist.wishlistItems.map((item) => (
                <WishlistItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
