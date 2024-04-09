import React from 'react'
import AddressCard from '../adreess/AdreessCard'
import Ordertracker from './OrderTraker'
import Grid from '@mui/material/Grid';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from "@mui/material/Box";
import { blue, deepPurple } from '@mui/material/colors';

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20'>
        <h1 className='font-bold text-xl py-7'>Dilevery Address</h1>
        <div> <AddressCard/></div>
        <div className='py-20'>
            <Ordertracker activeStep={3}/>
        </div>
        <Grid className='space-x-5'container>
            {[1,1,1,1].map((item)=>  <Grid item container className='shadow-xl rounded-md p-5 border ' sx={{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top'src="https://i5.walmartimages.com/asr/93001d32-df57-4a84-8f2d-f2dbbf142da3_1.5f2944d9556c99938c2bbd81effa0823.jpeg" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold opacity-50 text-xs space-x-5'>White Women Top</p>
                            <p><span> Color: White</span>
                                <span className='space-x-5'>size:XL</span></p>
                            <p>Seller:linaria</p>
                            <p>Rs 500</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color:blue[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'>
                          
                        </StarBorderIcon>
                     
                    </Box>
                    <span>Rate & Review Product</span>
                </Grid>
            </Grid>)}
           
        </Grid>
     
    </div>
  )
}

export default OrderDetail