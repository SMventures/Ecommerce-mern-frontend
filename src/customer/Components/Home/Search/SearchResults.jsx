import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { useParams, Link } from 'react-router-dom'; // Import Link
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
            <h2>Search Results : ({productArr.length})</h2> {/* Display total number of results */}
            <div className='search-results'>
                {productArr.map((product) => (
                    <Link to={`/product/${product._id}`} key={product._id}> {/* Link to product detail page */}
                        <div className='search-result-item'>
                            <div className='product-image'>
                                <div className='image-container' style={{ paddingLeft: '20px' }}>
                                    <img src={product.imageUrl} alt='' className='s-image' />
                                </div>
                            </div>
                            <div className='product-details'>
                                <h2 className='product-title'>{product.title}</h2>
                                <p className='product-brand'>{product.brand}</p>
                                <p className='product-price'>
                                    <span className='font-semibold'>₹{product?.discountedPrice}</span>
                                    <span className='opacity-50 line-through'>₹{product?.price}</span>
                                    <span className='text-green-600 font-semibold'>{product?.discountPercent}% off</span>
                                </p>
                                {/* Add more details as needed */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
