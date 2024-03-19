import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./SearchResults.css"
const SearchResults = () => {
    const [productArr, setProductsArr] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const res = await fetch(`http://localhost:5454/api/products/search/${query}`);
                const searchedProducts = await res.json();
                setProductsArr(searchedProducts.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [query]); // Run the effect whenever the query parameter changes

    return (
        <div style={{ margin: '0 20px' }}>
        <h2>Search Results</h2>
        <div className='search-results'>
            {productArr.map((product) => (
                <div className='search-result-item' key={product._id}>
                    <div className='product-image'>
                        <div className='image-container' style={{ paddingLeft: '20px' }}>
                            <img src={product.imageUrl} alt='' className='s-image' />
                        </div>
                    </div>
                    <div className='product-details'>
                        <h3 className='product-title'>{product.title}</h3>
                        <p className='product-brand'>{product.brand}</p>
                        <p className='product-price'>
                            <span className='font-semibold'>₹{product?.discountedPrice}</span>
                            <span className='opacity-50 line-through'>₹{product?.price}</span>
                            <span className='text-green-600 font-semibold'>{product?.discountPercent}% off</span>
                        </p>
                        <p className='delivery-info'>FREE delivery by {product.deliveryDate}</p>
                        {/* Add more details as needed */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    
    
    
    
    );
};

export default SearchResults;
