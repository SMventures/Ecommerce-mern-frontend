import React, { useEffect, useState } from 'react';
import HomeProductCard from "../../Home/HomeProductCard"; // Assuming you have a component for displaying product cards

function ThingsBoughtTogether({ productId }) {
  // State to hold category-wise products
  const [categoryProducts, setCategoryProducts] = useState([]);

  // Fetch category-wise products data based on the productId
  useEffect(() => {
    // Fetch products based on the "Women's T-Shirts" category
    fetch(`/api/products?category=Women's T-Shirts`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching Women\'s T-Shirts products:', error);
      });
  }, []);

  return (
    <section className="pt-10">
      <h1 className="py-5 text-xl font-bold">Women's T-Shirts Bought Together</h1>
      <div className="flex flex-wrap space-y-5">
        {categoryProducts.slice(0, 5).map((product) => (
          <div key={product._id} className="mb-5">
            <HomeProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThingsBoughtTogether;