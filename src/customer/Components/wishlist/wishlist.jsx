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
  const { wishlist } = useSelector((store) => store);
  console.log("wishlist ", wishlist);

  useEffect(() => {
    dispatch(getWishlist(jwt));
  }, [jwt]);

  // Add a null check to prevent accessing undefined properties
  if (!wishlist || !wishlist.wishlistItems) {
    return <div>Loading...</div>;
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
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">WISHLIST DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Items ({wishlist.totalItems})</span>
                  {/* You can add more details here like total price, discounts, etc. */}
                </div>
                {/* Add more details about wishlist items if necessary */}
                <hr />
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
