import React from "react";
import { Link } from 'react-router-dom'; // Import Link for React Router navigation

// import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  if (!product || !product._id) {
    return null; // or return a placeholder component or message
  }
  console.log("Product:", product);
  console.log("Product imgurl:",product?.imageUrl);

  return (
  
    <div key={product._id} className="mb-5 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
    <Link to={`/product/${product._id}`}> 
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>
</Link>      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;