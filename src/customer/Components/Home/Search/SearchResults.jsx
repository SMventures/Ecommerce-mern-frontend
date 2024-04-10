import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import "./SearchResults.css";

const SearchResults = () => {
    const [productArr, setProductsArr] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                // Perform case-insensitive search based on the title field
                const res = await fetch(`http://localhost:5454/api/products/search/${query.toLowerCase()}`);
                const searchedProducts = await res.json();
                setProductsArr(searchedProducts.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
    
        fetchSearchResults();
    }, [query]); // Run the
    return (
        <div style={{ margin: '0 20px', marginBottom: '100px' }}> {/* Add margin-bottom to shift the footer down */}
            <h2>Search Results: ({productArr.length})</h2>
            <div className='search-results'>
                {productArr.map((product) => (
                    <Link to={`/product/${product._id}`} key={product._id}>
                        <div className='search-result-item'>
                            <div className='product-image'>
                                <img src={product.imageUrl} alt='' className='s-image' />
                            </div>
                            <div className='product-details'>
                                <h2 className='product-title'>{product.title}</h2>
                                <p className='product-brand'>{product.brand}</p>
                                <div className='product-price-details'>
                                    <p className='product-price mb-1 font-semibold'>₹{product?.discountedPrice}</p>
                                    <p className='product-discounted-price line-through opacity-50'>₹{product?.price}</p>
                                    <p className='product-discount-percent text-green-600 font-semibold'>{product?.discountPersent}% off</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
