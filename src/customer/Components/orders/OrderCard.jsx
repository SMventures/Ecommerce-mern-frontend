import React from 'react'
import Grid from '@mui/material/Grid';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div className='p-5 shadow-sm shadow-black hover:shadow-2xl'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div onClick={() => navigate(`/account/order/${5}`)}

            className='flex cusrsor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/61ibNNm7jKL.jpg" alt="" />
                <div className='ml-5 space-y-2'>
                    <p className=''>Mobile Covers</p>
                    <p className='opacity-50 text-xs font-semibold'>type:Realme C 10</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Pink</p>
                </div>
            </div>
        </Grid>
        <Grid item sx={2}>
            <p>Rs 1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <p>
                <span> Expected Delivery On March 03</span>
            </p>}
            <div> {false && <p>
           < FiberSmartRecordIcon sx={{width:"15px",height:"15px"}} className='text-blue-600  text-sm'/>
                
                <span> Delivered On March 03</span>
                
            </p>} </div>
          
          
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard