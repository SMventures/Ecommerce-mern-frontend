import React from 'react';
import SearchResults from './SearchResults';

const MyComponent = ({ location }) => {
  // Check if location is defined before accessing its properties
  const query = location?.search ? new URLSearchParams(location.search).get('query') : null;
  
  // Sample product array (replace with your actual search results)
  const productArr = [
    {
      _id: 1,
      brand: 'Brand 1',
      name: 'Product 1',
      color: 'Red',
      seller: 'Seller 1',
      price: 100,
    },
    {
      _id: 2,
      brand: 'Brand 2',
      name: 'Product 2',
      color: 'Blue',
      seller: 'Seller 2',
      price: 200,
    },
    {
      _id: 3,
      brand: 'Brand 3',
      name: 'Product 3',
      color: 'Green',
      seller: 'Seller 3',
      price: 300,
    },
  ];

  return <SearchResults productArr={productArr} />;
};

export default MyComponent;
