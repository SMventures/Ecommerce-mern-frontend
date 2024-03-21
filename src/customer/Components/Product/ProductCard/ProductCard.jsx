import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/product/${product?._id}`)
  }
// const ProductCard = ({
//   product,
//   isAddedToWishlist,
//   onWishlistToggle,
//   handleNavigate,
// }) => {
//   const { imageUrl, brand, title, color, discountedPrice, price, discountPersent } = product;

  return (
    <div onClick={handleNavigate} className="productCard w-[15rem] border m-3 transition-all cursor-pointer">
      <div className="h-[20rem] flex justify-center items-center"> {/* Center the image */}
        <img className="h-auto max-w-full" src={imageUrl} alt="" /> {/* Center the image */}
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{brand}</p>
          <p className="items-center">{title}</p>
          <p className="font-semibold opacity-50">{color}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹{discountedPrice}</p>
          <p className="opacity-50 line-through">₹{price}</p>
          <p className="text-green-600 font-semibold">{discountPersent}% off</p>
        </div>
      </div>
      <div className="product-card">
        {/* Other product information */}
        {/* <button onClick={() => onWishlistToggle(product)}>
          {isAddedToWishlist ? (
            < FavoriteBorderIcon className="text-red-500" />
          ) : (
            < FavoriteBorderIcon className="text-gray-500" />
          )}
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
