import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className='px:5 lg:px-20 mt-16 my-4'>
            <div className="font-semibold mb-2">Search results:</div>
            <Grid className='space-x-5' container>
                {productArr.map((product) => (
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }} key={product._id}>
                        <Grid item xs={6}>
                            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='flex items-center space-x-4'>
                                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={product.imageUrl} alt="" />
                                    <div className='space-y-2 ml-5'>
                                        <p className='font-semibold opacity-50 text-xs space-x-5'> {product.name}</p>
                                        <p>{product.brand}</p>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SearchResults;
