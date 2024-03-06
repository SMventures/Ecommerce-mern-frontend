import React from 'react'

import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

import DeleteIcon from '@mui/icons-material/Delete';

const Wishlist = () => {
    
  return (
    <div className='px:5 lg:px-20 mt-16 my-4'>
        
        <Grid className='space-x-5'container>
            {[1,1,1,1].map((item)=>  <Grid item container className='shadow-xl rounded-md p-5 border ' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top'src="https://i5.walmartimages.com/asr/93001d32-df57-4a84-8f2d-f2dbbf142da3_1.5f2944d9556c99938c2bbd81effa0823.jpeg" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold opacity-50 text-xs space-x-5'>White Women Top</p>
                            <p><span> Color: Blue</span></p>
                                
                            <p>Seller:linaria</p>
                            <p>Rs 500</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box>
                        <DeleteIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'>
                          
                        </DeleteIcon>
                     
                    </Box>
                   
                </Grid>
            </Grid>)}
           
        </Grid>
     
    </div>
  )
}

export default Wishlist
