import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography} from '@mui/material';
import MyAccount from '../Profile/MyAccount';



const steps = [
  "Placed",
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered'
];



export default function OrderTraker({activeStep}) {
    
  return (
    

    <Box sx={{ width: '100%' }} style={{ display: "flex", gap: "120px" }}>

<div className="sidebar" style={{ position: "sticky", top: 0 }}>
        <MyAccount />
      </div>
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel  sx={{ color: '#9155FD',fontSize: '44px' }}  className={``}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
