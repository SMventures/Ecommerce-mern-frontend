import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../../../Redux/Customers/Wishlist/Action";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromWishlist = () => {
    const data = { wishlistItemId: item?._id, jwt };
    dispatch(removeWishlistItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}, White</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-lg">
              ₹{item?.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-sm lg:text-base mt-5">
        <Button onClick={handleRemoveItemFromWishlist} variant="text">
          Remove from Wishlist
        </Button>
      </div>
    </div>
  );
};

export default WishlistItem;
