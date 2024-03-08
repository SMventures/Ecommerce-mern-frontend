import React from 'react';
import ProductCard from '../Product/ProductCard/ProductCard';

const MyComponent = () => {
  const product = {
    _id: 1,
    name: 'Product 1',
    brand: 'Brand 1',
    imageUrl:   "https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70",
    price: 100,
    discountedPrice: 80,
    discountPersent: 20,
    color: 'Red',
  };

  return <ProductCard product={product} />;
};

export default MyComponent;