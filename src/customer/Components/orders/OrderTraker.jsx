import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography, Button } from '@mui/material';
import MyAccount from '../Profile/MyAccount';
import MyAvatar from '../Profile/Avatar';

const steps = [
  "Placed",
  'Order Confirmed',
  'Shipped',
  'Out For Delivery',
  'Delivered'
];

export default function OrderTracker({ activeStep }) {
  return (
    <Box style={{ display: "flex", background: "#f2f2f2" }}>
      <div style={{ background: "#f0f0f0", padding: "20px", width: "30%", marginTop: "20px", marginBottom: "20px" }}>
        <div style={{ background: "#fff", padding: "20px" }}>
          <MyAvatar />
        </div>
        <div style={{ background: "#fff", padding: "20px", marginTop: "20px" }}>
          <MyAccount />
        </div>
      </div>
      <div style={{ padding: "30px", width: "70%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ background: "#fff", padding: "20px", height: "100%", marginBottom: "20px", width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel style={{ width: "100%" }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel sx={{ color: "Blue", fontSize: "44px" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop:' 70px'}}>
            <Typography variant="h5" className="font-medium" style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>No Orders Placed Yet 😢</Typography>
            <Button variant="contained" color="primary" href="/cart">
              Go to Cart
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
