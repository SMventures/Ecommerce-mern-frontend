import React from 'react';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

import DeleteIcon from '@mui/icons-material/Delete';

const SearchResults = ({ productArr }) => {
  console.log('SearchResults:', productArr);
  if (!productArr || productArr.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div>
      <div className="font-semibold mb-2">Search results:</div>
      <Grid className='space-x-5' container>
        {productArr.map((product) => (
          <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}} key={product._id}>
            <Grid item xs={6}>
              <div className='flex items-center space-x-4'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src={product.imageUrl} alt="" />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold opacity-50 text-xs space-x-5'>{product.brand} {product.name}</p>
                  <p><span>Color: {product.color}</span></p>
                  <p>Seller: {product.seller}</p>
                  <p>Price: ₹{product.price}</p>
                </div>
              </div>
            </Grid>
          
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchResults;